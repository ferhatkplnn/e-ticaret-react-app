import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchProduct, updateProduct } from "../../../api";
import { message } from "antd";
import validationSchema from "./validations";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import FormikForm from "../../../components/FormControls/FormikForm";

function EditProduct() {
  const { product_id } = useParams();
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["product", { product_id }],
    queryFn: () => fetchProduct(product_id),
  });

  const mutation = useMutation({
    mutationFn: (values) => updateProduct(values, product_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [], refetchType: "all" });

      message.success({
        content: "The product successfully updated.",
        key: "product_update",
        duration: 2,
      });
    },
    onError: (error) => {
      message.error("The product did not update. Error: " + error.message);
    },
  });

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <div>Error {error.message}</div>;

  const handleSubmit = async (values, bag) => {
    message.loading({ content: "Loading...", key: "product_update" });

    try {
      await mutation.mutateAsync(values);
    } catch (e) {
      message.error("The product does not updated");
    }
  };
  return (
    <div>
      <FormikForm
        initialValues={{
          title: data.title,
          description: data.description,
          price: data.price,
          photos: data.photos,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditProduct;
