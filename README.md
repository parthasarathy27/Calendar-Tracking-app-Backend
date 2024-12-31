# Calendar Tracking App - Backend

This repository contains the backend code for the **Calendar Tracking App**. The app is designed to help organizations track communication with other companies efficiently, ensuring timely follow-ups and consistent engagement. The system includes modules for admins and users, with features like communication management, scheduling, and notifications.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
   - [Admin Module](#admin-module)
   - [User Module](#user-module)
   - [Reporting & Analytics Module](#reporting--analytics-module-optional)
3. [Tech Stack](#tech-stack)
4. [Setup Instructions](#setup-instructions)
5. [Deployment](#deployment)
6. [Testing & Validation](#testing--validation)
7. [Contributing](#contributing)
8. [License](#license)

## Project Overview

This project is a backend application for a **Calendar-based Communication Tracking System**. The application allows administrators to configure communication schedules, and for users to log and track interactions with companies, ensuring that follow-ups are timely and communication is consistent.

### Objective:
- Develop an application that allows companies to track their communications with other organizations using a calendar interface.
- The backend is responsible for managing companies, communication methods, users, and interactions.
  
## Features

### Admin Module
The Admin Module enables administrators to manage the configuration of the application, including companies and communication parameters.

- **Company Management:**  
  Admins can add, edit, and delete company information (name, location, LinkedIn profile, emails, phone numbers, communication periodicity, etc.).
  
- **Communication Method Management:**  
  Admins can define the available communication methods (e.g., LinkedIn Post, LinkedIn Message, Email, Phone Call). Each method includes a name, description, sequence, and whether it is mandatory in the sequence.

### User Module
The User Module allows users to interact with the system, view company communication history, and log new communications.

- **Dashboard View:**  
  Users can see a grid view of companies, showing the last five communications, and the next scheduled communication with color-coded highlights (e.g., red for overdue, yellow for today).

- **Communication Action:**  
  Users can log new communications by selecting a company, specifying the type (e.g., LinkedIn Post, Email), inputting the date, and adding notes.

- **Notifications:**  
  Displays overdue and upcoming communications, providing a quick overview for the user.

- **Calendar View:**  
  A calendar interface for viewing past and upcoming communications.

### Reporting & Analytics Module (Optional)
This module provides optional reporting and analytics features for admins and users.

- **Communication Frequency Report:**  
  A visual representation of how frequently each communication method is used.
  
- **Engagement Effectiveness Dashboard:**  
  Shows how effective communication methods are in terms of response or follow-up actions.

- **Overdue Communication Trends:**  
  Displays trends of overdue communications over time.

- **Downloadable Reports:**  
  Users can export communication data to PDF or CSV for offline analysis.

## Tech Stack

The backend of this project is built using the following technologies:

- **Node.js** - Server-side JavaScript environment
- **Express.js** - Web framework for building the backend API
- **MongoDB** - NoSQL database for storing company and communication data
- **Mongoose** - ODM (Object Data Modeling) for MongoDB
- **JWT (JSON Web Tokens)** - For secure user authentication
- **Node-cron** - For scheduling communication tasks
- **Nodemailer** - For sending email notifications

For the frontend (not included in this repository), the following technologies will be used:

- **React.js** - For building the user interface
- **Redux** - For state management
- **Tailwind CSS** - For styling
- **FullCalendar** - For calendar functionality

## Setup Instructions

To get started with the backend, follow these steps:

### Prerequisites:
- **Node.js** (>= v14.x)
- **MongoDB** (for local setup or use MongoDB Atlas for a cloud database)
- **npm** (or **yarn** for managing packages)

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/parthasarathy27/Calendar-Tracking-app-Backend.git
   cd Calendar-Tracking-app-Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file to store your environment variables. Example:
   ```
   DB_URI=mongodb://localhost:27017/calendar-tracking
   JWT_SECRET=your_jwt_secret_key
   ```

4. Run the application:
   ```bash
   npm start
   ```

   The server should now be running on `http://localhost:5000`.

### Database Setup:
- Make sure MongoDB is running either locally or use a cloud-based solution like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- You can populate the database with mock data for testing purposes by using the admin module.

## Deployment

For deployment, the backend can be deployed on platforms like **Heroku**, **Vercel**, or **DigitalOcean**.

4. The deployed backend will be accessible at `https://calendar-tracking-app-backend.herokuapp.com`.

## Testing & Validation

Before submission or deployment, ensure the application runs smoothly. Follow these steps:

1. Test the backend API using **Postman** or **Insomnia** to ensure all endpoints are functional.
2. Make sure CRUD operations for companies, communication methods, and user actions are working as expected.
3. Validate authentication and authorization using JWT.
4. Perform thorough testing to ensure that edge cases like overdue communications and date handling are addressed.

## Contributing

If you would like to contribute to this project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

---

### Final Notes:
- The **frontend** part of this project is still under development. This repository currently only contains the backend API and logic.
- **JWT authentication** should be used to protect routes and ensure security for the admin and user modules.
- For a **production-ready deployment**, further optimizations like rate limiting, logging, and error handling should be implemented.
