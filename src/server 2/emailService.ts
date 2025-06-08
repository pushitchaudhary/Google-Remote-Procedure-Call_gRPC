
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import path from 'path'
import { sendEmailHandler } from './controller_server_2/emailController'


const PORTO_PATH = path.resolve(__dirname, '../proto/email.proto')

const packageDef = protoLoader.loadSync(PORTO_PATH)
const grpcObj = grpc.loadPackageDefinition(packageDef) as any;
const emailPackage = grpcObj.email;


const server = new grpc.Server();

server.addService(emailPackage.Email.service, {
    SendEmail: sendEmailHandler
})


server.bindAsync('0.0.0.0:50052', grpc.ServerCredentials.createInsecure(),()=>{
    console.log('📡 gRPC Email Server running on port 50052');
    server.start();
})