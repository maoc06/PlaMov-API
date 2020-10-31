const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const {
    logErrors,
    wrapErrors,
    errorHandler,
} = require('./utils/middleware/errorHandlers');

const notFound = require('./utils/middleware/notFoundHandler');

// Middleware -> body parser
app.use(express.json());

moviesApi(app);

// Catch 404
app.use(notFound);

// Middlewares de error
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
});