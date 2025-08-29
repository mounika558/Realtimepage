import React from 'react';
import SelfieBooth from "../../components/Selfiebooth"
import Carousel from "../../components/MomentsCarousel"
const Index = () => {
  const firstMeetup = "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/meetups/6th+anniversary.webp";
  const learningMeetup = "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/timeline/Oct62024.webp";
  const networkingMeetup = "https://s3.ap-south-1.amazonaws.com/data.spotknack.com/images/website/timeline/March82025.webp";

  return (
    <>
      <p className="text-center font-semibold font-inter text-md leading-relaxed m-8 mt-12 md:text-3xl md:mx-20 md:my-20 lg:text-4xl lg:leading-10">
        At Spotknack, we cherish every moment with our students—capturing memories through photos is at the heart of what we do. Each picture tells a story of growth, joy, and connection.
      </p>

      <div className="p-4 sm:p-6 md:p-12">
      <div className="bg-white rounded-lg border border-gray-800 p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto">
        {/* Inner White Box */}

        {/* Title */}
        <div className="text-start mb-10">
          <h1 className="text-lg md:text-4xl font-semibold text-black ">
            <span role="img" aria-label="heart">❤️</span> Meetup Moments
          </h1>
          <p className="text-xs text-gray-600 mt-2 md:text-sm lg:text-xl">
            Moments that keeps moving forward !!!!!!
          </p>
        </div>

        {/* Image Cards */}
        <div className="flex flex-col items-center gap-10 px-2 md:px-10">
          {/* First Meetup */}
          <div className="p-2 w-full max-w-[1155px] rounded-lg overflow-hidden border border-gray-400 md:p-4 md:px-10 xl:py-8 xl:px-14">
            <img
              src={firstMeetup}
              alt="First Meetup - 27th July 2024"
              className="w-full h-auto object-cover rounded-md"
            />
            <p className="text-center text-blue-600 text-sm font-inter md:text-xl font-semibold py-3 lg:text-2xl  xl:text-4xl xl:p-10">
              First Offline Meetup - 27th July 2024
            </p>
          </div>

          {/* Learning Meetup */}
          <div className="p-2 w-full max-w-[1155px] rounded-lg overflow-hidden border border-gray-400 md:p-4 md:px-10 xl:py-8 xl:px-14">
            <img
              src={learningMeetup}
              alt="Learning Meetup - 6th Oct 2024"
              className="w-full h-auto object-cover rounded-md"
            />
            <p className="text-center text-blue-600 text-sm font-inter md:text-xl font-semibold py-3 lg:text-2xl xl:text-4xl xl:p-10">
              Learning Meetup - 6th Oct 2024
            </p>
          </div>

          {/* Networking Meetup */}
          <div className="p-2 w-full max-w-[1155px] rounded-lg overflow-hidden border border-gray-400 mb-4 md:p-4 md:px-10 xl:py-8 xl:px-14">
            <img
              src={networkingMeetup}
              alt="Networking Meetup - 8th March 2025"
              className="w-full h-auto object-cover rounded-md"
            />
            <p className="text-center text-blue-600 text-sm md:text-xl font-semibold py-3 lg:text-2xl xl:text-4xl xl:p-10">
              Networking Meetup - 8th March 2025
            </p>
          </div>
        </div>
      </div>
    </div>
    <SelfieBooth/>
    <Carousel/>
    </>
  );
};

export default Index;
