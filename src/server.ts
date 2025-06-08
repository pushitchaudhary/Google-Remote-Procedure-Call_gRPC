
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import path from 'path'

const PROTO_PATH = path.join(__dirname, './proto/greeter.proto')

const packateDefination = protoLoader.loadSync(PROTO_PATH);
const grpcObj = grpc.loadPackageDefinition(packateDefination) as any;
const greeterPackage = grpcObj.greeter;


function sayHello (
    call : grpc.ServerUnaryCall<any, any>,
    callback : grpc.sendUnaryData<any>
){
    const name = call.request.name;
    callback(null, {
        message : `Hello ${name}`
    });
}

function getUser(
    call : grpc.ServerUnaryCall<any, any>,
    callback : grpc.sendUnaryData<any>
){
    const userId = call.request.id;
    const user = {
        id : userId,
        name : 'pushit',
        email : 'pushit@me.com'
    }

    callback (null, user)
}


const server = new grpc.Server();
server.addService(greeterPackage.Greeter.service, { SayHello : sayHello})
server.addService(greeterPackage.UserService.service, {GetUser : getUser})

const PORT = '0.0.0.0:50051';

server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), ()=>{
    console.log(`✅ gRPC Server is running at ${PORT}`);
    server.start();
})