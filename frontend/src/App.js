// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import MainLayout from './components/MainLayout';


const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:5000/api/users');
    setUsers(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleFormSubmit = async (formData) => {
    if (editingUser) {
      await axios.put(`http://localhost:5000/api/users/${editingUser.id}`, formData);
      setEditingUser(null);
    } else {
      await axios.post('http://localhost:5000/api/users', formData);
    }
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  };

  return (
    <>
      <NavBar />
      {loading ? (
        <SplashScreen />
      ) : (
        <MainLayout>
          <Routes>
            <Route path="/create" element={<UserForm onSubmit={handleFormSubmit} editingUser={editingUser} setEditingUser={setEditingUser} />} />
            <Route path="/table" element={<UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />} />
          </Routes>
        </MainLayout>
      )}
    </>
  );
};

export default App;
