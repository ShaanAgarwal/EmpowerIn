import React, { useState } from 'react';
import axios from 'axios';
import "./CreateJob.css";

const CreateJob = () => {
    const [jobData, setJobData] = useState({
        jobTitle: "",
        jobDescription: "",
        location: "",
        salary: 0,
        categoryKeywords: [],
        expertise: [],
        skills: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
    };

    const handleArrayInputChange = (e, field) => {
        const { value } = e.target;
        setJobData({ ...jobData, [field]: value.split(",").map(item => item.trim()) });
    };

    const createJob = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/job/createJob`, jobData);
            const createdJob = response.data.newJob;
            alert("Job created successfully!");
        } catch (error) {
            console.error("Error creating job:", error);
            alert("Error creating job. Please try again.");
        };
    };

    return (
        <div className="create-job-container">
            <h2>Create Job</h2>
            <form>
                <label htmlFor="jobTitle">Job Title:</label>
                <input type="text" id="jobTitle" name="jobTitle" onChange={handleInputChange} />

                <label htmlFor="jobDescription">Job Description:</label>
                <textarea id="jobDescription" name="jobDescription" onChange={handleInputChange}></textarea>

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" onChange={handleInputChange} />

                <label htmlFor="salary">Salary:</label>
                <input type="number" id="salary" name="salary" onChange={handleInputChange} />

                <label htmlFor="categoryKeywords">Category Keywords (comma-separated):</label>
                <input type="text" id="categoryKeywords" name="categoryKeywords" onChange={(e) => handleArrayInputChange(e, "categoryKeywords")} />

                <label htmlFor="expertise">Expertise (comma-separated):</label>
                <input type="text" id="expertise" name="expertise" onChange={(e) => handleArrayInputChange(e, "expertise")} />

                <label htmlFor="skills">Skills (comma-separated):</label>
                <input type="text" id="skills" name="skills" onChange={(e) => handleArrayInputChange(e, "skills")} />

                <button type="button" onClick={createJob}>Create Job</button>
            </form>
        </div>
    );
};

export default CreateJob;
