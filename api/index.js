import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config.js';
import userRoute from './routers/userRoute.js'
import importRoute from './routers/importRoute.js'
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';


// const mongodbUrl = config.MONGODB_URL;
// const mongodbUrl = process.env.mongodbUrl;
// mongoose
//   .connect(mongodbUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .catch((error) => console.log(error.reason));

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

//////////
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(bodyParser.json());
app.use(cors());
app.use('/api/users', userRoute);
app.use('/api/import', importRoute);



const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});



app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});