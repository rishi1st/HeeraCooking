import React from 'react';
import FoodCard from './Foodcard';
import nasta from '../assets/Nasta';

const Nasta = () => {
  return (
    <>
    <h1 className='text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-gray-800 m-6'>नाश्ता </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      
      {nasta.map((nasta, index) => (
        <div key={index} className="w-full">
          <FoodCard 
            image={nasta.image} 
            nameEn={nasta.nameEn} 
            nameHi={nasta.nameHi} 
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default Nasta;