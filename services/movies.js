// const { moviesMock } = require('../utils/mocks/movies');
const MongoLib = require('../lib/mongo');

class MoviesService {
    constructor() {
        this.collection = 'movies';
        this.mongoDB = new MongoLib();
    }

    async getMovies({ tags }) {
        const query = tags && { tags: { $in: tags } };
        const movies = await Promise.resolve(
            this.mongoDB.getAll(this.collection, query)
        );
        return movies || [];
    }

    async getMovie({ movieId }) {
        const movie = await Promise.resolve(
            this.mongoDB.get(this.collection, movieId)
        );
        return movie || {};
    }

    async saveMovie({ movie }) {
        const savedMovieId = await Promise.resolve(
            this.mongoDB.create(this.collection, movie)
        );
        return savedMovieId;
    }

    async updateMovie({ movieId, movie } = {}) {
        const updatedMovieId = await Promise.resolve(
            this.mongoDB.update(this.collection, movieId, movie)
        );
        return updatedMovieId;
    }

    async deleteMovie({ movieId }) {
        const deletedMovieId = await Promise.resolve(
            this.mongoDB.delete(this.collection, movieId)
        );
        return deletedMovieId;
    }
}

module.exports = MoviesService;