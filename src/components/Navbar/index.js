import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { AuthButtons } from "./AuthButtons";
import { ColorToggle } from "./ColorToggle";

function Navbar() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p="2"
      boxShadow="base"
      minH="3.5em"
    >
      <Flex alignItems="center">
        <Box>
          <Text fontWeight="bold" fontSize="x-large" color="blue.400">
            <Link to="/">E-ticaret</Link>
          </Text>
        </Box>

        <Box ml="20">
          <Link>Products</Link>
        </Box>
      </Flex>
      <ColorToggle />
      <AuthButtons />
    </Flex>
  );
}

export default Navbar;
