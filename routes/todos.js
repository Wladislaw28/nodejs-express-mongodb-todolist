const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'TodoList',
        isIndex: true
    })
});

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'CreateTodo',
        isCreate: true
    })
});

module.exports = router;