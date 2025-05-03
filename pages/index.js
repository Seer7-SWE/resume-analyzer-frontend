import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import UploadResume from "../components/UploadResume";
import SearchResume from "../components/SearchResume";
 // Import global styles

function App() {
  const [jobDescription, setJobDescription] = useState("");
  const [matches, setMatches] = useState([]);

  const fetchMatches = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/matches`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
  
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
  
      const data = await res.json();
      setMatches(data || []);
    } catch (error) {
      console.error("Failed to fetch matches:", error);
    }
  };
  

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <div>
        <h1>AI Resume Matcher</h1>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Enter job description..."
        />
        <button onClick={fetchMatches}>Find Matches</button>
        <ul>
          {matches?.map((match, index) => (
            <li key={index}>Resume {match[0]} - Score: {match[1]}</li>
          ))}
        </ul>
      </div>
      <UploadResume />
      <SearchResume />
      <Footer />
    </div>
  );
}

export default App;  // ✅ Corrected export statement
