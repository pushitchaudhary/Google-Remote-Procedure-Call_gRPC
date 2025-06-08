
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import path from 'path'

const PORTO_PATH = path.resolve(__dirname, '../../proto/email.proto')

const packageDef = protoLoader.loadSync(PORTO_PATH)
const grpcObj = grpc.loadPackageDefinition(packageDef) as any;
const emailPackage = grpcObj.email


const client = new emailPackage.Email(
    'localhost:50052',
    grpc.credentials.createInsecure()
)

export default client