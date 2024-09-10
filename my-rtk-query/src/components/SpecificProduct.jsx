import React from "react";
import { useGetProductByIdQuery } from "../app/service/dummyData";

const SpecificProduct = () => {
  const { data, error, isLoading } = useGetProductByIdQuery(100);
  console.log(data);
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1 className="text-2xl font-semibold">{data.brand}</h1>
          <p>{data.category}</p>
          <p>{data.description}</p>
        </>
      ) : null}
    </div>
  );
};

export default SpecificProduct;
