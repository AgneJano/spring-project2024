import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add timestamp format
    winston.format.json() // JSON format for log entries
  ),
  transports:[
    new winston.transports.Console({ level: 'info' }), 
    new winston.transports.File({ 
      filename: 'logfile.log', 
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add timestamp format
        winston.format.json() // JSON format for log entries
      )
    })
  ]
});

export default logger;
