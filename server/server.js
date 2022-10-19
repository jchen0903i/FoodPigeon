const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const restaurantsRouter = require('./api.js');

mongoose.connect(
  'mongodb+srv://jchen0903:kingkong1@cluster0.rmjcb7j.mongodb.net/Restaurants?retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', restaurantsRouter);

app.use((req, res) => res.sendStatus(404));
// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
