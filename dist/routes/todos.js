"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/postTodo', (req, res, next) => {
    const reqBody = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: reqBody.text
    };
    todos.push(newTodo);
    res.status(201).json({ success: true });
});
router.put('/putTodo/:id', (req, res, next) => {
    const reqParams = req.params;
    const reqBody = req.body;
    const idToEdit = reqParams.id;
    const getIndex = todos.findIndex((obj) => obj.id === idToEdit);
    if (getIndex != -1) {
        todos[getIndex] = { id: todos[getIndex].id, text: reqBody.text };
        return res.status(200).json({ success: true });
    }
    res.status(404).json({ success: false, getIndex });
});
router.delete('/deleteTodo/:id', (req, res, next) => {
    const reqParams = req.params;
    const idToDelete = reqParams.id;
    const getIndex = todos.findIndex((obj) => obj.id == idToDelete);
    if (getIndex != -1) {
        todos.splice(getIndex, 1);
        return res.status(200).json({ success: true });
    }
    res.status(400).json({ success: false, id: idToDelete });
});
exports.default = router;
