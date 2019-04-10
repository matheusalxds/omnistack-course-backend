const express = require('express');
const multer = require('multer');

const multerConfig = require('./config/multer');

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

const routes = express.Router();

routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);
/**
 * The front end needs to send an object with a field
 * called 'file' that actually has the file
 */
routes.post(
  '/boxes/:id/files',
  multer(multerConfig).single('file'),
  FileController.store,
);

module.exports = routes;
