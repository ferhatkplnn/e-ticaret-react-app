import React from "react";
import { useBasket } from "../../context/BasketContext";
import {
  Box,
  Button,
  Image,
  Text,
  VStack,
  HStack,
  IconButton,
  Spacer,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";

function Basket() {
  const { basket, removeFromBasket } = useBasket();

  const totalPrice = basket.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <VStack p="4" spacing="4" align="stretch" maxW="800px" mx="auto">
      <Heading as="h1" fontSize={{ base: "xl", md: "2xl" }} mb="4">
        Your Cart
      </Heading>
      {basket.length === 0 ? (
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
              {" "}
              <Text color="red" as="a">
                here
              </Text>{" "}
            </Link>
            .
          </AlertDescription>
        </Alert>
      ) : (
        basket.map((product) => (
          <Box
            key={product._id}
            p="4"
            boxShadow="md"
            borderRadius="md"
            borderWidth="1px"
          >
            <HStack spacing={{ base: "2", md: "4" }} alignItems="flex-start">
              <Image
                htmlWidth={{ base: "80px", md: "140px" }}
                src={product.photos[0]}
                alt={product.title}
              />
              <VStack align="start" flex="1">
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="semibold"
                  color="brand.500"
                >
                  {product.title}
                </Text>
                <Text color="gray.600">$ {product.price}</Text>
                <Text mt={{ base: "2", md: "0" }}>{product.description}</Text>
                <IconButton
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  variant="ghost"
                  onClick={() => removeFromBasket(product)}
                  mt={{ base: "2", md: "4" }}
                />
              </VStack>
              <Spacer />
              <Link to={`/product/${product._id}`}>
                <Button colorScheme="blue" variant="outline">
                  Details
                </Button>
              </Link>
            </HStack>
          </Box>
        ))
      )}
      {basket.length > 0 && (
        <Box p="4" boxShadow="md" borderRadius="md" borderWidth="1px" mt="4">
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
            Total: ${totalPrice.toFixed(2)}
          </Text>
        </Box>
      )}
      {basket.length > 0 && (
        <Button
          colorScheme="blue"
          variant="outline"
          size={{ base: "md", md: "lg" }}
          alignSelf="flex-end"
          as={Link}
          to="/"
        >
          Place Order
        </Button>
      )}
    </VStack>
  );
}

export default Basket;
