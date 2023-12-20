import {Router} from 'express';

import {Todo} from '../models/todo'

const todos:Todo[] = [];

const router = Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
    const newTodo:Todo ={
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json({success:true})
})

router.delete('/deleteTodo',(req,res,next)=>{
    const idToDelete = req.query.id;
    const getTodoForDelete = todos.find((obj)=>{
        return obj.id == idToDelete;
    })!
    const getIndex = todos.indexOf(getTodoForDelete);
    todos.splice(getIndex,1);
    res.status(200).json({success:true})
})

export default router;