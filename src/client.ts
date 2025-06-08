import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import path from 'path'

const PROTO_PATH = path.join(__dirname, './proto/greeter.proto')

const packageDef = protoLoader.loadSync(PROTO_PATH);
const grpcObj = grpc.loadPackageDefinition(packageDef) as any;
const greeterPackage = grpcObj.greeter;


const client = new greeterPackage.Greeter(
    'localhost:50051',
    grpc.credentials.createInsecure()
);


const userClient = new greeterPackage.UserService(
    'localhost:50051',
    grpc.credentials.createInsecure()
)

client.sayHello({name : "pushit"}, (err:any, response :any)=>{
    if(!err){
        console.log('✅ Response from server:', response.message);
    } else {
        console.error(err);
    }
})


userClient.GetUser({id:1},(err: any, response : any)=>{
    if(!err){
        console.log('✅ Response from server:', response);
    } else {
        console.error(err);
    }
})
