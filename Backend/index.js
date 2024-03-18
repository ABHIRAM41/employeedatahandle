import express from 'express';
import Login from './routers/Login.js'
import EmployeeDetails from './routers/EmployeeDetails.js'
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send("hi");
})

app.use('/api/login',Login);
app.use('/api/employeeDetails',EmployeeDetails);
app.listen('5000',()=>{
    console.log("listening on port http://localhost:5000");
})