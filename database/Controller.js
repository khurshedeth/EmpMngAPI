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
// Post Request//
export async function postUser(req,res){
    try{
    const formData=req.body;
    if(!formData)return res.status(404).json({error:"Form Data not provided"});
    Users.create(formData,function(err,data){
        return res.status(200).jason(data)
    })

    
    }catch(error){
        return res.status(404).json({error})
    }
}