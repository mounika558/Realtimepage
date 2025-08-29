import React, { useEffect, useState, useRef } from "react";
import axios from "axios"
const MomentsCarousel = () => {
    const happymoments="https://s3.ap-south-1.amazonaws.com/data.spotknack.com/json_contents/happymoments.json";
    const honormoments="https://s3.ap-south-1.amazonaws.com/data.spotknack.com/json_contents/honormoments.json";

     const[happyImages,setHappyImages]= useState([]);
     const[honorImages,setHonorImages]= useState([]);
     const happyRef = useRef(null);
     const honorRef = useRef(null);

      useEffect(()=>{
        const fetchHappymoments= async ()=>{
        try{
          const response=await axios.get(happymoments)
          setHappyImages(response.data);
        }
        catch(err){
            console.log("Failed to fetch",err)
        }
        }
        fetchHappymoments();
      },[])

    useEffect(()=>{
        const fetchHonormoments= async ()=>{
        try{
          const response=await axios.get(honormoments)
          setHonorImages(response.data);
        }
        catch(err){
            console.log("Failed to fetch")
        }
        }
        fetchHonormoments();
      },[])

      useEffect(() => {
        const el = happyRef.current;
        let animationFrame;
        let step = () => {
        if (el) {
          el.scrollLeft += 1;
          }
        animationFrame = requestAnimationFrame(step);
        };
        animationFrame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrame);
        }, [happyImages]);

      useEffect(() => {
        const el = honorRef.current;
        let animationFrame;
        const startScroll = () => {
          if (el) 
          el.scrollLeft = el.scrollWidth; 
          const step = () => {
          if (el) {
              el.scrollLeft -= 1;
          }
          animationFrame = requestAnimationFrame(step);
          };
          animationFrame = requestAnimationFrame(step);
        };
        startScroll();
        return () => cancelAnimationFrame(animationFrame);
      }, [honorImages]);


      
      const getColor=()=>{
        const bgcolor = [
    "bg-[#ffcc45]",
    "bg-[#7896ff]",
    "bg-[#f7641f]",
    "bg-[#000000]",
  ];
  return bgcolor[Math.floor(Math.random()*bgcolor.length)];
}

return (
    <div className="p-4 my-32 space-y-8">
      {/* Happy Moments Carousel */}
      <div>
        <h2 className="text-md font-semibold mb-6  mx-4 font-inter md:text-xl lg:text-2xl  xl:mb-8">Happy memory Moments</h2>
        <div
          ref={happyRef}
          className="flex flex-row space-x-4 overflow-x-hidden pb-2   transform rotate-[-1.82deg]" >
          {happyImages.map((item, idx) => (
            <div
              key={idx}
              className={`min-w-[200px] h-[140px] md:min-w-[300px] md:h-[200px] flex-shrink-0  overflow-hidden pb-8 p-2 ${getColor()} ` }>
              <img
                src={item.pic_url}
                alt={`Happy ${idx + 1}`}
                className="w-full h-full object-cover"/>
            </div>
          ))}
        </div>
        
      </div>
      {/* Honor Moments Carousel */}
      <div className="flex flex-col">
        <h2 className="text-md font-semibold mb-3 mx-4 font-inter ml-auto md:text-xl lg:text-2xl">Honoring memory Moments</h2>
        <div
          ref={honorRef}
          className="flex flex-row space-x-4 overflow-x-hidden  mt-8   transform rotate-[-358.18deg]" >
          {honorImages.map((item, idx) => (
            <div
              key={idx}
              className={`min-w-[200px] h-[140px] md:min-w-[300px] md:h-[200px] flex-shrink-0  overflow-hidden  pb-8 p-2 ${getColor()}`} >
              <img
                src={item.pic_url}
                alt={`Honor ${idx + 1}`}
                className="w-full h-full object-cover" />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default MomentsCarousel;