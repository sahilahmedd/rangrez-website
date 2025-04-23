import React from "react";

interface Type {
  label: string;
  onClick?: () => void;
  customStyle: string;
}

const Button = ({ label, onClick, customStyle }: Type) => {
  return (
      <button
        className={`whitespace-nowrap text-black font-semibold cursor-pointer border-1 border-dashed bg-amber-100 px-4 py-2 duration-300 ease-in-out hover:bg-[#F9C80E] rounded-lg ${customStyle}`}
        onClick={onClick}
      >
        {label}
      </button>
  );
};

export default Button;
