# Voting Application

A simple RESTful Task Manager API built with Node.js, Express, MongoDB (Mongoose), bcryptjs for password hashing, and express-session for session management using session IDs.

## Features

- User registration and login
- Secure password hashing with bcryptjs
- Session-based authentication using express-session
- CRUD operations for managing tasks (Create, Read, Update, Delete)
- User-specific task management (only logged-in users can manage their tasks)

## Technologies Used

- Backend: Node.js, Express
- Database: MongoDB with Mongoose ODM
- Authentication: bcryptjs, express-session

## Authentication Flow
- Registration: User provides username/email and password → password is hashed using bcryptjs and stored.
- Login: Credentials are validated → session ID is stored in the session cookie.
- Protected Routes: Middleware checks for a valid session before allowing access.



## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-githuburl/voting_app.git
  
2. Install dependencies:
  - npm install

3.  Create a .env file and add:
- PORT=4000
- MONGODB_URI=mongodb://localhost:27017/task-manager
- SESSION_SECRET=your-secret-key

4. Start the server:
   ```bash
   npm run dev



