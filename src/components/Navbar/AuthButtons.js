import { Box, Button } from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { ProfileMenu } from "./ProfileMenu";

export const AuthButtons = () => {
  const { loggedIn, user } = useAuth();

  if (!loggedIn) {
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

  return <>{user?.role === "user" && <ProfileMenu />}</>;
};
