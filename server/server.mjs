import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import the cors middleware

dotenv.config();

import { connectDB } from './db/postgresConnection.mjs';
import usersRouter from './routes/index.mjs';

const app = express();

const startServer = async () => {
    try {
        const message = await connectDB();
        console.log(message);

        // Use cors middleware to enable CORS
        app.use(cors());

        app.use(express.json());

        app.use(
            '/api/v1/planpro',
            usersRouter
        );

        const PORT = process.env.PORT || 1000;

        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });

    } catch (error) {
        console.error('Failed to connect to the server or database', error);
    }
};

startServer();