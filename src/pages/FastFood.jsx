
import React from 'react';
import FoodCard from './Foodcard';
import fastFood from '../assets/fastFood'

const FastFood = () => {
  return (
    <>
    <h1 className='text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-gray-800 m-6'> फास्ट फूड</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      
      {fastFood.map((fastFood, index) => (
        <div key={index} className="w-full">
          <FoodCard 
            image={fastFood.image} 
            nameEn={fastFood.nameEn} 
            nameHi={fastFood.nameHi} 
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default FastFood;