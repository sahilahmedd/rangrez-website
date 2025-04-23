import React from "react";

interface Type {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: Type) => {
  return (
      <button
        className="whitespace-nowrap text-amber-500 font-semibold cursor-pointer bg-white px-4 py-2 duration-300 ease-in-out hover:bg-amber-500 hover:text-white rounded-lg"
        onClick={onClick}
      >
        {label}
      </button>
  );
};

export default Button;
