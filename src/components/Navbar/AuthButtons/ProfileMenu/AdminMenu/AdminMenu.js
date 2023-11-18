import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../../context/AuthContext";
import { ChevronDownIcon } from "@chakra-ui/icons";

function AdminMenu() {
  const { logout } = useAuth();
  return (
    <Menu>
      <MenuButton as={Button} colorScheme="pink" variant="ghost">
        Admin <ChevronDownIcon />
      </MenuButton>
      <MenuList boxShadow="base">
        <MenuGroup title="Admin">
          <Link to="admin/orders">
            <MenuItem>Orders</MenuItem>
          </Link>
          <Link to="admin/products">
            <MenuItem>Products</MenuItem>
          </Link>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem onClick={logout} color="red.600" fontWeight="bold">
            Logout
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default AdminMenu;
