import React from "react";

const LernToCode = () => {
    return (
        <div className=" bg-[rgb(30,34,45)] h-[80vh] flex items-center justify-center">
            <div className=" flex flex-col p-[100px] gap-5">
                <h1 className=" text-[70px] font-bold font-sans text-white">Learn To Code</h1>
                <p className=" text-[#FFF4A3] text-[23px] font-sans font-bold">With the world's largest web developer site.</p>
                <div className=" bg-white  rounded-full   flex ">
                  <input className=" py-3 px-3 flex-1 placeholder:font-bold" type="text" placeholder=" Search our tutorials, eg.HTML" name="" id="" />
                  <button className=" py-3 px-3 w-[100px] rounded-r-full bg-green-600 h-full">
                    🔍
                  </button>
                </div>
            </div>
        </div>
    );
};

export default LernToCode;
