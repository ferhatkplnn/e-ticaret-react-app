import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const ProfileMenu = () => (
  <Menu>
    <MenuButton as={Button} colorScheme="linkedin">
      Profile <ChevronDownIcon />
    </MenuButton>
    <MenuList boxShadow="base">
      <MenuGroup title="Profile">
        <Link to="/profile">
          <MenuItem>My Account</MenuItem>
        </Link>
        <Link to="">
          <MenuItem>My Basket</MenuItem>
        </Link>
        <Link to="">
          <MenuItem>My Orders</MenuItem>
        </Link>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup>
        <MenuItem onClick={() => {}} color="red.600" fontWeight="bold">
          Logout
        </MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
);
