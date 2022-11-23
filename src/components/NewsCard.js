import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import { AiOutlineMinusSquare } from "react-icons/ai";

const NewsCard = (props) => {
  const [openNewsDetails, setOpenNewsDetails] = useState(false);
  const ref = useRef(null);

  const handleNewsDetails = () => {
    setOpenNewsDetails((prevValue) => !prevValue);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenNewsDetails(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleRemove = () => {
    axios({
      url: "http://127.0.0.1:5000/remove",
      method: "GET",
      params: {
        uid: props.uid,
      },
    }).then((res) => {
      console.log(res);
      props.setFetchNews((prevCount) => prevCount + 1);
    });
  };

  return (
    <div className="w-full sm:w-[50%] lg:w-[33.3%] xl:w-[25%] h-[16rem] px-4 my-4">
      <div className="border h-full">
        <div className="flex justify-between my-2 mx-4">
          <p className="text-[22px] font-medium">{props.title}</p>
          <button className="flex items-center" onClick={handleRemove}>
            <AiOutlineMinusSquare className="text-[30px]" />
          </button>
        </div>
        <p
          className="mx-4 mb-2 line-clamp-8 hover:cursor-pointer"
          onClick={() => handleNewsDetails(props.uid)}
        >
          {props.text}
        </p>
      </div>

      <CSSTransition
        in={openNewsDetails}
        appear={true}
        timeout={200}
        classNames="news-details"
        exit={true}
        unmountOnExit
      >
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50">
            <div
              ref={ref}
              className="relative w-auto my-6 mx-auto max-w-3xl max-h-[80%] overflow-scroll overflow-x-hidden"
            >
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                <div className="p-5 border-b">
                  <h3 className="text-3xl font-semibold">{props.title}</h3>
                  <p className="mt-2 font-light text-gray-400">{props.startDate}</p>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {props.text}
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t">
                  <button
                    className="text-red-500 font-bold px-6 py-2 text-sm mr-1 mb-1"
                    type="button"
                    onClick={() => setOpenNewsDetails(false)}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      </CSSTransition>
    </div>
  );
};

export default NewsCard;
