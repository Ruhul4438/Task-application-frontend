
import React, { useState } from "react";
import Popup1 from "../Popup1";

export default function Card2() {
  const [showMode, setShowMode] = useState(false);

  const closeModel = () => setShowMode(false); // Closes the popup

  return (
    <>
 <div
      onClick={() => setShowMode(true)} // Opens the popup on click
      className="max-w-[90%] md:max-w-xl py-5 mx-auto mt-8 rounded-2xl shadow-xl border transition-colors duration-300 ease-in-out hover:bg-red-300  hover:text-white cursor-pointer"
    >
       {/* Popup appears when showMode is true */}
       <div className="flex items-center md:pl-20">
        <img
          src="https://www.itvoice.in/wp-content/uploads/2022/06/Telegram-logo.png"
          alt="Icon"
          className="w-7 h-7 ml-3 mr-2 mt-3 md:w-12 md:h-10 md:mr-4 md:mt-4 "
        />
        <span className="mt-3 text-base md:text-2xl">
        Share with 5 friends
        </span>
      </div>
      <div className=" flex justify-center">
        <span className="bg-blue-500 px-3 py-1 rounded-md ">10 Points</span>
      </div>
    </div>
{showMode && <Popup1  closeModel={closeModel} />}
    </>
   
  );
}

