const { CustomAPIError } = require('../errors/custom-error');

const errorHandlerMiddleware = (err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.status).json({msg:err.message})
    }
    return res.status(500).json({msg:`some thing went wrong`});
}
module.exports = errorHandlerMiddleware;