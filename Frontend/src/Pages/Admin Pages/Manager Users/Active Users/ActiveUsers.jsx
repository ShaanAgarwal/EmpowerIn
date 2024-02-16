import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActiveUsers = () => {
    const [activeUsers, setActiveUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/getActiveUsers`);
                if (response.data.success) {
                    setActiveUsers(response.data.activeUsers || []);
                } else {
                    console.error('API Error:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Active Users</h2>
            {activeUsers.length > 0 ? (
                <ul>
                    {activeUsers.map(user => (
                        <li key={user._id}>
                            <p>Name: {user.firstName} {user.lastName}</p>
                            <p>Email: {user.email}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No active users found</p>
            )}
        </div>
    );
};

export default ActiveUsers;
