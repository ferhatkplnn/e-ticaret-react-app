import React from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";

function ProductDetail() {
  const { product_id } = useParams();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["product", { product_id }],
    queryFn: () => fetchProduct(product_id),
  });

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const images =
    data.photos?.map((url) => ({
      original: url,
      thumbnail: url,
      lazyLoad: true,
    })) || [];

  return (
    <Flex>
      <Box flex={1}>
        <ImageGallery items={images} />
      </Box>

      <Box flex="1" pl="20">
        <Heading as="h1" fontSize="2xl">
          {data.title}
        </Heading>

        <Text fontWeight={"bold"} fontSize="32">
          {data.price}{" "}
          <Text as="span" fontWeight="normal" fontSize="18px">
            TL
          </Text>
        </Text>

        <Text>{data.description}</Text>

        <Text fontSize="small" fontStyle="italic" color="blackAlpha.600">
          {data.createAt}
        </Text>
      </Box>
    </Flex>
  );
}

export default ProductDetail;
