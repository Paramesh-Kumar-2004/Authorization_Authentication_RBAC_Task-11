# **User Authentication and Authorization with Bearer Token**

This project implements a complete user authentication and authorization system using **Node.js**, **Express.js**, **MongoDB (Mongoose)**, and **JWT**.
It follows the **MVC architecture**, provides secure login and registration, and includes token-based authorization with Bearer tokens.
API documentation is provided through **Postman**.

---

## **✨ Features**

- User registration with validation
- Password hashing for security
- User login with credential verification
- JWT token generation
- Bearer token authentication
- Middleware-based token verification
- Protected routes accessible only with valid token
- User information retrieval from decoded token
- Clean and modular MVC structure
- Full Postman API documentation
- Proper error handling and readable code

---

## **🛠️ Technologies Used**

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JSON Web Token (JWT)**
- **Postman**

---

## **📌 How It Works**

1. **Register User**
   Users provide their details, and passwords are securely hashed before storing in the database.

2. **Login User**
   Credentials are verified, and a JWT token is returned to the client.

3. **Send Token in Authorization Header**
   The user includes the token in every protected request using the Bearer format.

4. **Token Verification Middleware**
   Middleware checks the token, decodes it, and attaches user data to the request object.

5. **Access Protected User Info**
   Only authenticated users can access protected routes that use the token verification middleware.

---

## **📑 API Documentation**

[Documentaion Link](https://documenter.getpostman.com/view/48369012/2sB3dMwW2s)



All endpoints—registration, login, and protected routes—are fully documented in **Postman**, including:

- Request bodies
- Authorization methods
- Example responses
- Error cases

---

## **📦 Project Goals**

This project demonstrates:

- Understanding of authentication and authorization
- Implementation of JWT workflows
- Proper MVC separation
- Use of middleware
- Secure password management
- API documentation best practices

---

## **📄 Summary**

This project provides a complete, secure, and scalable authentication system.
It is ideal for learning and implementing **token-based authentication** in real-world applications.
