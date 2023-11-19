import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function BasketItems({ product, removeFromBasket }) {
  return (
    <Box p="4" boxShadow="md" borderRadius="md" borderWidth="1px">
      <HStack spacing={{ base: "2", md: "4" }} alignItems="flex-start">
        <Image
          htmlWidth={{ base: "80px", md: "140px" }}
          src={product.photos[0]}
          alt={product.title}
        />
        <VStack align="start" flex="10">
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="semibold"
            color="brand.500"
          >
            {product.title}
          </Text>
          <Text color="gray.600">$ {product.price}</Text>
          <Text noOfLines="5" mt={{ base: "2", md: "0" }}>
            {product.description}
          </Text>
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
  );
}

export default BasketItems;
