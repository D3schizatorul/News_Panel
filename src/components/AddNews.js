/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";
import axios from "axios";

const AddNews = ({ setOpenAddNews, openAddNews, setFetchNews }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // eslint-disable-next-line
  const [id, setId] = useState(`${uuidv1()}`);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenAddNews(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const submitNews = async () => {
    const formData = new FormData();
    formData.append("uid", id);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    try {
      const response = axios.post("https://d3schizatorul.pythonanywhere.com/publish", formData);
      console.log("Server response: ", response);
      setOpenAddNews(false);
      setFetchNews((prevCount) => prevCount + 1);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <>
      <div
        ref={ref}
        className="flex flex-col top-[67px] w-full sm:w-[22rem] h-screen fixed bg-gray-200/[75%] z-50 px-6 pb-[67px] backdrop-blur-lg right-0 overflow-scroll"
      >
        <p className="text-[20px] my-4 ml-1 font-semibold">Adauga stire</p>
        <div className="w-full mb-4">
          <p className="font-medium mb-2">Titlu:</p>
          <input
            type="text"
            placeholder="titlu"
            className="w-full rounded-md border border-gray-300 py-2 px-5 text-base font-medium outline-none focus:border-[#2081e2] focus:shadow-md"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full mb-4">
          <p className="font-medium mb-2">Introdus la data:</p>
          <input
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full rounded-md border border-gray-300 py-2 px-5 text-base font-medium outline-none focus:border-[#2081e2] focus:shadow-md"
          />
        </div>
        <div className="w-full mb-4">
          <p className="font-medium mb-2">Continut:</p>
          <textarea
            placeholder="continut"
            className="w-full rounded-md border border-gray-300 py-2 px-5 text-base font-medium outline-none focus:border-[#2081e2] focus:shadow-md"
            rows="4"
            cols="50"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="w-full mb-4">
          <p className="font-medium mb-2">Expira la data:</p>
          <input
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full rounded-md border border-gray-300 py-2 px-5 text-base font-medium outline-none focus:border-[#2081e2] focus:shadow-md"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="w-[7rem] rounded-[0.7rem] bg-[#2081e2] hover:bg-[#3C92E9] font-medium text-white py-2 mt-2 mb-4"
            onClick={submitNews}
          >
            Salvare
          </button>
        </div>
      </div>
      {openAddNews ? (
        <div className="opacity-40 fixed inset-0 z-40 bg-white"></div>
      ) : (
        ""
      )}
    </>
  );
};

export default AddNews;
