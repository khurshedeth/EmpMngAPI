//controller//

//For get Request //
import Users from "../model/user"
export async function getUser(req, res) {
  try {
    const user= await   Users.find({})
    if(!user)return res.status(404).jason({error:"Data not found"})
    res.status(200).json(Users);
  } catch(error){
    res.status(404).json({ error: "Error while fetching data" });
  }
}

//http://localhost:3000/api/hello/1

export async function getUser(req,res){
  try{
const {userId}=req.query
 if(userId){
  const user=Users.findById(userId)
  res.status(200).json(user)
 }
 res.status(404).json({error:"User not selected"})
  } catch(error){
    res.status(404).json({error:"Can not get the user"})
  }
}

// Post Request//
export async function postUser(req,res){
    try{
    const formData=req.body;
    if(!formData)return res.status(404).json({error:"Form Data not provided"});
    Users.create(formData,function(err,data){
        return res.status(200).json(data)
    })

    
    }catch(error){
        return res.status(404).json({error})
    }
}

// Put Request //
export async function putUser(req,res){
try{
const{userId}= req.query;
const formData=req.body;
if(userId && formData){
    const user=await Users.findByIdAndUpdate(userId,formData);
    res.status(200).json(user)
}
res.status(404).json({error:"user not selected"})
}catch(error){
    res.status(404).json({error:"error while updating the data"})
}
}

// delete Request to add with local hoast URL/ userID
 export async function deleteUser(req,res){
  try{
const {userId}=req.query
if(!userId){
  const user=Users.findByIdAndDelete(userId)
  return res.status(200).json({deleted:userId})
}
res.status(404).json({error:"user not found"})
  }catch(error){
res.status(404).json({error:"erro while deleting the user"})
  }
 }