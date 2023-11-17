import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import validationSchema from "./validation";
import { fetchLogin } from "../../../api";
import { useAuth } from "../../../context/AuthContext";

function Signin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit: async (values, bag) => {
        try {
          const loginResponse = await fetchLogin({
            email: values.email,
            password: values.password,
          });
          login(loginResponse);
          navigate("/profile");
        } catch (e) {
          bag.setErrors({ general: e.response.data.message });
        }
      },
    });

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt="10" width={{ base: "100%", sm: "50%", md: "25%" }}>
          <Box textAlign="center">
            <Heading>Sign In</Heading>
          </Box>
          <Box my={5}>
            {errors.general && <Alert status="error">{errors.general}</Alert>}
          </Box>
          <Box my="5" textAlign="left">
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  placeholder="Email"
                  name="email"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  isInvalid={touched.email && errors.email}
                />
                {errors.email && touched.email && (
                  <Text color="red">{errors.email}</Text>
                )}
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  isInvalid={touched.password && errors.password}
                />
                {errors.password && touched.password && (
                  <Text color="red">{errors.password}</Text>
                )}
              </FormControl>

              <Button w="full" colorScheme="messenger" mt="4" type="submit">
                Sign in
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Signin;
