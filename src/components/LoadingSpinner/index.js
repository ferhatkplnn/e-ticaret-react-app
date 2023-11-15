import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

function LoadingSpinner() {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        size="xl"
        color="red"
      />
    </Flex>
  );
}

export default LoadingSpinner;
