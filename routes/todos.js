const { Router } = require("express");
const Todo = require("../model/Todo");
const router = Router();

router.get('/', async(req, res) => {
    const todos = await Todo.find({});

    res.render('index', {
        title: 'TodoList',
        isIndex: true,
        todos
    })
});

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'CreateTodo',
        isCreate: true
    })
});

router.post('/create', async(req, res) => {
    const todo = new Todo({
        title: req.body.title
    });
    await todo.save();
    res.redirect('/');
});

router.post('/complete', async(req, res) => {
    const todo = await Todo.findById(req.body.id);
    todo.completed = !todo.completed;
    await todo.save();
    res.redirect('/');
});

module.exports = router;