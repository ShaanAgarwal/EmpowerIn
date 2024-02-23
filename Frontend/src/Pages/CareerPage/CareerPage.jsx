import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./CareerPage.css";
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import jobPosts from './jobPosts';

const CareerPage = () => {
  const [userCategories, setUserCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      fetchCategories(email);
    } else {
      setLoading(false);
      setUserCategories(Object.keys(jobPosts)); // Assuming jobPosts is an object with category keys
    }
  }, []);

  const fetchCategories = async (email) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/candidate/getCategories`, {
        params: { email },
      });

      setUserCategories(response.data.categories);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setLoading(false);
    }
  };


  return (
    <>
      <NavBar />
      <div className="career-page">
        {loading ? (
          <p>Loading...</p>
        ) : (
          userCategories.map(category => (
            <div key={category} className="job-category">
              {jobPosts[category] && (
                <div className="job-post">
                  <h3>{jobPosts[category].title}</h3>
                  <p>{jobPosts[category].description}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;
