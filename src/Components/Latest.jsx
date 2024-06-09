import React, { useState, useEffect } from 'react';

const Latest = () => {
  const [latestVideo, setLatestVideo] = useState(null);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const apiKey = 'YOUR_API_KEY'; // Replace with your YouTube Data API key
        const channelId = 'YOUR_CHANNEL_ID'; // Replace with the channel ID you want to fetch videos from
        const maxResults = 1;

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setLatestVideo(data.items[0]);
        }
      } catch (error) {
        console.error('Error fetching the latest video:', error);
      }
    };

    fetchLatestVideo();
  }, []);

  const defaultVideoUrl = 'https://www.youtube.com/embed/3P9ibdDuVEk?si=gw7HpAdARrMB_m6T';
  const videoId = latestVideo ? latestVideo.id.videoId : null;
  const videoUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : defaultVideoUrl;

  return (
    <div className='bg-zinc-900 py-4 w-full'>
      <div className='container mx-auto px-4 bg-zinc-900'>
        <h2 className='text-black bg-yellow-400 font-bold text-2xl inline-block p-2 mb-4 md:ms-20 md:mb-0 '>
          Latest Episode
        </h2>
        <div className='flex flex-col items-center'>
          <div className='w-full flex justify-center'>
            <div className='bg-zinc-900 w-full flex justify-center'>
              <iframe
                width="560"
                height="315"
                src={videoUrl}
                title={latestVideo ? latestVideo.snippet.title : 'Default Video'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
