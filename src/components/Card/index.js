import {
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Card as ChakraCard,
  AspectRatio,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Card({ product }) {
  console.log(product);
  return (
    <ChakraCard maxW="sm">
      <Link>
        <CardBody>
          <AspectRatio ratio={4 / 3}>
            <Image
              src={product.photos[0]}
              alt={product.title}
              objectFit="cover"
              borderRadius="lg"
            />
          </AspectRatio>
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.title}</Heading>
            <Tooltip label={product.description} hasArrow>
              <Text noOfLines={1} textDecoration="underline" cursor="pointer">
                {product.description}
              </Text>
            </Tooltip>
            <Text color="blue.600" fontSize="2xl">
              ${product.price}
            </Text>
          </Stack>
        </CardBody>
      </Link>

      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </ChakraCard>
  );
}

export default Card;
