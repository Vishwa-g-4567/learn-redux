import React from "react";
import { useDeleteProductMutation } from "../app/service/dummyData";

const DeleteProduct = () => {
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();
  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(1);
    } catch (error) {
      console.error("Error Deleting Product : ", error);
    }
  };
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>{data.title ? `${data.title} successfully deleted` : ""}</>
      ) : null}
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete Product
      </button>
    </div>
  );
};

export default DeleteProduct;
