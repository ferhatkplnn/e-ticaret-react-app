import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";

function Signup() {
  return (
    <Flex textAlign="center" width="full" justifyContent="center">
      <Box>
        <Box textAlign="center">
          <Heading>Sign Up</Heading>
        </Box>
        <Box my="5" textAlign="left">
          <form>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input placeholder="Email" name="email" type="email" />
            </FormControl>

            <FormControl mt="4">
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password" name="password" type="password" />
            </FormControl>

            <FormControl mt="4">
              <FormLabel>Password Confirm</FormLabel>
              <Input
                placeholder="Password Confirm"
                name="passwordConfirm"
                type="password"
              />
            </FormControl>

            <Button w="full" colorScheme="messenger" mt="4" type="submit">
              Sing up
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default Signup;
