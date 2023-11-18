import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Text,
} from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";

function EmptyCardAlert() {
  return (
    <Alert
      status="warning"
      variant=""
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Your cart is empty!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Your cart is empty. Continue shopping{" "}
        <Link to="/">
          <Text color="red" as="span">
            here
          </Text>
        </Link>
        .
      </AlertDescription>
    </Alert>
  );
}

export default EmptyCardAlert;
