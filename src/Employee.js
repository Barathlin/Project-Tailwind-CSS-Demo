import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { data } from "./Data";

const Emp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Calldata();
  }, []);

  const showHom = () => {
    navigate("/");
  };
  const Calldata = () => {
    console.log("data", data);
  };

  return (
    <>
      <div class="mt-4">
        <button
          onClick={showHom}
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Back
          </span>
        </button>
      </div>
      <div className="container flex justify-center items-center p-4 w-full">
        <div className="flex flex-wrap items-center w-2/8 gap-6 justify-around">
          {data.map((item, index) => (
            <Card key={index} employee={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Emp;
