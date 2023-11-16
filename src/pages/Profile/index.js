import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Box, Text, Avatar, Badge, Spinner } from "@chakra-ui/react";

function Profile() {
  const { user } = useAuth();

  if (!user) {
    return <Text>Bilgiler yüklenirken bir hata oluştu.</Text>;
  }

  const { role, email } = user;

  return (
    <Box textAlign="center" p={8} borderRadius="lg" boxShadow="md">
      <Avatar
        bg="red.500"
        loading="lazy"
        size="2xl"
        name="Tony Montana"
        src="https://i.pravatar.cc/300"
        mb={4}
      />
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {"Tony"} {"Montana"}
      </Text>
      <Text mb={2}>{email}</Text>
      <Badge colorScheme="teal">{role}</Badge>
      <Box
        mt={8}
        p={4}
        borderWidth="1px"
        borderRadius="md"
        borderColor="gray.300"
      >
        <Text fontSize="lg" mb={4} fontWeight="bold">
          Profil Bilgileri
        </Text>
        <Text>
          <strong>First Name:</strong> {"Tony"}
        </Text>
        <Text>
          <strong>Last Name:</strong> {"Montana"}
        </Text>
        <Text>
          <strong>Email:</strong> {email}
        </Text>
        <Text>
          <strong>Rol:</strong> {role}
        </Text>
      </Box>
    </Box>
  );
}

export default Profile;
