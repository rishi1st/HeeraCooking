
import React from 'react';
import FoodCard from './Foodcard';
import khana from '../assets/Khana'

const Khana = () => {
  return (
    <>
    <h1 className='text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-gray-800 m-6'> खाना </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      
      {khana.map((khana, index) => (
        <div key={index} className="w-full">
          <FoodCard 
            image={khana.image} 
            nameEn={khana.nameEn} 
            nameHi={khana.nameHi} 
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default Khana;