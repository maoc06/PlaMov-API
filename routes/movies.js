const express = require('express');
const MovieService = require('../services/movies');

const {
    moviesIdSchema,
    createMovieSchema,
    updateMovieSchema,
} = require('../utils/schemas/movies');

const validationHandlers = require('../utils/middleware/validationHandlers');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesServie = new MovieService();

    router.get('/', async function(req, res, next) {
        const { tags } = req.query;
        try {
            const movies = await moviesServie.getMovies({ tags });

            res.status(200).json({
                data: movies,
                message: 'movies listed',
            });
        } catch (err) {
            next(err);
        }
    });

    router.get(
        '/:movieId',
        validationHandlers({ movieId: moviesIdSchema }, 'params'),
        async function(req, res, next) {
            const { movieId } = req.params;
            try {
                const movies = await moviesServie.getMovie({ movieId });

                res.status(200).json({
                    data: movies,
                    message: 'movie retrieved',
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.post('/', validationHandlers(createMovieSchema), async function(
        req,
        res,
        next
    ) {
        const { body: movie } = req;
        try {
            const createdMovieId = await moviesServie.saveMovie({ movie });

            res.status(201).json({
                data: createdMovieId,
                message: 'movies created',
            });
        } catch (err) {
            next(err);
        }
    });

    router.put(
        '/:movieId',
        validationHandlers({ movieId: moviesIdSchema }, 'params'),
        validationHandlers(updateMovieSchema),
        async function(req, res, next) {
            const { movieId } = req.params;
            const { body: movie } = req;
            try {
                const updatedMovieId = await moviesServie.updateMovie({
                    movieId,
                    movie,
                });

                res.status(200).json({
                    data: updatedMovieId,
                    message: 'movies updated',
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.delete(
        '/:movieId',
        validationHandlers({ movieId: moviesIdSchema }, 'params'),
        async function(req, res, next) {
            const { movieId } = req.params;
            try {
                const deletedMovieId = await moviesServie.deleteMovie({ movieId });

                res.status(200).json({
                    data: deletedMovieId,
                    message: 'movies deleted',
                });
            } catch (err) {
                next(err);
            }
        }
    );
}

module.exports = moviesApi;