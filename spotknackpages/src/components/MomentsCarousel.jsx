import React, { useEffect, useState, useRef } from "react";

const MomentsCarousel = () => {
  const [happyImages, setHappyImages] = useState([]);
  const [honorImages, setHonorImages] = useState([]);
  const happyRef = useRef(null);
  const honorRef = useRef(null);

  // Happy moments (array of objects)
  const happymoments = [
    { pic_url: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/moments/1.webp" },
    { pic_url: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/moments/2.webp" },
    { pic_url: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/moments/3.webp" },
    { pic_url: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/moments/4.webp" },
    { pic_url: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/moments/5.webp" },
    { pic_url: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/moments/6.webp" },
    { pic_url: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/moments/7.webp" },
    { pic_url: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/moments/8.webp" },
    { pic_url: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/moments/9.webp" },
    { pic_url: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/moments/10.webp" },
    { pic_url: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/moments/11.webp" },
    { pic_url: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/moments/12.webp" },
    { pic_url: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/moments/13.webp" }
  ];

  // Honor moments (object -> convert to array)
  const honorimages = {
    pic_url_14: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/honor/14.webp",
    pic_url_15: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/honor/15.webp",
    pic_url_16: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/honor/16.webp",
    pic_url_17: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/honor/17.webp",
    pic_url_18: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/honor/18.webp",
    pic_url_19: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/honor/19.webp",
    pic_url_20: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/honor/20.webp",
    pic_url_21: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/honor/21.webp",
    pic_url_22: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/honor/22.webp",
    pic_url_23: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/honor/23.webp",
    pic_url_24: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/honor/24.webp",
    pic_url_25: "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/honor/25.webp"
  };

  // load data once (no axios needed)
  useEffect(() => {
    setHappyImages(happymoments); 
    setHonorImages(Object.values(honorimages).map(url => ({ pic_url: url })));
  }, []);

  // Happy carousel scroll
  useEffect(() => {
    const el = happyRef.current;
    let animationFrame;
    const step = () => {
      if (el) el.scrollLeft += 1;
      animationFrame = requestAnimationFrame(step);
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [happyImages]);

  // Honor carousel scroll (reverse)
  useEffect(() => {
    const el = honorRef.current;
    let animationFrame;
    const startScroll = () => {
      if (el) el.scrollLeft = el.scrollWidth;
      const step = () => {
        if (el) el.scrollLeft -= 1;
        animationFrame = requestAnimationFrame(step);
      };
      animationFrame = requestAnimationFrame(step);
    };
    startScroll();
    return () => cancelAnimationFrame(animationFrame);
  }, [honorImages]);

  // bg colors
  const getColor = () => {
    const bgcolor = ["bg-[#ffcc45]", "bg-[#7896ff]", "bg-[#f7641f]", "bg-[#000000]"];
    return bgcolor[Math.floor(Math.random() * bgcolor.length)];
  };

  return (
    <div className="p-4 my-32 space-y-8">
      {/* Happy Moments Carousel */}
      <div>
        <h2 className="text-md font-semibold mb-6 mx-4 font-inter md:text-xl lg:text-2xl xl:mb-8">
          Happy memory Moments
        </h2>
        <div
          ref={happyRef}
          className="flex flex-row space-x-4 overflow-x-hidden pb-2 transform rotate-[-1.82deg]"
        >
          {happyImages.map((item, idx) => (
            <div
              key={idx}
              className={`min-w-[200px] h-[140px] md:min-w-[300px] md:h-[200px] flex-shrink-0 overflow-hidden pb-8 p-2 ${getColor()}`}
            >
              <img src={item.pic_url} alt={`Happy ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Honor Moments Carousel */}
      <div className="flex flex-col">
        <h2 className="text-md font-semibold mb-3 mx-4 font-inter ml-auto md:text-xl lg:text-2xl">
          Honoring memory Moments
        </h2>
        <div
          ref={honorRef}
          className="flex flex-row space-x-4 overflow-x-hidden mt-8 transform rotate-[-358.18deg]"
        >
          {honorImages.map((item, idx) => (
            <div
              key={idx}
              className={`min-w-[200px] h-[140px] md:min-w-[300px] md:h-[200px] flex-shrink-0 overflow-hidden pb-8 p-2 ${getColor()}`}
            >
              <img src={item.pic_url} alt={`Honor ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MomentsCarousel;
