import React, { useState } from 'react';

const Previous = () => {
  const defaultVideoUrl = 'https://www.youtube.com/embed/3P9ibdDuVEk?si=gw7HpAdARrMB_m6T';
  const [videos, setVideos] = useState([defaultVideoUrl, defaultVideoUrl, defaultVideoUrl]);

  const handleLoadMore = () => {
    
    window.location.href = '/Episode';
  };

  return (
    <div className='text-center mb-7' >
      <div className='text space-y-3 mt-10 mb-5'>
        <p className='text-yellow-400 font-bold text-2xl'>Listen To Our</p>
        <h3 className='text-white text-5xl font-bold'>Previous Episodes</h3>
      </div>
      <div className='flex justify-center mt-12 mb-8 flex-wrap'>
        {videos.map((videoUrl, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 mb-8">
            <div className="flex justify-center">
              <iframe
                width="400"
                height="269"
                src={videoUrl}
                title={`Previous Episode ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      <button
        className='focus:outline-none text-black font-bold bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 rounded-full text-lg px-10 py-5 me-2 mb-2 dark:focus:ring-yellow-900'
        onClick={handleLoadMore}
      >
        Load More
      </button>
    </div>
  );
};

export default Previous;
