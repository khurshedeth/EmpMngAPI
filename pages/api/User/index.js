import connectMongo from "../../../database/conn";
import {
  getUser,
  postUser,
  putUser,
  deleteUser,
} from "../../../database/Controller";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "error in the component" })
  );

  // To write the check with the Http request
  const method = req;

  switch (method) {
    case "GET":
      getUser(req, res);
      break;
    case "POST":
      postUser(req, res);
      break;
    case "PUT":
      putUser(req, res);
      break;
    case "DELETE":
      deleteUser(req, res);
      break;

    default:
      res.setHeader("ALLOW", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
