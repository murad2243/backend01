const jwt = require("jsonwebtoken")
const blacklist = require("../routes/blacklist")


const authmiddleware = (req,res,next) =>{
    try{
          const token = req.headers.authorization?.split(" ")[1]

          if(blacklist.includes(token)){
            res.status(404).send("please login again")
          }
            if(!token){
                res.status(401).send("Token is not provided")
            }
            else{
                const decoded = jwt.verify(token,"secretpass")
                if(!decoded){
                    res.send("you are not autherized")
                }
                else{
                    req.userId = decoded.userId;
                    console.log(decoded);
                    next()
                }
            }

    }
    catch(err){
        console.log(err);
    }
}

module.exports = authmiddleware