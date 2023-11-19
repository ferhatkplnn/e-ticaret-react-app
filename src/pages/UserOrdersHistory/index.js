import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "../../api";
import { useAuth } from "../../context/AuthContext";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function UserOrdersHistory() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["orders-history"],
    queryFn: fetchOrders,
  });

  const { user } = useAuth();

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <div>Error {error.message}</div>;

  const filteredOrder = data.filter((order) => order?.user?._id === user?._id);

  console.log(filteredOrder);

  return (
    <>
      <Card>
        <CardHeader>
          <Heading textAlign={"center"} size="md">
            Your Orders
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {filteredOrder?.map((order, index) => (
              <Box key={order._id}>
                <Heading size="xs" textTransform="uppercase">
                  Order - {index + 1}
                </Heading>
                {order?.items.map((c, i) => (
                  <Text pt="1" key={c._id}>
                    <Button
                      variant={"link"}
                      fontSize={"small"}
                      color={"red.500"}
                    >
                      <Link to={`/product/${c._id}`}>
                        {i + 1} - {c.title} - {c.price} TL
                      </Link>
                    </Button>
                  </Text>
                ))}
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default UserOrdersHistory;
