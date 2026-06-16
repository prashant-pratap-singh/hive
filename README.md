HiveChat is a scalable real-time messaging platform designed to provide seamless communication through instant messaging, secure authentication, online user presence tracking, and media sharing. Built using the MERN stack and Socket.IO, HiveChat delivers a modern chat experience with responsive UI, customizable themes, and efficient media management.

## 🔐 Authentication & User Management

* Secure authentication powered by Clerk
* Email and social login support
* Session management and user verification
* Protected routes and middleware
* User profile management
* Persistent authentication across devices
* Secure token handling and authorization

---

## 🛠️ Tech Stack

### Frontend

* React
* Tailwind CSS
* Hero UI
* Zustand
* Socket.io Client

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication

* Clerk

### Real-Time Communication

* Socket.IO

### Media Storage & Delivery

* ImageKit

### Deployment

* Frontend: Render
* Backend: Render
* Database: MongoDB Atlas

---

## 🔒 Security Features

* Clerk Authentication & Session Management
* Protected Routes & API Authorization
* Secure User Identity Verification
* Environment Variable Protection
* Input Validation & Sanitization
* Role-Based Access Control (Optional)

  ### Setup
  
  **🧪 Environment Variables**

 **BACKEND**
  
  PORT=<your_port>

NODE_ENV=<development_or_production>

MONGO_URI=<your_mongodb_connection_string>

CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
CLERK_WEBHOOK_SIGNING_SECRET=<your_clerk_webhook_signing_secret>

IMAGEKIT_PRIVATE_KEY=<your_imagekit_private_key>

FRONTEND_URL=<your_frontend_url>


**FRONTEND**

VITE_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>



