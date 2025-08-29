import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { RiDoubleQuotesL } from "react-icons/ri";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const ValueForMoney = () => {
  const valueforkidsurl =
    "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/json_contents/valueformoney.json";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(valueforkidsurl);
        setData(response.data);
      } catch (err) {
        console.log("Failed to fetch data", err);
      }
    };
    fetchdata();
  }, []);

  const scrollref1 = useRef(null);
  const scrollref2 = useRef(null);
const [display1,setdisplay1]=useState('hidden');
const [display2,setdisplay2]=useState('hidden');
function scroll(direction){
  if(direction==='left'&&scrollref1.current!==null){
    scrollref1.current.scrollBy({
      left:300,
      behavior:'smooth'
    });
  }
  else if(direction==='right'&&scrollref1.current!==null){
    scrollref1.current.scrollBy({
      left:-300,
      behavior:'smooth'
    })
  }
}
function secondscroll(direction){
if(direction==='left'&&scrollref2.current!==null){
    scrollref2.current.scrollBy({
      left:300,
      behavior:'smooth'
    });
  }
  else if(direction==='right'&&scrollref2.current!==null){
    scrollref2.current.scrollBy({
      left:-300,
      behavior:'smooth'
    })
  }
}
  return (
    <>
      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center text-center space-y-4 px-4">
        <p className="font-bold text-3xl md:text-5xl font-inter">
        Value For Money : Words Of Praise From Our Kids
        </p>
        <p className="text-base md:text-xl text-gray-500 font-inter">
        We broke barrier by offering Split and Pay Option : Made It Accessible
        </p>
    </div>

      {/* First Scroll Section */}
    <div className="relative "onMouseEnter={()=>setdisplay1('flex')}
            onMouseLeave={()=>setdisplay1('hidden')}>
        <div className={`absolute top-1/2 text-lg  md:text-xl w-full ${display1}`}>
        <button className="bg-white rounded-full p-4" onClick={()=>scroll('left')}><GoChevronLeft/></button>
        <button className="flex ml-auto bg-white rounded-full p-4" onClick={()=>scroll('right')}><GoChevronRight/></button>
        </div> 
    <div
        className="flex rounded-xl gap-4 md:gap-8 p-4 overflow-x-auto w-full mt-8 scrollbar-hidden"
        ref={scrollref1}>


        {data.slice(0, 21).map((items, idx) => {
          return (
            <div
              key={idx}
              className="font-inter bg-slate-100 rounded-3xl p-6  w-[90%] sm:w-[28rem] md:w-[30rem] lg:w-[38rem] max-h-[50rem] h-auto md:h-96 flex-shrink-0">
              <p className="text-blue-400 text-4xl md:text-6xl leading-none ">
                <RiDoubleQuotesL />
              </p>
              <p className="text-sm md:text-sm mt-2">{items.content}</p>
              <div className="flex gap-x-4 mt-6 md:mt-8 items-center">
                <img
                  src={items.pic_url}
                  alt="profile"
                  className="bg-gray-600 rounded-full w-12 h-12 md:w-20 md:h-20 object-cover"/>
                <div>
                  <p className="font-bold text-sm md:text-base font-inter">
                    {items.Name}
                  </p>
                  <p className="text-xs  font-semibold md:text-sm text-gray-700 font-inter">
                    Front End Developer
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>

      {/* Second Scroll Section */}
      <div className="relative" onMouseEnter={()=>setdisplay2('flex')}
            onMouseLeave={()=>setdisplay2('hidden')}>
        <div className={`absolute top-1/2 text-lg  md:text-xl  w-full ${display2}`}>
          <button className="bg-white rounded-full p-4 " onClick={()=>secondscroll('left')}><GoChevronLeft/></button>
          <button className="flex ml-auto bg-white rounded-full p-4" onClick={()=>secondscroll('right')}><GoChevronRight/></button>
          </div> 
      <div
        className="flex rounded-xl gap-4 md:gap-8 p-4 overflow-x-auto w-full mt-12 scrollbar-hidden"
        ref={scrollref2}>
        {data.slice(21, data.length).map((items, idx) => {
          return (
            <div
              key={idx}
              className="font-inter bg-slate-100 rounded-3xl p-6  w-[90%] sm:w-[28rem] md:w-[30rem] lg:w-[38rem] max-h-[50rem] h-auto md:h-96 flex-shrink-0">
              <p className="text-blue-400 text-4xl md:text-6xl leading-none">
                <RiDoubleQuotesL />
              </p>
              <p className="text-sm md:text-sm  mt-2">{items.content}</p>
              <div className="flex gap-x-4 mt-6 md:mt-8 items-center">
                <img
                  src={items.pic_url}
                  alt="profile"
                  className="bg-gray-600 rounded-full w-12 h-12 md:w-20 md:h-20 object-cover"
                />
                <div>
                  <p className="font-bold text-sm md:text-base">
                    {items.Name}
                  </p>
                  <p className="text-xs font-semibold md:text-sm text-gray-700">
                    Front End Developer
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default ValueForMoney;
