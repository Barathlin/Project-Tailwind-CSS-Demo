import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const showEmp = () => {
    navigate("/emp");
  };

  return (
    <header className="App-header">
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
        <p>This is a React component styled with Tailwind.</p>
        <p>Click the below button!!</p>
        {/* <button >My Employees</button> */}
           <button onClick={showEmp} type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">My Employees</button>
      </div>
    </header>
  );
};
export default Home;
