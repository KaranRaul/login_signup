# Login Signup Pages (Better)

This is a **Full-Stack Web Application** built with **React**, **Express**, **MongoDB**, and **TypeScript**. The backend is deployed on **Render**, and the frontend is deployed on **Vercel**. The project implements user authentication and authorization using **JWT** (JSON Web Tokens) and provides a seamless login and signup experience.

# Link :- https://login-signup-test1.vercel.app/

## GitHub Repository

[GitHub Repository Link](https://github.com/KaranRaul/login_signup)

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [How to Run the Project](#how-to-run-the-project)
- [Assumptions and Limitations](#assumptions-and-limitations)

## Introduction

This project is a **user authentication** system with a **login** and **signup** form. The frontend is built using **React** and **TypeScript**, while the backend is built using **Express** and **MongoDB**, providing **RESTful API** endpoints for managing user registration and login. 

The system uses **JWT** for user authentication and handles all requests through a secure token mechanism. The backend is deployed on **Render** and the frontend is deployed on **Vercel**.

## Technologies Used

### Backend:
- **Node.js** with **Express**: Server-side JavaScript runtime and framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user data.
- **JWT (JSON Web Tokens)**: Used for secure authentication.
- **TypeScript**: Adds static typing to JavaScript for better development and maintainability.
- **Render**: Platform used to deploy the backend.
  
### Frontend:
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Adds type safety to React.
- **Tailwind CSS**: Utility-first CSS framework for fast styling.
- **Formik**: Library for building forms in React, with built-in validation and easy handling of form submissions.
- **lucide-react**: Icon library used for rendering password visibility toggle.
- **Vercel**: Platform used to deploy the frontend.

## Backend Setup

### Prerequisites

Before running the backend, make sure you have **Node.js** installed on your local machine. You will also need a **MongoDB** account (locally or via **MongoDB Atlas**).

## How to Run the Project


### Steps to run the backend locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/KaranRaul/login_signup.git
   cd client

2. Install the dependencies:
    ```bash
    npm install

3. Create an .env file in the root of the project and add the following:
    ```bash
    MONGO_URI=your-mongo-connection-string
    JWT_SECRET=your-secret-key
    PORT=5000

4. start the server:
    ```bash
    tsc -b
    node dist/server.js
    
### Key Backend Features:
- **Authentication**: Uses JWT for user login and registration.
- **MongoDB**: Stores user data securely in MongoDB.
- **Express**: Handles API routes for signup and login with validation.
- **API Routes**:
POST /api/auth/register: Registers a new user.
POST /api/auth/login: Authenticates and logs in the user.

## Frontend Setup

1. Clone the repository:
    ```bash
    cd client

2. Install dependencies:
    ```bash
    npm install
 
3. Run the development server:
    ```bash
    npm run dev

### Key Frontend Features:

- **React**: The user interface is built with React.
- **TypeScript**: Static typing is used for better developer experience.
- **Tailwind CSS**: Provides responsive design and fast styling.
- **Formik**: Handles form submissions and validation for login and signup.
- **lucide-react**: Used for icons (like eye icon for password visibility).


### Assumptions and Limitations

#### Assumptions:
- The project assumes that users will have a working internet connection to access the API for login and registration.
- Users will input valid email and password formats during registration and login.

#### Limitations:
- **Password Security**: Passwords are hashed on the backend, but additional security measures such as multi-factor authentication (MFA) are not implemented yet.
- **Error Handling**: While basic error handling is implemented, more comprehensive error handling for edge cases (e.g., rate-limiting, account lockouts) can be added.
- **Scaling**: Although MongoDB is highly scalable, this implementation does not yet address potential bottlenecks for large-scale production systems (e.g., rate-limiting for login attempts).
