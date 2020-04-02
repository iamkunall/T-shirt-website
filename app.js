require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth');

//Database connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('DB CONNECTED');
  });

//Middle wares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use('/api', authRoutes);

//port
const port = process.env.PORT;

app.listen(port, () => console.log(`APP is running at ${port}`));
