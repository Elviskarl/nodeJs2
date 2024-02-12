function asyncWrapper(callbackFn){
  return async function(req,res,next){
    try{
      await callbackFn(req,res,next)
    }catch(err){
      next(err)
    }
  }
}

module.exports = asyncWrapper;