import React from "react";
import { useGetAllProductQuery } from "../app/service/dummyData";

const AllProducts = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading</>
      ) : data ? (
        <>
          {data.products.map((p) => (
            <>
              <h1 key={p.id} className="text-2xl font-semibold">
                {p.brand}
              </h1>
              <p>{p.description}</p>
            </>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default AllProducts;
