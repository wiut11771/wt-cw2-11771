const express = require('express')
const router = express.Router()

const Todo = require('./todo/todo')

router
    .get('/', Todo.GET)
    .post('/post', Todo.POST)
    .post('/delete/:id', Todo.DELETE)
    .get('/edit/:id' , Todo.UPDATE_GET)
    .post('/update/:id' , Todo.UPDATE)

module.exports = router