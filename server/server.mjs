import express from 'express';
import dotenv from 'dotenv'

dotenv.config()

import { connectDB } from './db/postgresConnection.mjs';
const app = express();

const startServer = async () => {
    try {
        const message = await connectDB()
        console.log(message);

        const PORT = process.env.PORT;
        app.use(express.json());
        app.listen(PORT, () => {
            console.log('Server is listening on port 3000')
        });

    } catch (error) {
        console.error('Failed to connect to the server or database', error);
    }
}

startServer()
