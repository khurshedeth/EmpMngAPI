import connectMongo from "../../../database/conn";
import {
  getUser,
  postUser,
  putUser,
  deleteUser,
} from "../../../database/Controller";

export default async function handler(req, res) {
 const {method}=req

 switch(method){
    case "Get":
 }
}