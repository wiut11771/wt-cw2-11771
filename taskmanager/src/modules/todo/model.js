const { fetch , fetchAll } = require('../../lib/postgres')

const  ALL_TODO = `
    SELECT 
        *
    FROM
        todo
`
const ADD_TODO = `
    INSERT INTO 
        todo(todo_name)
    VALUES($1)
    RETURNING *
`
const DELETE_TODO = `
DELETE FROM todo
WHERE todo_id = $1
`

const UPDATE_TODO = `
    UPDATE todo SET todo_name = $1 WHERE todo_id = $2
`
const FIND_BY_ID = `
SELECT * FROM todo WHERE todo_id IN ($1);

`
const todo = () => fetchAll(ALL_TODO)
const addtodo = (todoname) => fetch(ADD_TODO , todoname)
const deleteTodo = (id) => fetch(DELETE_TODO, id)
const updateTodo = (todoname , id) => fetch(UPDATE_TODO , todoname, id )
const findid = (id) => fetch(FIND_BY_ID , id)

module.exports = {
    todo,
    addtodo,
    deleteTodo,
    updateTodo,
    findid
}

