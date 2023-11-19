import React, { useRef, useState } from "react";
import { useBasket } from "../../context/BasketContext";
import {
  Box,
  Button,
  Text,
  VStack,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AddressInputModel from "../../components/AddressInputModel/AddressInputModel";
import { postOrder } from "../../api";
import { message } from "antd";
import BasketItems from "../../components/BasketItems/BasketItems";
import EmptyCardAlert from "../../components/EmptyCardAlert/EmptyCardAlert";

function Basket() {
  const [messageApi, contextHolder] = message.useMessage();
  const { basket, removeFromBasket, emptyBasket } = useBasket();
  const [address, setAddress] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  const handleSubmitForm = async () => {
    const itemIds = basket.map((item) => item._id);
    const input = {
      address,
      items: JSON.stringify(itemIds),
    };

    await postOrder(input);

    messageApi.open({
      type: "success",
      content: "Your order has been successfully completed!",
    });

    emptyBasket();
    onClose();
  };

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
        <EmptyCardAlert />
      ) : (
        basket.map((product) => (
          <BasketItems
            key={product._id}
            product={product}
            removeFromBasket={removeFromBasket}
          />
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
        <>
          <Button
            colorScheme="blue"
            variant="outline"
            size={{ base: "md", md: "lg" }}
            alignSelf="flex-end"
            as={Link}
            onClick={onOpen}
          >
            Place Order
          </Button>
          <AddressInputModel
            isOpen={isOpen}
            onClose={onClose}
            initialRef={initialRef}
            address={address}
            setAddress={setAddress}
            handleSubmitForm={handleSubmitForm}
          />
        </>
      )}
      {contextHolder}
    </VStack>
  );
}

export default Basket;
