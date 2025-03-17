const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">हमारे बारे में</h3>
            <p className="text-gray-400">
              हम 20+ वर्षों से उत्तर प्रदेश और बिहार की पारंपरिक मिठाइयाँ लोगों तक पहुँचा रहे हैं। हमारे व्यंजन हर अवसर को खास बनाते हैं।
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">संपर्क करें</h3>
            <ul>
              <li className="text-gray-400">फोन: 9931738900</li>
              <li className="text-gray-400">ईमेल: guptarishikesh51@gmail.com</li>
              <li className="text-gray-400">पता: ग्राम: मुरहरिया, पोस्ट: कठेज, थाना: मोहनिया, जिला: कैमूर, राज्य: बिहार</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">सामाजिक मीडिया</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  फेसबुक
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  इंस्टाग्राम
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  ट्विटर
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">कानूनी जानकारी</h3>
            <ul>
              <li className="text-gray-400">GST नंबर: 07AAAAA1234A1Z1</li>
              <li className="text-gray-400">© 2025 Shree Hira Cooking Bhandar</li>
              <li className="text-gray-400">सभी अधिकार सुरक्षित</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;