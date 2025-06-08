# gRPC Multi-Server Architecture

This project demonstrates how to implement a microservice architecture using gRPC with Node.js and TypeScript. It consists of two servers communicating through gRPC:

- **Server A**: Acts as a gRPC client. It handles user-related operations and makes gRPC calls to Server B.
- **Server B**: Implements the `EmailService` using gRPC and handles the actual email-related logic.

---

## 📁 Project Structure

<img width="404" alt="Screenshot 2025-06-08 at 12 31 42 PM" src="https://github.com/user-attachments/assets/4034ab76-0e1b-413a-ad09-89559b679317" />



---

## 🛠️ Technologies Used

- **Node.js**
- **TypeScript**
- **gRPC (`@grpc/grpc-js`, `@grpc/proto-loader`)**
- **ts-node** for development

---


cd server-b
npx ts-node emailService.ts
