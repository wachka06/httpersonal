const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = require('./routes/api');

app.use('/api/status_code', apiRouter);

// catch-all route handler for any requests to an unknown route
// app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

if (process.env.NODE_ENV === 'production') {
    app.use('/build', express.static(path.join(__dirname, '../build')));
    // app.get('/', (req, res) => {
    //     res.status(200).sendFile(path.join(__dirname, '../index.html'));
    // })
}
  
module.exports = app;