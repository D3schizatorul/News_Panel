import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Navbar = (props) => {
  const handleAddNews = () => {
    props.setOpenAddNews((prevValue) => !prevValue);
  };

  return (
    <div className="fixed top-0 backdrop-blur-lg flex flex-auto justify-between items-center w-full px-6 lg:px-10 py-3 border-b z-50">
      <div>
        <p className="text-[26px] font-semibold select-none">News Panel</p>
      </div>
      <div className="">
        {props.openAddNews ? (
          <button className="flex items-center" onClick={handleAddNews}>
            <AiOutlineCloseSquare className="text-[42px]" />
          </button>
        ) : (
          <button className="flex items-center" onClick={handleAddNews}>
            <AiOutlinePlusSquare className="text-[42px]" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
