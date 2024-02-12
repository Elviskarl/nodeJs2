const taskModel = require('../Model/Tasks');

async function getAllTasks(req,res){
  try{
    const task = await taskModel.find({});
    if(task){
      return res.status(200).json({task});     
    }   
    
    return res.status(404).json({message: `There are no Tasks ata the moment.`});
  }catch(err){
    res.status(500).json({
      ['ERROR-Name']: err.name,
      ['Error-Message']: err.message 
    })
  }
}
async function getTasks(req,res){
  try{
    const {id: taskId} = req.params;
    const task = await taskModel.findOne({_id: taskId});

    if(task){
      return res.status(200).json({task});
    }
    return res.status(404).json({message: `There is no task with id: ${taskId}.`});
  }catch(err){
    res.status(500).json({
      ['ERROR-Name']: err.name,
      ['Error-Message']: err.message 
    })
  }
}

async function createTask(req,res){
  try{
    const task = await taskModel.create(req.body);
    if(task){
      return res.status(200).json({task});
    }      
    return res.status(404).json({message: `Could not create the task`});
  }catch(err){
    res.status(500).json({
      ['ERROR-Name']: err.name,
      ['Error-Message']: err.message 
    })
  }
}

async function deleteTask(req,res){
  try{
    const {id: taskId} = req.params;
    const task = await taskModel.findOneAndDelete({_id: taskId});
    if(task){
      return res.status(200).json({task});
    }
    return res.status(404).json({message: `There is no task with id: ${taskId}.`});
  }catch(err){
    res.status(500).json({
     ['ERROR-Name']: err.name,
    ['Error-Message']: err.message 
  })
  }
  res.send('Deleting Task');
}

async function updateTask(req,res){
  try{
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

  }catch(err){
    res.status(500).json({
      ['ERROR-Name']: err.name,
     ['Error-Message']: err.message 
   });
  }
}
module.exports = {getTasks,createTask,updateTask,deleteTask,getAllTasks}