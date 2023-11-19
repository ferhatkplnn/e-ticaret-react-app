import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postProduct } from "../../../api";
import { message } from "antd";
import validationSchema from "./validations";
import FormikForm from "../../../components/FormControls/FormikForm";

function NewProduct() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      postProduct({ ...values, photos: JSON.stringify(values.photos) }),
    onSettled: (data, error) => {
      if (error) {
        message.error("The product did not update. Error: " + error.message);
      } else {
        queryClient.invalidateQueries({ queryKey: [], refetchType: "all" });
        message.success({
          content: "The product successfully added.",
          key: "product_update",
          duration: 2,
        });
      }
    },
  });

  const handleSubmit = async (values, bag) => {
    message.loading({ content: "Loading...", key: "product_update" });

    try {
      await mutation.mutateAsync(values);
    } catch (e) {
      message.error("The product did not update");
    }
  };

  return (
    <div>
      <FormikForm
        initialValues={{
          title: "",
          description: "",
          price: "",
          photos: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default NewProduct;
