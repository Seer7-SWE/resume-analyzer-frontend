import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 w-full z-50">
      <div className="text-2xl font-bold text-blue-600">ResumeAnalyzer</div>
      <div className="hidden md:flex space-x-8">
        <Link href="#features" className="text-gray-900 hover:text-blue-600 transition-all font-medium">Features</Link>
        <Link href="#testimonials" className="text-gray-900 hover:text-blue-600 transition-all font-medium">Testimonials</Link>
        <Link href="#pricing" className="text-gray-900 hover:text-blue-600 transition-all font-medium">Pricing</Link>
      </div>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transition-all font-semibold">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;