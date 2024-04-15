import express from 'express';
import dotenv from 'dotenv';
import passport from './strategies/auth.mjs'
import { connectDB } from './db/postgresConnection.mjs';
import usersRouter from './routes/index.mjs';

dotenv.config()

const app = express();

const startServer = async () => {
    try {
        const message = await connectDB()
        console.log(message);

        app.use(express.json()); //must be before the route !!
        app.use(passport.initialize());

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