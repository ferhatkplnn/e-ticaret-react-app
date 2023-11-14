import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Box
      boxShadow="base"
      borderRadius="lg"
      overflow="hidden"
      p="3"
      _hover={{
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <Link>
        <Image
          w="full"
          src="https://picsum.photos/200/300/?blur=2"
          alt="image"
          loading="lazy"
        />
      </Link>
      <Box p="6">
        <Box
          d="flex"
          alignItems="baseline"
          fontSize="small"
          fontStyle="italic"
          color="blackAlpha.600"
        >
          11/11/2024
        </Box>
        <Box mt="1" fontWeight="semibold" lineHeight="2">
          Organik Domates
        </Box>
        <Box>500 TL</Box>
        <Box>Bu domates inanilmaz lezzetli.</Box>
      </Box>
      <Button colorScheme="pink">Add to basket</Button>
    </Box>
  );
}

export default Card;
