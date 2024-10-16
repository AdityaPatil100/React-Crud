// src/components/UserList.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserList = ({ users, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = (user) => {
    navigate('/create', { state: { user } });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4" style={{ backgroundColor: '#fff', borderColor: 'red' }}>
        <h3 className="mb-4 text-center" style={{ color: 'red' }}>User List</h3>
        <Table bordered hover responsive="md" className="shadow-sm">
          <thead style={{ backgroundColor: 'red', color: 'white' }}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      className="me-2"
                      style={{ color: 'red', borderColor: 'red' }}
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      style={{ color: 'white', backgroundColor: 'red', borderColor: 'red' }}
                      onClick={() => onDelete(user.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No users available.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
