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
        <button onClick={showEmp}>My Employees</button>
      </div>
    </header>
  );
};
export default Home;
