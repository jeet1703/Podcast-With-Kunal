import React from 'react';

const Reviews = () => {
  const reviews = [
    { id: 1, text: "Great and Timely Content! Glad to see that this podcast addresses staying on top of market changes, trends and best practices from forward thinkers! Thanks for the continued great content", author: "John Doe" },
    { id: 2, text: "Great guests with fantastic and varied insight into the future of building and remodeling!", author: "Jane Smith" },
    { id: 3, text: "Super relevant Great listen on the way to the job site", author: "Mark Taylor" },
    { id: 4, text: "It's good to see a podcast dedicated to those who are serious about the future of construction. So far the guests have covered great topics including the subject of change, building science and safety, and new product development. Looking forward to future episodes and learning more about what's to come in construction.", author: "Emily Johnson"}
  ];

  const handleLoadMore = () => {
    window.location.href = '/Episode';
  };

  const renderStars = () => {
    return (
      <div className="flex bg-zinc-900">
        {[1, 2, 3, 4, 5].map((starId) => (
          <img  key={starId} src="/star.png" alt="Star" className="w-6 h-6 bg-transparent" />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-zinc-900 px-20 pt-10">
        {reviews.map(review => (
          <div key={review.id} className="p-4 rounded-md bg-zinc-900 md:w-2/3">
            {renderStars()}
            <p className="text-white font-bold bg-transparent">{review.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center  bg-zinc-900">
        <button
          className='pointer-events-none focus:outline-none text-black font-bold bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 rounded-full text-lg px-10 py-5 me-2 mb-7 dark:focus:ring-yellow-900'
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Reviews;
