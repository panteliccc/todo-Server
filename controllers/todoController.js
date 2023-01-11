const todoModel = require('../models/todoModel');
const TodoModel = require('../models/todoModel')

module.exports.getTodo = async (req,res)=>{
    const toDo = await TodoModel.find();
    res.send(toDo);
}
module.exports.saveToDo = async (req,res)=>{

    const { text } = req.body;
    const active = false;
    TodoModel
    .create({ text ,active})
    .then((data)=>{
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
}


module.exports.updateToDo = async (req,res)=>{
    const { _id, text ,active} = req.body;

    todoModel
        .findByIdAndUpdate(_id,{text,active})
        .then(() => res.send("Updated Successfully"))
        .catch((err) => console.log(err))
}

module.exports.deleteTodo = async (req,res)=>{
    const { _id,text} = req.body;

    todoModel
        .findByIdAndDelete(_id)
        .then(()=> res.send("Deleted Successfully"))
        .catch((err)=> console.log(err))
}