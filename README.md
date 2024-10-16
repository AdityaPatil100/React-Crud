# React CRUD App

A simple CRUD (Create, Read, Update, Delete) application built with React and React Bootstrap for managing user data. This app provides an intuitive interface for creating and managing users.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Features

- User creation and updating
- User list display with edit and delete options
- Responsive design using React Bootstrap
- Notification messages for user actions
- Splash screen during data loading

## Technologies Used

- **Frontend**: React, React Router, React Bootstrap
- **Backend**: Node.js, Express.js (assumed based on API calls)
- **Database**: MySQL (assumed based on CRUD functionality)
- **Others**: Axios for HTTP requests

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AdityaPatil100/React-Crud.git
   cd React-Crud
2. Backend:
   ```bash
   cd backend
   node index.js
3. Frontend:
   ```bash
   cd frontend
   npm install
   npm start

In backend dir, check config->config.json and set database connection
   ```bash
   {
     "development": {
       "username": "root",
       "password": "root",
       "database": "crud_app",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }

Screenshots
![Screenshot 2024-10-17 005501](https://github.com/user-attachments/assets/68b0941e-eacb-4eb3-adb0-d178cfa5acbf)
![Screenshot 2024-10-17 005433](https://github.com/user-attachments/assets/633a9a34-6bee-4300-a1bd-8021ed73704a)
![Screenshot 2024-10-17 005356](https://github.com/user-attachments/assets/fcb0ef5a-18b0-4eb8-af12-bfc7acdb24dd)
![Screenshot 2024-10-17 005251](https://github.com/user-attachments/assets/0b51dcd3-2276-4f73-a9b6-f5237d3264ea)
![Screenshot 2024-10-17 005516](https://github.com/user-attachments/assets/8d8bec76-9741-4652-beb5-7017d2eeb509)



