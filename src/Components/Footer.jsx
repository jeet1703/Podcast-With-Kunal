import React from 'react';

function Footer() {
  return (
    <footer className="text-white px-10 mx-20 py-8 flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        <h3 className="text-xl font-bold mb-4">Recent Episodes</h3>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-white hover:underline">Recent Episode 1</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:underline">Recent Episode 2</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:underline">Recent Episode 3</a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-4 text-cen">
        <h3 className="text-xl font-bold mb-4">Pages</h3>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-white hover:underline">Page 1</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:underline">Page 2</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:underline">Page 3</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:underline">Page 4</a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        <h3 className="text-xl font-bold mb-4">Follow our Podcast</h3>
        <div className="flex space-x-4">
          <a href="https://www.youtube.com/channel/UCLVYUCnylIIuzQu0P12x3UQ" className="text-white hover:text-gray-400">
            <img src="/youtube.png" alt="YouTube" className="h-8" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <img src="/insta.png" alt="Instagram" className="h-8" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <img src="/spotify.png" alt="Spotify" className="h-8" />
          </a>
        </div>
      </div>
      <div className='w-full text-center py-4 mt-4'>
        <p className='text-white bg-transparent'>© 2021 Mishika Productions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
