const express = require('express');
const router = express.Router();
const {getTasks,createTask,updateTask,deleteTask,getAllTasks} = require('../controller/tasks');

router.get('/home',getAllTasks);
router.get('/:id',getTasks);
router.post('/',createTask);
router.patch('/:id',updateTask);
router.delete('/:id',deleteTask);


module.exports = router;