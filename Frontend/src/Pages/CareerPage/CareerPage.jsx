import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./CareerPage.css";
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

// ...

const CareerPage = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userCategories, setUserCategories] = useState([]);

  useEffect(() => {
    fetchUserCategories();
  }, []);

  useEffect(() => {
    // Fetch job posts after user categories are loaded
    if (userCategories.length > 0) {
      fetchAllJobs();
    }
  }, [userCategories]);

  const fetchUserCategories = async () => {
    try {
      const email = localStorage.getItem('email');
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/candidate/getCategories`, {
        params: { email },
      });

      setUserCategories(response.data.categories);
    } catch (error) {
      console.error('Error fetching user categories:', error);
    }
  };

  const fetchAllJobs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/job/getAllJobs`);
      const sortedJobs = sortJobsByPriority(response.data.jobs);
      setAllJobs(sortedJobs);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching all jobs:', error);
      setLoading(false);
    }
  };

  const sortJobsByPriority = (jobs) => {
    // Sort jobs based on user's priority categories
    const sortedJobs = jobs.sort((jobA, jobB) => {
      const categoryAIndex = findHighestPriorityCategory(userCategories, jobA.categoryKeywords);
      const categoryBIndex = findHighestPriorityCategory(userCategories, jobB.categoryKeywords);
      return categoryAIndex - categoryBIndex;
    });

    return sortedJobs;
  };

  const findHighestPriorityCategory = (userCategories, jobCategories) => {
    // Find the highest priority category index for a job
    const highestPriorityIndex = Math.min(
      ...jobCategories.map(category => userCategories.indexOf(category))
    );
    return highestPriorityIndex !== -1 ? highestPriorityIndex : Infinity;
  };

  return (
    <>
      <NavBar />
      <div className="career-page">
        {loading ? (
          <p>Loading...</p>
        ) : (
          allJobs.map(job => (
            <div key={job._id} className="job-post">
              <h3>{job.jobTitle}</h3>
              <p>{job.jobDescription}</p>
              <p>Location: {job.location}</p>
              <p>Salary: {job.salary}</p>
              <p>Expertise: {job.expertise.join(', ')}</p>
              <p>Skills: {job.skills.join(', ')}</p>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;
