const taskModel = require('../Model/Tasks');
const asyncWrapper = require('../middle-ware/async');

async function getAllTasks(req,res){
    const task = await taskModel.find({});
    if(task){
      return res.status(200).json({task});     
    }       
    return res.status(404).json({message: `There are no Tasks at the moment.`});
  // }catch(err){
  //   res.status(500).json({
  //     ['ERROR-Name']: err.name,
  //     ['Error-Message']: err.message 
  //   })
  // }
}
async function getTasks(req,res){
    const {id: taskId} = req.params;
    const task = await taskModel.findOne({_id: taskId});
    if(task){
      return res.status(200).json({task});
    }
    return res.status(404).json({message: `There is no task with id: ${taskId}.`});
}

async function createTask(req,res){
    const task = await taskModel.create(req.body);
    if(task){
      return res.status(200).json({task});
    }      
    return res.status(404).json({message: `Could not create the task`});
}

async function deleteTask(req,res){
    const {id: taskId} = req.params;
    const task = await taskModel.findOneAndDelete({_id: taskId});
    if(task){
      return res.status(200).json({task});
    }
    return res.status(404).json({message: `There is no task with id: ${taskId}.`});
}

async function updateTask(req,res){
    const {id: taskId} = req.params;
    const task = await taskModel.findOneAndUpdate({
      _id: taskId
    },req.body,{
      new: true,
      runValidators: true
    });
    if(task){
      return res.status(200).json({task});
    }
    return res.status(404).json({message: `There is no task with id: ${taskId}.`});
}
module.exports = {
  getTasks: asyncWrapper(getTasks),
  createTask: asyncWrapper(createTask),
  updateTask: asyncWrapper(updateTask),
  deleteTask: asyncWrapper(deleteTask),
  getAllTasks: asyncWrapper(getAllTasks)
}