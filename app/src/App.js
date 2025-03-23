import React, { useState } from "react";
import UploadResume from "./components/UploadResume";
import SearchResume from "./components/SearchResume";




function App() {
  const [jobDescription, setJobDescription] = useState("");
  const [matches, setMatches] = useState([]);

  const fetchMatches = async () => {
    const response = await fetch(`http://127.0.0.1:8000/match-resume/?job_description=${jobDescription}`);
    const data = await response.json();
    setMatches(data.matches);
  };

  return (
    <div>
      <h1>AI Resume Matcher</h1>
      <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} placeholder="Enter job description..." />
      <button onClick={fetchMatches}>Find Matches</button>
      <ul>
        {matches.map((match, index) => (
          <li key={index}>Resume {match[0]} - Score: {match[1]}</li>
        ))}
      </ul>
    </div>
  );
  return (
    <div>
        <h1>AI Resume Matcher</h1>
        <UploadResume />
        <SearchResume />
    </div>
  );
}

export default App;
