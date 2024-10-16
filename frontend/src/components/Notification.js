// src/components/Notification.js
import React from 'react';
import { Toast } from 'react-bootstrap';

const Notification = ({ message, onClose }) => {
    return (
        <Toast onClose={onClose} style={{ position: 'absolute', top: 20, right: 20 }}>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
};

export default Notification;
