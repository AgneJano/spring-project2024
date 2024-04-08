import express from "express";
import { connectDB } from "./db/postgresConnection.mjs";


const app = express();

const startServer = async () => {
    try {
        const message = await connectDB();
        console.log(message);

        const PORT = 1000;

        app.use(express.json());
        
        // app.use('/api/v1/project');

        app.listen(PORT, () => {
            console.log('Server is listening on PORT 1000.')
        })
    
    } catch (error) {
        console.error('Failed to connect to the server or database.', error)
    }
}

startServer();
  