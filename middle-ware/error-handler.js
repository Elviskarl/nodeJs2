function errorHandler(err,req,res,next){
  console.log(err);
  return res.status(err.status).json({
    ['ERROR-Name']: err.name,
    ['Error-Message']: err.message 
  });
}

module.exports = errorHandler;