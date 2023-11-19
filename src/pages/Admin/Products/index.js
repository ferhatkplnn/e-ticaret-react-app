import React, { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, fetchProductList } from "../../../api";
import { Button, Text, Flex } from "@chakra-ui/react";
import { Table, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import moment from "moment";

function Products() {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products", "admin"],
    queryFn: fetchProductList,
  });

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [],
        refetchType: "all",
      });

      message.success({
        content: "The product has been successfully deleted",
        key: "product_delete",
        duration: 2,
      });
    },
  });

  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Created At",
        // dataIndex: "createdAt",
        key: "createdAt",
        render: (text, record) => (
          <>
            <Text>
              {moment(record.createdAt).format("DD/MM/YYYY / h:mm:ss ")}
            </Text>
          </>
        ),
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <>
            <Link
              style={{ color: "#00a03c" }}
              to={`/admin/products/${record._id}`}
            >
              Edit
            </Link>
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => {
                deleteProductMutation.mutate(record._id, {
                  onSuccess: () => {
                    // console.log("success");
                  },
                });
              }}
              // onCancel={}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <Link style={{ marginLeft: "10px", color: "red" }}>Delete</Link>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, [deleteProductMutation]);

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <div>Error {error.message}</div>;

  return (
    <div>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"2xl"} p={5}>
          Products
        </Text>

        <Link to="new">
          <Button colorScheme="whatsapp">New</Button>
        </Link>
      </Flex>

      <Table dataSource={data} columns={columns} rowKey={"_id"}></Table>
    </div>
  );
}

export default Products;
