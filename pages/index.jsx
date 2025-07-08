import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import UploadResume from "../components/UploadResume";
import SearchResume from "../components/SearchResume";
import axios from "axios";

export default function Home() {
  const [jobDescription, setJobDescription] = useState("");
  const [matchingResumes, setMatchingResumes] = useState([]);
  const [matches, setMatches] = useState([]);
  const [description, setDescription] = useState('');


  const fetchMatches = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000"}/api/matches`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();
      setMatches(data || []);
    } catch (error) {
      console.error("Failed to fetch matches:", error);
    }
  };

  const handleUpload = async (file) => {
  const formData = new FormData();
  formData.append("resume", file);

  await axios.post("http://localhost:5000/api/upload", formData);
  };

  const handleMatch = async (description) => {
  if (typeof description !== "string") {
    console.error("Expected string, got:", description);
    return;
  }

  const res = await axios.post("http://localhost:5000/api/match", { description });
  setMatchingResumes(res.data);
};


  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Resume Analyzer</h1>
        <p className="mb-6">
          Upload your resume and let AI find the best job matches for you.
        </p>

        <textarea
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Enter job description..."
          rows={5}
        />
         
        <textarea
          placeholder="Paste job description here..."
          className="w-full p-2 border border-gray-300 rounded mt-4"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
         ></textarea>



        <div className="space-x-4 mb-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={fetchMatches}
          >
            Fetch Matches (GET)
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
             onClick={() => handleMatch(description)}>Match
          
          </button>
        </div>

        {matches.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mt-6">Matches from GET request:</h2>
            <ul className="list-disc pl-6">
              {matches.map((match, index) => (
                <li key={index}>
                  Resume {match[0]} – Score: {match[1]}
                </li>
              ))}
            </ul>
          </>
        )}

        {matchingResumes.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mt-6">Matches from POST request:</h2>
            <ul className="list-disc pl-6">
              {matchingResumes.map((resume, index) => (
                <li key={index}>{resume.name || "Unnamed Resume"}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      <UploadResume />
      <SearchResume />
      <Footer />
    </div>
  );
}
