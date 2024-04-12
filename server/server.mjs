import express from 'express';
import dotenv from 'dotenv'

dotenv.config()

import { connectDB } from './db/postgresConnection.mjs';
import usersRouter from './routes/index.mjs'

const app = express();

const startServer = async () => {
    try {
        const message = await connectDB()
        console.log(message);

        app.use(express.json());

        app.use(
            '/api/v1/planpro',
            usersRouter
        );

        const PORT = process.env.PORT;

        app.listen(PORT, () => {
            console.log('Server is listening on port 1000')
        });

    } catch (error) {
        console.error('Failed to connect to the server or database', error);
    }
}

startServer()
//istrinti