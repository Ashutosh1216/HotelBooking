

/*
 * Name: Hotel Room Booking System ~ Backed
 * Description: Build an Hotel Room Booking System using node.js, express.js application from the scratch
 * Author: Ashutosh Tiwary
 * Last Modified: 26/02/2023
 * Version: v0.0.1
 *
 */

// imports modules & dependencies
const app = require('./src/app');
const logger = require('./src/middleware/winston.logger');

// app listens to .env defined port
app.listen(process.env.APP_PORT, () => {
  logger.info(`App server running on: ${process.env.APP_BASE_URL}`);
});
