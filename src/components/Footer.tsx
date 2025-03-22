import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold">ResumeAnalyzer</h3>
          <p className="text-gray-400 text-sm mt-2">AI-powered resume optimization.</p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {["Home", "Features", "Pricing", "Contact"].map((link, index) => (
            <a key={index} href="#" className="text-gray-400 hover:text-white transition-all">{link}</a>
          ))}
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {[FaFacebook, FaTwitter, FaLinkedin].map((Icon, index) => (
            <a key={index} href="#" className="text-gray-400 hover:text-white transition-all">
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} ResumeAnalyzer. All rights reserved.
      </div>
      <a href="#top" className="absolute bottom-4 right-4 bg-gray-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-600 transition-all">
        ↑ Back to Top
      </a>
    </footer>
  );
};

export default Footer;