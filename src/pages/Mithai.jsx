import React from 'react';
import FoodCard from './Foodcard';
import mithai from '../assets/Mithai';

const Mithai = () => {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-gray-800 m-6">
        मिठाइयाँ
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {mithai.map((mitha, index) => (
          <div key={index} className="w-full">
            <FoodCard 
              image={mitha.image} 
              nameEn={mitha.nameEn} 
              nameHi={mitha.nameHi} 
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Mithai;