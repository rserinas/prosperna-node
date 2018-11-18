const express = require('express');
const app = express();
const mysql = require('sync-mysql');
const notificationRoutes = require('./api/routes/notifications.routes.js');

const connection = new mysql({
  host: '',
  user: '',
  password: '',
  database: ''
});

global.connection = connection;

/* Register all routes */
app.use('/notifications', notificationRoutes);

module.exports = app;