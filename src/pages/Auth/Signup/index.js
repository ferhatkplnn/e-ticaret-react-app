import {
  Alert,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import validationSchema from "./validation";
import { fetchRegister } from "../../../api";
import { useNavigate } from "react-router-dom";

function Signup() {
  const toast = useToast();
  const navigate = useNavigate();

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      validationSchema,
      onSubmit: async (values, bag) => {
        try {
          await fetchRegister({
            email: values.email,
            password: values.passwordConfirm,
          });

          toast({
            title: `Registration successfully completed 🎉`,
            status: "success",
            isClosable: true,
          });

          navigate("/");
        } catch (error) {
          bag.setErrors({ general: error.response.data.message });
        }
      },
    });
  return (
    <Flex textAlign="center" width="full" justifyContent="center">
      <Box>
        <Box textAlign="center">
          <Heading>Sign Up</Heading>
        </Box>
        <Box my="5">
          {errors.general && <Alert status="error">{errors.general}</Alert>}
        </Box>

        <Box my="5" textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input
                placeholder="Email"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                isInvalid={touched.email && errors.email}
              />
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
            </FormControl>

            <FormControl mt="4">
              <FormLabel>Password Confirm</FormLabel>
              <Input
                placeholder="Password Confirm"
                name="passwordConfirm"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirm}
                isInvalid={touched.passwordConfirm && errors.passwordConfirm}
              />
            </FormControl>

            <Button w="full" colorScheme="messenger" mt="4" type="submit">
              Sign up
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default Signup;
