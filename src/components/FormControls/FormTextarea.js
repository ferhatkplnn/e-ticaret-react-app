import React from "react";
import { FormControl, FormLabel, Textarea, Text } from "@chakra-ui/react";

const FormTextarea = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  isInvalid,
  error,
  isSubmitting,
}) => (
  <FormControl mt="4">
    <FormLabel>{label}</FormLabel>
    <Textarea
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      disabled={isSubmitting}
      isInvalid={isInvalid}
    />
    {isInvalid && <Text color="red.500">{error}</Text>}
  </FormControl>
);

export default FormTextarea;
