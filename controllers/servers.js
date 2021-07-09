let serv = [
    {id:"1" , name:"Sasha" , status:"working"},
    {id:"1" , name:"Luisa" , status:"walking"},
    {id:"1" , name:"Dasha" , status:"working"},
]

exports.getAll = function (req,res)  {
    res.status(200).json(serv);
}