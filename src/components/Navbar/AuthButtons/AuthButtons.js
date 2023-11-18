import { Box, Button } from "@chakra-ui/react";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import { ProfileMenu } from "./ProfileMenu/ProfileMenu";
import { useBasket } from "../../../context/BasketContext";
import BasketPopover from "./BasketPopover/BasketPopover";
import AdminMenu from "./ProfileMenu/AdminMenu/AdminMenu";

export const AuthButtons = () => {
  const { loggedIn, user, loading } = useAuth();
  const { basket } = useBasket();

  if (!loggedIn && !loading) {
    return (
      <Box>
        <Link to="/signin">
          <Button colorScheme="linkedin">Login</Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="gray">Register</Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box>
      {basket.length > 0 && <BasketPopover basket={basket} />}
      {user?.role === "user" && <ProfileMenu />}
      {user?.role === "admin" && <AdminMenu />}
    </Box>
  );
};
