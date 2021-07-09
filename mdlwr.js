exports.reqTime = function (req,res,next){
    req.requestTime = Date.now();
    next();
}

exports.loger = function (req,res,next)  {
    console.log(`req time  ${req.requestTime}`);
    next();
}