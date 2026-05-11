var express = require('express');
var router = express.Router();

const movies = [
    "Shuek",
    "La 2 de shuek",
    "El hombre Araña",
    "El Risas",
    "La de Adam Sandler",
    "La guerra estelar",
    "Niggas",
    "2 Niggas",
    "Niggas for ever",
    "Los Avengers"
];

router.get('/', function(req, res, next) {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    res.json({
        pelicula: randomMovie
    });
});

module.exports = router;