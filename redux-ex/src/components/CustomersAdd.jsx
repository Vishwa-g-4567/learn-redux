import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomerAction } from "../app/features/customers/customerSlice";

const CustomersAdd = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addCustomer = () => {
    if (input) {
      dispatch(addCustomerAction(input));
      setInput("");
    }
  };
  return (
    <div>
      <h2>Add New Customer</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={addCustomer}>
        Add
      </button>
    </div>
  );
};

export default CustomersAdd;
