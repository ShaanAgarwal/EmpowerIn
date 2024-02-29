import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./CareerPage.css";
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const CareerPage = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userCategories, setUserCategories] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      fetchUserCategories();
    } else {
      fetchAllJobs();
    };
  }, []);

  useEffect(() => {
    if (userCategories.length > 0) {
      fetchAllJobs();
    };
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
    };
  };

  const fetchAllJobs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/job/getAllJobs`);
      setAllJobs(response.data.jobs);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching all jobs:', error);
      setLoading(false);
    };
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