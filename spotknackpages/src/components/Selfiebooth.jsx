import React, { useEffect, useState } from 'react';
import Selfiebooth from '../../public/selfiebooth.json'
const Index = () => {
  // const url = "http://localhost:3000/selfiebooth";
  const [frames, setFrames] = useState([]);

  const bgcolor = ['#FFA500', '#2196F3', '#FFD700', '#000000']; 

  useEffect(() => {
    fetch(Selfiebooth)
      .then(res => res.json())
      .then(data => {
        const firstEight = data.slice(0, 8).map((item, index) => ({
          image: item.pic_url,
          backgroundColor: bgcolor[index % 4],
          borderColor:bgcolor[index % 4]
        }));
        setFrames(firstEight);
      })
      .catch(err => console.error(err));
  }, []);

  const getRotation = (index) => {
    const rotations = ['-rotate-6', 'rotate-3', '-rotate-3', 'rotate-6', '-rotate-6', 'rotate-3', '-rotate-3', 'rotate-6'];
    return rotations[index % rotations.length];
  };

  return (
    <section className="mt-20 px-4 md:px-10">
      {/* Title on small screens */}
      <div className="mb-8 text-center md:hidden">
        <h2 className="text-2xl font-bold text-blue-600">Selfie Booth</h2>
        <h3 className="text-lg border-b-2 border-black inline-block mt-2">Moments</h3>
      </div>

      {/* Top Row*/}
      <div className="hidden md:flex justify-center gap-6 mb-10">
        {frames.slice(0, 4).map((frame, index) => {
          const extraStyle = [
            "rotate-[-6deg] -translate-y-1",
            "rotate-[4deg] translate-x-2",
            "rotate-[-3deg] -translate-x-2",
            "rotate-[5deg] translate-y-1"
          ];
          return (
            <div
              key={index}
              className={`w-[180px] h-[220px] overflow-hidden bg-white shadow-md  ${extraStyle[index % extraStyle.length]}`}
              style={{ border: `8px solid ${frame.borderColor}`,
              backgroundColor:`${frame.backgroundColor}`}}
            >
              <img src={frame.image} className="w-full h-full object-cover" />
            </div>
          );
        })}
      </div>

      {/* Middle Row*/}
      <div className="hidden md:flex justify-center items-center gap-6 mb-10">
        <div
          className={`w-[180px] h-[220px] overflow-hidden bg-white shadow-md ${getRotation(4)}`}
          style={{ border: `8px solid ${frames[4]?.borderColor}` }}
        >
          <img src={frames[4]?.image} className="w-full h-full object-cover " />
        </div>

        <div className="text-center"> 
          <h2 className="text-4xl font-bold text-blue-600">Selfie Booth</h2>
          <h3 className="text-2xl border-b-2 border-black inline-block mt-2">Moments</h3>
        </div>

        <div
          className={`w-[180px] h-[220px] overflow-hidden bg-white shadow-md ${getRotation(5)}`}
          style={{ border: `8px solid ${frames[5]?.borderColor}` }}
        >
          <img src={frames[5]?.image} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Bottom Row*/}
      <div className="hidden md:flex justify-center gap-6 mb-6">
        {frames.slice(6, 8).map((frame, index) => (
          <div
            key={index + 6}
            className={`w-[180px] h-[220px] overflow-hidden bg-white shadow-md ${getRotation(index + 6)}`}
            style={{ border: `8px solid ${frame.borderColor}` }}
          >
            <img src={frame.image} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Mobile Layout (stacked) */}
      <div className="flex md:hidden flex-wrap justify-center gap-6 mb-6">
        {frames.map((frame, index) => (
          <div
            key={index}
            className={`w-[160px] h-[200px] overflow-hidden bg-white shadow-md ${getRotation(index)}`}
            style={{ border: `8px solid ${frame.borderColor}` }}
          >
            <img src={frame.image} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
