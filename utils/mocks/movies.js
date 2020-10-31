const moviesMock = [{
        id: 'afe9c1c1-9b34-4e02-baad-ac0cb10b1b21',
        title: "Crimson Rivers 2: Angels of the Apocalypse (Rivières pourpres II - Les anges de l'apocalypse, Les)",
        year: 2009,
        cover: 'http://dummyimage.com/127x155.bmp/ff4444/ffffff',
        description: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
        duration: 1895,
        contentRating: 'G',
        source: 'https://tinypic.com/vestibulum/vestibulum/ante/ipsum.jsp',
        tags: ['Crime|Horror|Sci-Fi'],
    },
    {
        id: '20756c9b-309c-4c79-b159-bfea8e4cc2df',
        title: 'Illuminata',
        year: 2011,
        cover: 'http://dummyimage.com/151x121.jpg/dddddd/000000',
        description: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
        duration: 2056,
        contentRating: 'PG-13',
        source: 'http://4shared.com/blandit/non/interdum/in.jsp',
        tags: ['Drama|Romance', 'Documentary'],
    },
    {
        id: 'b483ffd6-6041-43b6-b3ac-ae08900bf75b',
        title: 'Ticking Clock',
        year: 1998,
        cover: 'http://dummyimage.com/154x192.bmp/5fa2dd/ffffff',
        description: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        duration: 2008,
        contentRating: 'R',
        source: 'https://prnewswire.com/dui/luctus.jpg',
        tags: [
            'Action|Crime|Thriller',
            'Drama',
            'Crime|Drama|Musical|Romance',
            'Action|Adventure|Crime|Horror|Thriller',
        ],
    },
    {
        id: '04498426-d05c-4c8b-a357-aa6e21f7ff04',
        title: 'Grand Isle',
        year: 2012,
        cover: 'http://dummyimage.com/108x209.png/5fa2dd/ffffff',
        description: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        duration: 1954,
        contentRating: 'PG-13',
        source: 'http://cam.ac.uk/sapien.aspx',
        tags: ['Documentary', 'Comedy|Fantasy', 'Drama', 'Drama', 'Horror'],
    },
    {
        id: '168a0985-27ad-4c4b-a3c5-8b0b61af1aaa',
        title: 'Dragon Fist (Long quan)',
        year: 2009,
        cover: 'http://dummyimage.com/167x137.png/ff4444/ffffff',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
        duration: 2010,
        contentRating: 'PG-13',
        source: 'http://jalbum.net/habitasse/platea/dictumst.aspx',
        tags: ['Drama', 'Musical', 'Sci-Fi', 'Crime|Drama|Thriller'],
    },
    {
        id: 'bc56cfe6-16e5-41e5-8c05-5695e1014dba',
        title: 'Full Body Massage',
        year: 2002,
        cover: 'http://dummyimage.com/231x154.jpg/ff4444/ffffff',
        description: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        duration: 1973,
        contentRating: 'PG',
        source: 'https://liveinternet.ru/eu/tincidunt/in/leo.aspx',
        tags: [
            'Comedy',
            'Drama|Fantasy|Horror|Mystery|Sci-Fi|Thriller',
            'Western',
            'Horror|Thriller',
        ],
    },
    {
        id: '70ebf1e3-5f61-4d74-b094-a572cff5a1a9',
        title: 'Robot Monster',
        year: 2005,
        cover: 'http://dummyimage.com/144x106.bmp/5fa2dd/ffffff',
        description: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        duration: 1921,
        contentRating: 'PG',
        source: 'http://photobucket.com/faucibus.jsp',
        tags: [
            'Drama|Mystery',
            'Comedy',
            'Adventure|Drama',
            'Adventure|Comedy|Musical',
        ],
    },
    {
        id: '7021ca8c-afe0-4d64-96d1-b0dbee4f7a5c',
        title: 'Decoding the Past: Secrets of the Koran',
        year: 2008,
        cover: 'http://dummyimage.com/248x129.png/cc0000/ffffff',
        description: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
        duration: 1937,
        contentRating: 'NC-17',
        source: 'http://fastcompany.com/sed/lacus/morbi/sem.aspx',
        tags: [
            'Comedy|Drama|Romance',
            'Comedy',
            'Horror|Thriller',
            'Horror|Mystery|Thriller',
        ],
    },
    {
        id: 'daf9a89d-fc83-48f4-8e13-57573f44d218',
        title: 'Deluge, The (Potop)',
        year: 2002,
        cover: 'http://dummyimage.com/244x247.bmp/ff4444/ffffff',
        description: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        duration: 1947,
        contentRating: 'R',
        source: 'http://bizjournals.com/in/hac/habitasse/platea/dictumst/maecenas/ut.js',
        tags: ['Thriller'],
    },
    {
        id: '7aebf529-ce56-4496-81c1-2d936358511c',
        title: 'Hondo',
        year: 2009,
        cover: 'http://dummyimage.com/179x247.bmp/5fa2dd/ffffff',
        description: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        duration: 2011,
        contentRating: 'G',
        source: 'https://tripod.com/ipsum/primis/in/faucibus/orci.aspx',
        tags: [
            'Action|Drama|War',
            'Comedy',
            'Drama|Romance',
            'Documentary',
            'Drama|Thriller',
        ],
    },
];

function filteredMoviesMock(tag) {
    return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MoviesServiceMock {
    async getMovies() {
        return Promise.resolve(moviesMock);
    }

    async createMovie() {
        return Promise.resolve(moviesMock[0]);
    }
}

module.exports = {
    moviesMock,
    filteredMoviesMock,
    MoviesServiceMock,
};