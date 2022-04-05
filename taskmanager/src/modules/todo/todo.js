const model = require('./model')
module.exports = {
    GET: async(req, res) => {
        try {

            const allTodo = await model.todo()

            res.render('index', {allTodo:allTodo})
        } catch(err) {
            res.sendStatus(500)
        }
    },
    POST: async(req, res)=>{
        try {
            const {todoname} = req.body

        const post = await model.addtodo(todoname)

        res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    },
    DELETE: async(req , res)=>{
        try {
            const {id} = req.params

        const deleteTodo = await model.deleteTodo(id)
        
        res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE: async(req, res)=>{
    try {
        const {id} = req.params

        const {todoname} = req.body

        const updateTodo = await model.updateTodo(todoname , id)

        console.log(updateTodo);

        res.redirect('/')
    } catch (error) {
        console.log(error);
    }

    },
    UPDATE_GET:async(req , res)=>{
        const {id} = req.params

        const  findId = await model.findid(id )

        res.render('edit.ejs' , {findId: findId})

    }
}