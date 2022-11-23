import React from 'react'

const NewsDetails = () => {
  return (
    <div
      
      className="flex flex-col top-[67px] w-full sm:w-[22rem] h-screen fixed bg-gray-200/[75%] z-50 px-6 pb-[67px] backdrop-blur-lg right-0 overflow-scroll"
    >
      <p className="text-[20px] my-4 ml-1 font-semibold">Adauga stire</p>
      <div className="w-full mb-4">
        <p className="font-medium mb-2">Titlu:</p>
        <input
          type="text"
          placeholder="titlu"
          className="w-full rounded-md border border-gray-300 py-2 px-5 text-base font-medium outline-none focus:border-[#2081e2] focus:shadow-md"
          
        />
      </div>
      <div className="w-full mb-4">
        <p className="font-medium mb-2">Introdus la data:</p>
        <input
          type="date"
          
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
          
        />
      </div>

      <div className="w-full mb-4">
        <p className="font-medium mb-2">Expira la data:</p>
        <input
          type="date"
          
          className="w-full rounded-md border border-gray-300 py-2 px-5 text-base font-medium outline-none focus:border-[#2081e2] focus:shadow-md"
        />
      </div>
      <div className="flex justify-end">
        <button className="w-[7rem] rounded-[0.7rem] bg-[#2081e2] hover:bg-[#3C92E9] font-medium text-white py-2 mt-2 mb-4">
          Salvare
        </button>
      </div>
    </div>
  )
}

export default NewsDetails