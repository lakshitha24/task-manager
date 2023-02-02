const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const port = process.env.PORT || 3000;
const connectDB = require('./db/connection');
require('dotenv').config();
const notFound = require('./middeleware/not-found');
const errorHandlerMiddleware = require('./middeleware/error-handler');

// middleware
app.use(express.static('./public'))
app.use(express.json());


// routes
app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`server is listening on port ${port}!`));
    } catch (err) {
        console.log(err)
    }
}
start();
