import React, { useReducer } from "react";

import Success from "./Success";
const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function UpdateUserForm() {
  const [form, setForm] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(form).length == 0) return console.log("Enter Data");
  };

  if (Object.keys(form).length > 0)
    return <Success message="data added succesfully" />;

  return (
    <form className=" mt-2 grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <div>
        <input
          onChange={setForm}
          type=" text"
          name="firstname"
          className=" border w-full px-4 py-2 focus:outline-none rounded-md mt "
        />
      </div>
      <div>
        <input
          onChange={setForm}
          type=" text"
          name="lastname"
          className=" border w-full px-4 py-2 focus:outline-none rounded-md mt "
        />
      </div>
      <div>
        <input
          onChange={setForm}
          type=" text"
          name="email"
          className=" border w-full px-4 py-2 focus:outline-none rounded-md mt "
        />
      </div>
      <div>
        <input
          onChange={setForm}
          type=" text"
          name="salary"
          className=" border w-full px-4 py-2 focus:outline-none rounded-md mt "
        />
      </div>
      <div className="input-type">
        <input
          onChange={setForm}
          type="date"
          name="date"
          className="border px-5 py-3 focus:outline-none rounded-md"
          placeholder="Salary"
        />
      </div>
      <div className=" flex flex-row items-center gap-6">
        <div className="flex items-center ">
          <input
            onChange={setForm}
            type="radio"
            value="active"
            name="status"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Active
          </label>
        </div>
        <div className="flex items-center">
          <input
            onChange={setForm}
            checked
            type="radio"
            value="inactive"
            name="status"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-2"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Inactive
          </label>
        </div>
      </div>
      <button className=" bg-green-400 w-32 text-white py-1 px-2  rounded-xl">
        update
      </button>
    </form>
  );
}
export default UpdateUserForm;
