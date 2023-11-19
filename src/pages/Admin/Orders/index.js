import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Text,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { fetchOrders } from "../../../api";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

function Orders() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["orders", ["admin"]],
    queryFn: fetchOrders,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) return <span>Error {error.message}</span>;

  return (
    <div>
      <Text fontSize="2xl" p="5">
        Orders
      </Text>

      <Table variant="simple">
        <TableCaption>Orders made by users</TableCaption>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Address</Th>
            <Th isNumeric>Items</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((order) => (
            <Tr key={order._id}>
              <Td>{order.user.email}</Td>
              <Td>{order.address}</Td>
              <Td isNumeric>{order.items.length}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default Orders;
