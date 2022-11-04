const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require("cors");

const facultyRouter = require('./routes/facultyRoutes');
const studentRouter = require('./routes/studentRoutes');
const classRouter = require('./routes/classRoutes');
const userRouter = require('./routes/userRoutes');
const courseRouter = require('./routes/courseRoutes');
const branchRouter = require('./routes/branchRoutes');
const subjectRouter = require('./routes/subjectRoutes');

const app = express(); 
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// app.use(cookieParser()); 


app.use('/api/faculty', facultyRouter);
app.use('/api/students', studentRouter);
app.use('/api/classes', classRouter);
app.use('/api/user', userRouter);
app.use('/api/courses', courseRouter);
app.use('/api/branches', branchRouter);
app.use('/api/subjects', subjectRouter);
module.exports = app;