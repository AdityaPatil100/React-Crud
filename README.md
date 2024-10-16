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
```
Screenshots:
![Screenshot 2024-10-17 005251](https://github.com/user-attachments/assets/d314f17f-d77f-4654-8d6c-c3af6500b6b4)
![Screenshot 2024-10-17 005433](https://github.com/user-attachments/assets/cfc3bc19-bbec-4a6b-9a7f-5640ec7e6d24)
![Screenshot 2024-10-17 005501](https://github.com/user-attachments/assets/89508343-3922-449a-bc69-57b389b137a5)
![Screenshot 2024-10-17 005516](https://github.com/user-attachments/assets/7e2cefa1-7f47-4b16-92d1-fd8b0e769b5c)







