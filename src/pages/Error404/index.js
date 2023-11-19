import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <Box
      height="50vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Alert
        status="error"
        variant=""
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width="100%"
        maxWidth="md"
      >
        <AlertIcon boxSize="60px" />
        <AlertTitle mt={4} mb={2} fontSize="2xl">
          Oops! Page Not Found
        </AlertTitle>
        <AlertDescription>
          Sorry, the page you are looking for cannot be found. Please check the
          URL or navigate back to the{" "}
          <Button color="red" variant="link" as={Link} to="/">
            homepage
          </Button>{" "}
          to search for something else.
        </AlertDescription>
      </Alert>
    </Box>
  );
}

export default Error404;
