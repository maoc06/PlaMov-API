# PlaMov-API
✏️ 
**This is a small project to learn how to build an API with Node.js and Express, making a connection with MondoDB Atlas.**

I decided not to use [Mongoose](https://mongoosejs.com/) to understand how it does manual configuration.

## Installation

- Clone the repo: `git clone https://github.com/maoc06/PlaMov-API.git`
- Install packages: `yarn install` or `npm install`
- Create the .env file and put in the MongoDB configuration. Look at the [.env.example](https://github.com/maoc06/PlaMov-API/blob/master/.env.example) file to use it as a guide

## Usage

In development environments use the `npm run dev` command.

### Movie model

```json
{
    "title": "MOVIE_TITLE_HERE",
    "year": MOVIE_RELEASE_YEAR_HERE,
    "cover": "MOVIE_POSTER_URL_HERE",
    "description": "MOVIE_DESCRIPTION_HERE (maximum of 300 characters)",
    "duration": DURATION_IN_MINUTES,
    "contentRating": "MOVIE_CONTENT_RATING_HERE",
    "source": "MOVIE_SOURCE_HERE",
    "tags": [
        "TAG_1",
        "TAG_2",
        "TAG_3",
        "TAG_N",
    ]
}
```

---
### Get all movies
#### HTTP verb: GET

To retrieve the list of all the movies use the endpoint: `/api/movies`

---

### Get a movie
#### HTTP verb: GET

to retrieve a single movie use the endpoint: `/api/movies/movieId`

---

### Save a movie
#### HTTP verb: POST

to save a movie use the endpoint: `/api/movies` and in the body of the request, send a Movie type object in json format.

---

### Update a movie
#### HTTP verb: PUT

to update a movie use the endpoint: `/api/movies/movieId` and in the body of the request, send a field you want to update in json format.

---

### Delete a movie
#### HTTP verb: DELETE

to delete a movie use the endpoint: `/api/movies/movieId`

---
