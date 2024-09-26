import express from 'express';
// const express = require('express');      // this statement is similar as the above one
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

// 1st Route 
app.get('/', (req, res) => res.send('Hello from Homepage'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));