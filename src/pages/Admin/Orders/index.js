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
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Address</Th>
            <Th isNumeric>Items</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item._id}>
              <Td>{item.user.email}</Td>
              <Td>{item.address}</Td>
              <Td isNumeric>{item.items.length}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default Orders;
