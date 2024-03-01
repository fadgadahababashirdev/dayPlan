import React from 'react';

const Welcoming = () => {
  return (
    <div
      className="flex justify-center text-white flex-col px-32"
      style={{
        backgroundImage: 'url(../public/background.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        lineHeight: '3rem',
      }}
    >
      <div>
        <h1 className="text-gray-500 text-4xl mb-6">
          Get Inspired to do Things
        </h1>
        <h3 className="text-5xl mb-12 font-extrabold">
          Hello, What can I Call you ?{' '}
        </h3>
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Enter Your Prefered Name"
          className="w-1/2 pl-12 text-black outline-none border-sm"
        />
        <div className="w-1/2 flex justify-end">
          {' '}
          <button className="mt-2 w-32 bg-blue-900 font-extrabold ">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcoming;
