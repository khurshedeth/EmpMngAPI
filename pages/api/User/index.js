import connectMongo from "../../../database/conn";
import { getUser,postUser } from "../../../database/Controller";

export default async function handler(req, res) {
  connectMongo().catch(()=>res.status(405).json({error:"error in the component"}))

  // to write the check the Http request
  const method = req;

  switch (method) {
    case "GET":
      getUser(req,res)
      break;
    case "POST":
      postUser(req,res)
      break;
    case "PUT":
      res.status(200).json({ method, name: "PUT Request" });
      break;
    case "DELETE":
      res.status(200).json({ method, name: "DELETE Request" });
      break;

      default:res.setHeader("ALLOW",["GET","POST","PUT","DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`)
  }
  
}
