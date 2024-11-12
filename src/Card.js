// EmployeeCard.js
import React from "react";

const Card = ({ employee }) => {
  return (
    <div className="border border-gray-300 max-w-xs bg-white rounded-lg  overflow-hidden hover:shadow-2xl w-full">
      <div className="bg-blue-500 text-white text-center font-semibold py-2">
        {employee.Role}
      </div>
      <div className="p-4 flex flex-col items-center">
        <img
          src={employee.photo}
          alt={employee.Name}
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
        />
        <h2 className="mt-4 text-xl font-bold text-gray-800">
          {employee.Name}
        </h2>
        <p className="text-gray-500 mt-2">Employee ID: {employee.id}</p>
        <p className="text-gray-500">Role: {employee.Role}</p>
        <p className="text-gray-500">Type: {employee.Type}</p>
        <div className="flex items-center mt-2 text-gray-500">
          <p> &#128386;</p> &nbsp;
          <a href={`mailto:${employee.Email}`} className="text-gray-600">
            {employee.Email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
