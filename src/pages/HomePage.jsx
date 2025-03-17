import React from 'react';
import { FaUtensils, FaCookieBite, FaConciergeBell, FaPhone } from 'react-icons/fa';
import logo from '../assets/logo.png';
import Navbar from './NavBar';
import Mithai from './Mithai';
import Nasta from './Nasta';
import FastFood from './FastFood';
import Khana from './Khana';
import Footer from './Footer';
import ContactUs from './ContactUs';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden"> {/* Prevent horizontal scrolling */}
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-yellow-500 text-white text-center py-12 sm:py-20 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto"> {/* Constrain content width */}
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">🥘स्वागत है श्री हीरा कुकिंग में!🎉</h2>
            <p className="text-sm sm:text-lg mb-4">
              हम आपके खास अवसरों के लिए उत्तम स्वादिष्ट भोजन तैयार करते हैं।
              चाहे वह शादी हो, जन्मदिन की पार्टी हो, या फिर मृत्यु भोज,
              श्री हीरा कुकिंग आपके हर इवेंट को खास बना सकता है।
            </p>
            <p className="text-sm sm:text-lg mb-4">
              हमारे पास उत्तर प्रदेश और बिहार के पारंपरिक स्वादिष्ट खाने का विस्तृत मेनू है,
              जो आपके मेहमानों को मंत्रमुग्ध कर देगा।
              हम स्वाद, गुणवत्ता, और सेवा में विश्वास रखते हैं।
            </p>

            <div className="mt-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">📍 हमारे सेवा क्षेत्र:</h3>
              <p className="text-sm sm:text-lg">
                हम उत्तर प्रदेश और बिहार के विभिन्न इलाकों में उपलब्ध हैं।
                हमारे भोजन का अनुभव आपको हर खास मौके पर चाहिए।
              </p>
            </div>

            <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-white text-yellow-500 font-semibold text-base sm:text-lg rounded-full hover:bg-gray-200 transition duration-300">
              📜आइए मेनू देखिए
            </button>
          </div>
        </section>

        {/* Mithai Section */}
        <div className="max-w-6xl mx-auto"> {/* Constrain content width */}
          <Mithai />
        </div>

        {/* Nasta Section */}
        <div className="max-w-6xl mx-auto"> {/* Constrain content width */}
          <Nasta />
        </div>

        {/* FastFood Section */}
        <div className="max-w-6xl mx-auto"> {/* Constrain content width */}
          <FastFood />
        </div>

        {/* Khana Section */}
        <div className="max-w-6xl mx-auto"> {/* Constrain content width */}
          <Khana />
        </div>
      </div>
      {/* <Footer/> */}
      {/* <ContactUs/> */}
    </div>
  );
};

export default HomePage;