import React, { useState } from "react";
import axios from "axios";

const UploadResume = () => {
    const [file, setFile] = useState(null);

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post("http://127.0.0.1:8000/upload-resume/", formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        alert(response.data.message);
    };

    return (
        <div>
            <h2>Upload Resume</h2>
            <input
                   type="file"
               onChange={(e) => console.log(e.target.files[0])}
                accept=".pdf,.docx"/>
          

        </div>
    );
};

export default UploadResume;
