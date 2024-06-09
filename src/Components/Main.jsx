import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Episode');
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-32 my-9">
        <div className="md:col-span-1 space-y-7">
          <p className='text-yellow-400 font-bold text-2xl'>Welcome To<br/>Mishika Production's</p>
          <h3 className='text-white text-5xl font-bold'>The Podcast <br/>With Kunal Show</h3>
          <p className='text-white text-2xl font-bold'>Weekly discussions with visionary leaders at<br/> the forefront of India's burgeoning ₹120 lakh <br/> crore economy.</p>
          <button
            type="button"
            onClick={handleButtonClick}
            className="focus:outline-none text-black font-bold bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 rounded-full text-lg px-10 py-5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            All Episodes
          </button>
        </div>
        <div className="md:col-span-1 flex justify-center mt-10 md:mt-0">
          <img src="/mainimg.png" alt="description" className="w-auto h-auto"/>
        </div>
      </div>
    </>
  );
};

export default Main;
