# gRPC Multi-Server Architecture

This project demonstrates how to implement a microservice architecture using gRPC with Node.js and TypeScript. It consists of two servers communicating through gRPC:

- **Server A**: Acts as a gRPC client. It handles user-related operations and makes gRPC calls to Server B.
- **Server B**: Implements the `EmailService` using gRPC and handles the actual email-related logic.

---

## 📁 Project Structure

grpc-multi-server/
├── server-a/
│ ├── proto/
│ │ └── email.proto # gRPC service definition
│ ├── grpcClients/
│ │ └── emailClient.ts # gRPC client to call email service
│ ├── controllers/
│ │ └── userController.ts # Example controller using gRPC client
│ ├── server.ts # Entry point for Server A
├── server-b/
│ ├── proto/
│ │ └── email.proto # Same proto file used in Server A
│ └── emailService.ts # Implementation of EmailService
├── package.json




---

## 🛠️ Technologies Used

- **Node.js**
- **TypeScript**
- **gRPC (`@grpc/grpc-js`, `@grpc/proto-loader`)**
- **ts-node** for development

---


cd server-b
npx ts-node emailService.ts
