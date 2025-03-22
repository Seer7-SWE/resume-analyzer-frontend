import React, { useState } from "react";
import axios from "axios";

const SearchResume = () => {
    const [jobDescription, setJobDescription] = useState("");
    const [matches, setMatches] = useState([]);

    const searchResumes = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/search-resume/?query=${jobDescription}&k=3`);
        setMatches(response.data.matches);
    };

    return (
        <div>
            <h2>Find Best-Matching Resumes</h2>
            <textarea
                placeholder="Enter Job Description..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
            />
            <button onClick={searchResumes}>Search</button>
            <ul>
                {matches.map((match, index) => (
                    <li key={index}>Resume {match[0]} - Score: {match[1]}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResume;
