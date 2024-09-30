import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faWallet, faShare } from '@fortawesome/free-solid-svg-icons';
import DifferentSocialmedia from "./DifferentSocialmedia";
import rimg from "../image/Rimg.jpg"

export default function () {
  return (
    <div>
      <div className="bg-yellow-400 max-w-2xl mx-auto">
        <div>
          <span className="text-xl  px-3 py-1  flex items-center  ">
            <img
              src="https://cdn-icons-png.freepik.com/512/2413/2413313.png"
              alt="Icon"
              className="w-11 h-11 mr-7"
            />
            Taskplanet. Get 10 Points on every referrals
          </span>
          <div className="border border-red-500">
          <img className="w-11 h-11 mr-7" src={rimg} alt="" />

          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto mt-5 flex gap-6 px-4 ">
      <div className="border w-[30%] flex flex-col py-5 rounded-xl">
      <div className="flex justify-around items-center">
        
        <span className="text-xl md:text-3xl ">
          <FontAwesomeIcon icon={faWallet} className="text-green-500" />
        </span>
        <span>Earnings</span>
      </div>
      <span className="pl-7 pt-4 text-xl">Rs 50</span>
    </div>
        <div className="border w-[30%] flex flex-col py-5 rounded-xl">
      <div className="flex justify-around items-center">
        
        <span className="text-xl md:text-3xl text-green-500">
          <FontAwesomeIcon icon={faSackDollar} className="text-yellow-500" />
        </span>
        <span>Earnings</span>
      </div>
      <span className="pl-7 pt-4 text-xl">Rs 50</span>
    </div>
    <div className="border w-[30%] flex flex-col py-5 rounded-xl">
      <div className="flex justify-around items-center">
        
        <span className="text-xl md:text-3xl ">
          <FontAwesomeIcon icon={faShare} className="text-blue-500" />
        </span>
        <span>Referrals</span>
      </div>
      <span className="pl-8 pt-4 text-xl">0</span>
    </div>
    
      </div>
      <div className="max-w-2xl mx-auto">
        <DifferentSocialmedia/>
      </div>
      
    </div>
  );
}
