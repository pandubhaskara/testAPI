const express = require('express')
const router = express.Router()
const movies = require('../controllers/movies')

router.get('/movies', movies.getMovies)

module.exports = router