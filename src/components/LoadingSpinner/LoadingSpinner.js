import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

function LoadingSpinner() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        size="xl"
        color="red"
      />
      <Text>Loading...</Text>
    </Flex>
  );
}

export default LoadingSpinner;
