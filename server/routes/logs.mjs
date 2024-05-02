import express from "express";
import dotenv from "dotenv";
import fs from 'fs';


dotenv.config();

const router = express.Router();

router.get('/', (req, res) => {
    // Read logs from the log file
    fs.readFile('logfile.log', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error reading logs');
        return;
      }
      // Send logs to the client
      res.send(data);
    });
  });
export default router;
  