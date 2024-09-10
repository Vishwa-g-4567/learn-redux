import React from "react";
import { useUpdateProductMutation } from "../app/service/dummyData";

const UpdateProduct = () => {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();
  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Title updated 💛",
      };
      await updateProduct({ id: 1, updatedProduct: updatedProductData });
    } catch (error) {
      console.error("Error updating product : ", error);
    }
  };
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1 className="text-2xl font-semibold">{data.title}</h1>
          <p>{data.brand}</p>
        </>
      ) : null}
      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
