import { Link } from "react-router-dom";
import { FaUtensils, FaCookieBite, FaConciergeBell, FaPhone } from "react-icons/fa";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 text-white p-4 shadow-lg overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 sm:h-16 w-12 sm:w-16 rounded-full" />
          <h1 className="text-2xl sm:text-3xl font-bold">Shree Heera Cooking</h1>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full sm:w-auto">
          <Link
            to="/Mithai"
            className="flex items-center gap-2 bg-white text-yellow-500 px-2 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md text-sm sm:text-base font-bold hover:bg-gray-200 whitespace-nowrap"
          >
            <FaCookieBite /> मिठाई
          </Link>
          <Link
            to="/Nasta"
            className="flex items-center gap-2 bg-white text-yellow-500 px-2 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md text-sm sm:text-base font-bold hover:bg-gray-200 whitespace-nowrap"
          >
            <FaConciergeBell /> नाश्ता
          </Link>
          <Link
            to="/FastFood"
            className="flex items-center gap-2 bg-white text-yellow-500 px-2 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md text-sm sm:text-base font-bold hover:bg-gray-200 whitespace-nowrap"
          >
            <FaConciergeBell /> फास्ट फूड
          </Link>
          <Link
            to="/Khana"
            className="flex items-center gap-2 bg-white text-yellow-500 px-2 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md text-sm sm:text-base font-bold hover:bg-gray-200 whitespace-nowrap"
          >
            <FaUtensils /> खाना
          </Link>
          <Link
            to="/Contact"
            className="flex items-center gap-2 bg-white text-yellow-500 px-2 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md text-sm sm:text-base font-bold hover:bg-gray-200 whitespace-nowrap"
          >
            <FaPhone /> संपर्क करें
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;