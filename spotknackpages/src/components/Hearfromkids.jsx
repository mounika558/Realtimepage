import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HearFromKids = () => {
  const studentdataurl = 'https://s3.ap-south-1.amazonaws.com/data.spotknack.com/json_contents/recommend.json';
  const [studentdata, setstudentdata] = useState([]);
  const [imageposition, setposition] = useState([]);
  const [popup, setpopup] = useState(false);
  const[selected,setselected]=useState();

  // Fetch student data
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(studentdataurl);
        setstudentdata(response.data);
      } catch (err) {
        console.log('Failed to fetch', err);
      }
    };
    fetchdata();
  }, []);

  // Set initial positions after studentdata is loaded
  useEffect(() => {
    if (studentdata.length === 0) return;
    const initialpositions = studentdata.map(() => ({
      x: Math.random() * (window.innerWidth - 80),
      y: Math.random() * (window.innerHeight - 80),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }));
    setposition(initialpositions);
  }, [studentdata]);

  // Animate floating images
  useEffect(() => {
    const animateimages = setInterval(() => {
      setposition((prevposition) =>
        prevposition.map((pos) => {
          let newx = pos.x + pos.vx;
          let newy = pos.y + pos.vy;
          let newvx = pos.vx;
          let newvy = pos.vy;

          // Reflect on X boundary
          if (newx <= 0 || newx >= window.innerWidth - 80) {
            newvx = -newvx;
            newx = Math.max(0, Math.min(window.innerWidth - 80, newx));
          }
          // Reflect on Y boundary
          if (newy <= 0 || newy >= window.innerHeight - 80) {
            newvy = -newvy;
            newy = Math.max(0, Math.min(window.innerHeight - 80, newy));
          }

          return {
            ...pos,
            x: newx,
            y: newy,
            vx: newvx,
            vy: newvy,
          };
        })
      );
    }, 16);

    return () => clearInterval(animateimages);
  }, [imageposition.length]);

  return (
    <>
      <div className="flex flex-col justify-center p-4 md:p-14">
        <div className="text-left">
          <p className="text-xl font-medium text-blue-500 lg:text-4xl my-4">
            Our kids stand out here!
          </p>
          <p className="text-xl font-bold lg:text-5xl">
            When We Asked Our Students, Will You Recommend Us To Your Friends?
          </p>
        </div>
          
        <div className="w-screnn h-screen bg-slate-400 relative mt-16 overflow-hidden">
          {studentdata.map((img, index) => {
            const imgposition = imageposition[index];
            if (!imgposition) return null;
            return (
              <div key={index} className="absolute w-20 h-20 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white shadow-md cursor-pointer transition-transform hover:scale-110"
                onClick={() => {
                    return(
                        setpopup(true),
                        setselected(studentdata[index])
                    )
                }}
                style={{
                  left: `${imgposition.x}px`,
                  top: `${imgposition.y}px`,
                }}>
                <img
                  src={img.pic_url}
                  alt={`${img.name} image`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            );
          })}
        </div>
      </div>

      {popup && (
        <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
        onClick={() => setpopup(false)}>
            <div className="w-full max-w-[40rem] h-auto flex flex-col md:flex-row gap-6 md:gap-10 text-base px-6 md:px-12 py-6 rounded-md bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}>
            <img src={selected.imgurl} className="w-20 h-20 object-cover rounded-full ml-20 md:w-36 md:h-36 md:ml-0" alt="Popup"
            />
            <div className="space-y-2 text-center md:text-left">
              <span className="text-blue-500 font-bold text-lg">{selected.name}</span>
              <p className="font-semibold text-gray-700">{selected.designation}</p>
              <p className="text-sm md:text-base text-gray-600">{selected.content}</p>
            </div> 
          </div>
        </div>
      )}
    </>
  );
};

export default HearFromKids;
