import React from 'react';

function UserProfile() {
    return (
      <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-10 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover mb-4"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">John Doe</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;