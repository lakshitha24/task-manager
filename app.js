const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const port = 3000;
const connectDB = require('./db/connection');
require('dotenv').config();

// middleware
app.use(express.static('./public'))
app.use(express.json());


// routes
app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`server is listening on port ${port}!`));
    } catch (err) {
        console.log(err)
    }
}
start();
