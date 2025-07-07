##Task Manager API
A simple RESTful Task Manager API built with Node.js, Express, MongoDB (Mongoose), bcryptjs for password hashing, and express-session for session management using session IDs.

##Features
--User registration and login
--Secure password hashing with bcryptjs
--Session-based authentication using express-session
--CRUD operations for managing tasks (Create, Read, Update, Delete)
--User-specific task management (only logged-in users can manage their tasks)

##Tech Stack
--Backend: Node.js, Express
--Database: MongoDB with Mongoose ODM
--Authentication: bcryptjs, express-session
--Session Store: (Optional) MongoDB session store like connect-mongo for production

##Authentication Flow
--Registration: User provides username/email and password → password is hashed using bcryptjs and stored.
--Login: Credentials are validated → session ID is stored in the session cookie.
--Protected Routes: Middleware checks for a valid session before allowing access.

##Setup & Installation

--git clone https://github.com/your-username/task-manager-api.git
--cd task-manager-api

##Install dependencies:
--npm install

##Create a .env file and add:
--PORT=4000
--MONGODB_URI=mongodb://localhost:27017/task-manager
--SESSION_SECRET=your-secret-key

##Start the server:
--npm run dev
