# Task Management System

This is a Task Management System built using React and Node.js.

## Features

- **Task Creation**: Users can create tasks with details such as name, description, priority, and status.
- **Task Management**: User can manage tasks by updating their status (e.g., to-do, in progress, done).
- **Search Functionality**: Users can search for tasks and based on name or description.
- **CSV Export**: Users can export tasks and projects data to CSV format.
- **Project Status**: Projects have status indicators to show the overall progress.

## Technologies Used

- React
- Node.js
- Express
- MongoDB
- PostgreSQL
- Styled Components

## Setup Instructions

1. Clone the repository from github:
   https://github.com/AgneJano/spring-project2024
2. Open terminal on VSCODE and run command:
   ```
   git clone https://github.com/AgneJano/spring-project2024
   ```
4. Setup database in ProgreSQL
5. Run commands in database
```
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	registered_on DATE NOT NULL,
	role VARCHAR(255) NOT NULL DEFAULT 'user'
);
 
CREATE TABLE Projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    status VARCHAR(100) DEFAULT 'in-progress'
);

CREATE TABLE Tasks (    id SERIAL PRIMARY KEY,
    project_id INT,
    name VARCHAR(100),
    description TEXT,
    status VARCHAR(100) DEFAULT 'to-do',
    priority VARCHAR(100) DEFAULT 'medium',
    created_on DATE DEFAULT CURRENT_DATE,
    updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Projects(id) ON DELETE CASCADE
);
```

5. Install packagess in server and client
 ```
cd client 
npm run dev
cd ../server
npm run dev
```
6. Add .env file to main folder and paste this
```
# Database Configuration Variables
DB_USER=postgres
DB_HOST=localhost
DB_NAME=picdu
DB_PASSWORD=albertoviciute

# Server Configuration Variable
PORT=1000

# JWT Configuration Variable
JWT_SECRET=myjwtsecretkey

MONGODB = mongodb+srv://norazu:crg7bwaZVQYezkyM@cluster0.xst3bzl.mongodb.net/
```
7. Run servers
 
```
cd client
npm run dev
cd ../server
npm run dev
```
