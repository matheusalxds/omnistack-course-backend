const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const MONGO_DB =
  'mongodb+srv://omnistack:omnistack@omnistack-8thgk.mongodb.net/omnistack?retryWrites=true';

mongoose.connect(MONGO_DB, {
  useNewUrlParser: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));
app.use(require('./routes'));

app.listen(3000, () => {
  console.log('Running on port: ', PORT);
});
