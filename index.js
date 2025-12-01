import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './src/DbConfig/ConnectDB.js';



const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());



connectDB();

app.get('/', (req, res) => {
    res.send('Authorization_Authentication_RBAC_Task-11 is running');
});




app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});