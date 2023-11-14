import { Link } from "react-router-dom";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p="2"
      boxShadow="base"
    >
      <Flex alignItems="center">
        <Box>
          <Text fontWeight="bold" fontSize="x-large" color="teal.500">
            <Link to="/">E-ticaret</Link>
          </Text>
        </Box>

        <Box ml="20">
          <Link>Products</Link>
        </Box>
      </Flex>

      <Box>
        <Link to="/signin">
          <Button colorScheme="linkedin">Login</Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="gray">Register</Button>
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
