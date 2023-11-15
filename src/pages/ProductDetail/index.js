import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { product_id } = useParams();
  return <div>ProductDetail {product_id}</div>;
}

export default ProductDetail;
