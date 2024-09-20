
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faSackDollar,
  faWallet,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

export default function Popup1({ closeModel }) {
  const [selectedTab, setSelectedTab] = useState("Description");

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const tabContent = {
    Description: (
      <div>
        <h2 className="text-base text-black font-bold mb-2">
          Title: Monthly Leaderboard Winner
        </h2>
        <h2 className="text-base text-black font-bold mb-2">Description: </h2>
        <span className="mb-4">
          <ul className="">
            <li className="flex items-center text-black mb-2">
              <span className="font-bold text-xl mr-2 before:content-['•'] before:text-black"></span>
              Like this Instagram post.
            </li>
            <li className="flex items-center text-black mb-2">
              <span className="font-bold text-xl mr-2 before:content-['•'] before:text-black"></span>
              Take a screenshot showing you've liked the post.
            </li>
            <li className="flex items-center text-black mb-2">
              <span className="font-bold text-xl mr-2 before:content-['•'] before:text-black"></span>
              Submit the screenshot in the app to claim your reward .
            </li>
          </ul>
        </span>
        <div className="flex gap-2 mt-4 mb-4">
          <span className="text-base text-black font-bold ">Task Link :</span>
          <a
            href="https://www.instagram.com/"
            className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm"
            target="_blank"
            rel=""
          >
            Start Task
          </a>
        </div>
        <div className="flex gap-2 mt-4 mb-4">
          <span className="text-base text-black font-bold ">Points :</span>
          <span className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
            100
          </span>
        </div>
        <div className="flex gap-2 mt-4 mb-4">
          <span className="text-base text-black font-bold ">Share :</span>
          <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm">
            Share
          </span>
        </div>
        <form>
          <div className="flex border py-4 rounded-xl px-3">
            <input
              accept="image/*"
              type="file"
              className="cursor-pointer w-[35%] mr-20 "
              required
            />
            <button className="text-black bg-orange-400 px-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    ),
    Earning: (
      <div>
        <span className="mb-4">
          <ul className="">
            <li className="flex items-center text-black mb-2">
              <span className="font-bold text-xl mr-2 before:content-['•'] before:text-black"></span>
              You will get 10 points on submission of proof of task in form of
              screenshot.
            </li>
            <li className="flex items-center text-black mb-2">
              <span className="font-bold text-xl mr-2 before:content-['•'] before:text-black"></span>
              You will earn your points on successfully verification of your
              task by the task creator.
            </li>
            <li className="flex items-center text-black mb-2">
              <span className="font-bold text-xl mr-2 before:content-['•'] before:text-black"></span>
              Task verification may take 24-48 hours.{" "}
            </li>
          </ul>
        </span>
        <form>
          <div className="flex border py-4 rounded-xl px-3">
            <input
              accept="image/*"
              type="file"
              className="cursor-pointer w-[35%] mr-20 "
              required
            />
            <button className="text-black bg-orange-400 px-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    ),
    Referral: (
      <div>
        <span className="mb-4">
          <ul className="">
            <li className="flex items-center text-black mb-2">
              <span className="font-bold text-xl mr-2 before:content-['•'] before:text-black"></span>
              Any fraud activity may result in blocking of your account.{" "}
            </li>
            <li className="flex items-center text-black mb-2">
              <span className="font-bold text-xl mr-2 before:content-['•'] before:text-black"></span>
              You must not unfollow/unlike/undo your action atleast for 30 days
              after submission as this may lead to account suspension.{" "}
            </li>
          </ul>
        </span>
        <form>
          <div className="flex border py-4 rounded-xl px-3">
            <input
              accept="image/*"
              type="file"
              className="cursor-pointer w-[35%] mr-20 "
              required
            />
            <button className="text-black bg-orange-400 px-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    ),
  };

  return (
    <>
      <div
        onClick={closeModel}
        className="fixed inset-x-0 inset-y-0 bg-black opacity-70"
      ></div>
      <div className="bg-white border fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[45%] md:w-[50%] md:h-[40%] lg:w-[40%] xl:w-[20%] mx-auto p-5 rounded-md">
        <div className="flex justify-around mb-4  border-b-2 relative -top-4 pb-3 pt-2">
          {/* Buttons for switching between tabs */}
          <span
            className={`px-3 py-2 ${
              selectedTab === "Description"
                ? "underline underline-offset-4 decoration-black "
                : ""
            } cursor-pointer`}
            onClick={() => setSelectedTab("Description")}
          >
            Details
          </span>
          <span
            className={`px-3 py-2 ${
              selectedTab === "Earning"
                ? "underline underline-offset-4 decoration-black"
                : ""
            }cursor-pointer `}
            onClick={() => setSelectedTab("Earning")}
          >
            Earning
          </span>
          <span
            className={`px-3 py-2 ${
              selectedTab === "Referral"
                ? "underline underline-offset-4 decoration-black"
                : ""
            } cursor-pointer `}
            onClick={() => setSelectedTab("Referral")}
          >
            Disclaimer
          </span>
        </div>

        {/* Scrolling Content Area */}
        <div className="overflow-y-auto h-[calc(100%-60px)] pr-4">
          <div className="text-white mb-5">{tabContent[selectedTab]}</div>
        </div>

        {/* Accept Button */}
        <span
          className="absolute text-xl md:text-3xl -top-10 -right-7   px-4 py-2 rounded-md  "
          onClick={closeModel}
        >
          <FontAwesomeIcon icon={faXmark} className="" />
        </span>
      </div>
    </>
  );
}
