import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomerAction } from "../app/features/customers/customerSlice";

const CustomersView = () => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const deleteHandler = (index) => {
    dispatch(deleteCustomerAction(index));
  };
  return (
    <div>
      <h3>Customer List</h3>
      <ul>
        {customers.map((customer, index) => (
          <>
            <li key={index}>{customer}</li>
            <button type="button" onClick={() => deleteHandler(index)}>
              Delete
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default CustomersView;
