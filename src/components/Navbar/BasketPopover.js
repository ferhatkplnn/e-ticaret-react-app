import {
  Button,
  ListItem,
  OrderedList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useBasket } from "../../context/BasketContext";
import { DeleteIcon } from "@chakra-ui/icons";

const BasketPopover = ({ basket }) => {
  const { removeFromBasket } = useBasket();
  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme="pink" variant="outline" mr="5">
          Basket ({basket.length})
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Text fontWeight="bold" fontSize="md" textAlign="center">
            Basket List
          </Text>
        </PopoverHeader>
        <PopoverBody>
          <OrderedList listStyleType="none">
            {basket.map((item, index) => (
              <ListItem
                key={item._id}
                display="flex"
                justifyContent="space-between"
              >
                <Button variant="link">
                  <Link to={`product/${item._id}`}>
                    {index + 1} - {item.title} - ${item.price}
                  </Link>
                </Button>
                <Button
                  color="red"
                  variant="link"
                  onClick={() => removeFromBasket(item)}
                >
                  <DeleteIcon color="red" boxSize="16px" />
                </Button>
              </ListItem>
            ))}
          </OrderedList>
        </PopoverBody>
        <PopoverFooter>
          <Button display="flex" as="u" variant="link" colorScheme="red">
            <Link to="basket">Go Basket</Link>
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default BasketPopover;
