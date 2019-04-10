const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const server = require('http').Server(app);
const io = require('socket.io')(server);

const MONGO_DB =
  'mongodb+srv://omnistack:omnistack@omnistack-8thgk.mongodb.net/omnistack?retryWrites=true';

mongoose.connect(MONGO_DB, {
  useNewUrlParser: true,
});

app.use(cors());

io.on('connection', socket => {
  socket.on('connectRoom', box => {
    socket.join(box);
  });
});

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));
app.use(require('./routes'));

server.listen(PORT, () => {
  console.log('Running on port: ', PORT);
});
