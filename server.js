const mongoose = require('mongoose');

const dotenv = require('dotenv');

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  });
  
dotenv.config({ path: './config.env' });

const app = require('./app');

// const dbC = process.env.DATABASE_CLOUD; 
// const dbL = process.env.DATABASE_LOCAL; 
// const db = dbL;
// mongoose.connect(db).then(()=>console.log(`${db} \nDB connect succesfully!`));



const username = encodeURIComponent("nikhil9");
const password = encodeURIComponent("Nikhil@123");

let uri =
	`mongodb+srv://${username}:${password}@cluster0.32rilsf.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(
	uri,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		err && console.error(err);
		console.log("Successfully connected to MongoDB: compilerdb");
	}
);




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
  
