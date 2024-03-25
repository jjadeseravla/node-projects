"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
// const router = express.Router();
// or with ts do it like front end:
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'added todo', todo: newTodo, todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => {
        return todoItem.id === tid;
    });
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ message: 'updated todos', todos: todos });
    }
    res.status(404).json({ message: 'could not find valid id' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    // Filter out the todo with the specified id
    todos = todos.filter((todoItem) => {
        return todoItem.id !== tid;
    });
    // Send response with updated todos
    res.status(200).json({ message: 'deleted todo', todos: todos });
});
// module.exports = router;
//in ts:
exports.default = router;
