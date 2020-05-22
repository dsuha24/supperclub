const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//middleware
const recipesRoutes = require('./routes/recipes-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

//middleware for image upload
app.use('/uploads/images', express.static(path.join('uploads', 'images')));

//for deployment
// app.use(express.static(path.join('public')));

//middleware to add headers to the response, domain restrictions
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/recipes', recipesRoutes);
app.use('/api/users', usersRoutes);

//for deployment - all unhandled requests
// app.use((req, res, next) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// });

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

//error middleware function
app.use((error, req, res, next) => {
  if(req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if(res.headerSent) {
    return next(error);
  }
  // 500 status indicates error on the server
  res.status(error.code || 500);
  res.json({message: error.message || 'An unknown error occurred!'});
});

mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:0Q8PriUNdt6PVr60@cluster0-rsl6a.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch(err => {
    console.log(err);
  });