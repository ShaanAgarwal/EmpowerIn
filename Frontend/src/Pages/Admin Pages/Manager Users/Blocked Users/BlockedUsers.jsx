import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlockedUsers = () => {
    const [blockedUsers, setBlockedUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/getBlockedUsers`);
                if (response.data.success) {
                    setBlockedUsers(response.data.blockedUsers || []);
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
            <h2>Blocked Users</h2>
            {blockedUsers.length > 0 ? (
                <ul>
                    {blockedUsers.map(user => (
                        <li key={user._id}>
                            <p>Name: {user.firstName} {user.lastName}</p>
                            <p>Email: {user.email}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No blocked users found</p>
            )}
        </div>
    );
};

export default BlockedUsers;
