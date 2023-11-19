import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { FieldArray } from "formik";

const FormFieldArray = ({
  name,
  label,
  values,
  isSubmitting,
  handleChange,
}) => (
  <FormControl mt="4">
    <FormLabel>{label}</FormLabel>
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div>
          {values.photos &&
            values.photos.map((photo, index) => (
              <div key={index}>
                <Input
                  name={`photos.${index}`}
                  value={photo}
                  disabled={isSubmitting}
                  onChange={handleChange}
                  width={"80%"}
                />

                <Button
                  ml="4"
                  type="button"
                  colorScheme="red"
                  onClick={() => arrayHelpers.remove(index)}
                >
                  Remove
                </Button>
              </div>
            ))}
          <Button mt="5" onClick={() => arrayHelpers.push("")}>
            Add a photo
          </Button>
        </div>
      )}
    />
  </FormControl>
);

export default FormFieldArray;
