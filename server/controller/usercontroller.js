const userData = require("../model/usermodel");

const db = require("../config/db");

module.exports.createUser = (req, res, next) => {
 

  const {email,name,phone}=req.body
 
  userData.findOne({email:email}).then(user=>{
     
    if(user){
        res.send("email already there ")       
    }else{
      var user = new userData({
        email,
        name,
        phone
      });
  
    user.save((err, user) => {
    if (err) return res.status(500)
      .send(err);
            return res.status(200).json(user);
     });
        }
      }).catch((error)=>{
      res.send(error)
    })
  }
module.exports.showUser = (req, res) => {
  const list = req.body;
  res.send(list);
};

module.exports.userUpdate = (req, res,next) => {
  
  if(!req.body.email || !req.body.name || !req.body.phone)
      {
        res.status(400).send({message:"Need to fill the required data"})
      }
  
      userData.findByIdAndUpdate(req.params.id,{email:req.body.email,name:req.body.name,phone:req.body.phone},{new:true})
  
      .then((userData) => {
        if (!userData) {
          return res
          .status(404)
          .send({
            message: "no user found",
          });
        }
        res
        .status(200)
        .send(userData);
      }).catch((erro)=>{
        res
        .send(error)
      })
    }

module.exports.userDelete=(req,res,next)=>{
  userData.findByIdAndDelete(req.params.id)
   .then((user)=>{
     if(!user)
     {
     res
     .status(400)
     .send("Message Not found")
     }
  res
  .status(200)
  .send("Deleted Succesfully")
    })
};
