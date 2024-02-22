import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./CareerPage.css";
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import jobPosts from './jobPosts';  // Update the path accordingly

const CareerPage = () => {
  const [userCategories, setUserCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get email from local storage
    const email = localStorage.getItem('email');
    console.log(email);

    // Make API call only if email is present
    if (email) {
      fetchCategories(email);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchCategories = async (email) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/candidate/getCategories`, {
        params: { email },  // Use params to send email
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
              {/* <h2>{category}</h2> */}
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