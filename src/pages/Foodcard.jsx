import React from 'react';

const FoodCard = ({ image, nameEn, nameHi }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
      <img src={image} alt={nameEn} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-center text-yellow-500">{nameEn}</h3>
        <p className="text-lg text-center text-gray-700">{nameHi}</p>
      </div>
    </div>
  );
};

export default FoodCard;