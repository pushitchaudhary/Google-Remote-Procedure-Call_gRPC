import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { UserRegister } from "./controller_server_1/userController";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/register-user', UserRegister)


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});