const mongoose = require('mongoose');

const dotenv = require('dotenv');

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  });
  
dotenv.config({ path: './config.env' });

const app = require('./app');

const dbC = process.env.DATABASE_CLOUD; 
const dbL = process.env.DATABASE_LOCAL; 
const db = dbL;
mongoose.connect(db).then(()=>console.log(`${db} \nDB connect succesfully!`));

const port = process.env.PORT || 8000;
// const port = 51321;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  });
  