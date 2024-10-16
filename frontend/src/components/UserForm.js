// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notification from './Notification';

const UserForm = ({ onSubmit }) => {
    const location = useLocation();
    const user = location.state?.user || null;
    const navigate = useNavigate();

    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [age, setAge] = useState(user ? user.age : '');
    const [notification, setNotification] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setAge(user.age);
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { name, email, age };

        try {
            if (user) {
                await axios.put(`http://localhost:5000/api/users/${user.id}`, userData);
                setNotification('User updated successfully!');
            } else {
                await axios.post('http://localhost:5000/api/users', userData);
                setNotification('User created successfully!');
            }

            setTimeout(() => {
                setNotification('');
                navigate('/table');
            }, 2000);
        } catch (error) {
            console.error("Error submitting user data:", error);
            setNotification('Error occurred while saving user.');
        }
    };

    return (
        <>
            {notification && (
                <Notification message={notification} onClose={() => setNotification('')} />
            )}
            <div className="container mt-4" style={{ maxWidth: '600px' }}>
                <div className="card shadow-sm p-4" style={{ borderColor: 'red' }}>
                    <h4 className="mb-4 text-center text-danger">{user ? 'Update User' : 'Create User'}</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="name" className="text-danger">Name:</label>
                            <input
                                id="name"
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter full name"
                                required
                                style={{
                                    borderColor: 'red',
                                    borderWidth: '2px',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'red'}
                                onBlur={(e) => e.target.style.borderColor = 'red'}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="text-danger">Email:</label>
                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                                required
                                style={{
                                    borderColor: 'red',
                                    borderWidth: '2px',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'red'}
                                onBlur={(e) => e.target.style.borderColor = 'red'}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="age" className="text-danger">Age:</label>
                            <input
                                id="age"
                                type="number"
                                className="form-control"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                placeholder="Enter age"
                                required
                                style={{
                                    borderColor: 'red',
                                    borderWidth: '2px',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'red'}
                                onBlur={(e) => e.target.style.borderColor = 'red'}
                            />
                        </div>
                        <button type="submit" className="btn btn-danger w-100">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UserForm;
