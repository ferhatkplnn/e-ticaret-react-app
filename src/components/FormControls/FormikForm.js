import React from "react";
import { Formik } from "formik";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import { Button } from "@chakra-ui/react";
import FormFieldArray from "./FormFieldArray";

const FormikForm = ({ initialValues, validationSchema, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({
      handleSubmit,
      errors,
      touched,
      handleChange,
      handleBlur,
      values,
      isSubmitting,
    }) => (
      <form onSubmit={handleSubmit}>
        <FormInput
          name="title"
          label="Title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.title && errors.title}
          error={errors.title}
          isSubmitting={isSubmitting}
        />

        <FormTextarea
          name="description"
          label="Description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.description && errors.description}
          error={errors.description}
          isSubmitting={isSubmitting}
        />

        <FormInput
          name="price"
          label="Price"
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.price && errors.price}
          error={errors.price}
          isSubmitting={isSubmitting}
        />

        <FormFieldArray
          name="photos"
          label="Photos"
          values={values}
          isSubmitting={isSubmitting}
          handleChange={handleChange}
        />

        <Button mt="4" width="full" type="submit" isLoading={isSubmitting}>
          Update
        </Button>
      </form>
    )}
  </Formik>
);

export default FormikForm;
