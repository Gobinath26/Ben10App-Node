import express from "express";
const router = express.Router();
import {
  getAllAliens,
  createAliens,
  deleteAlienById,
  getAlienById,
  updateAlienById,
} from "../helper.js";
//import { auth } from "../middleware/auth.js";
//-------------------Aliens Api's---------------------------------
//-------------------Get all Aliens:localhost:4000/aliens-----------------------
router.get("/", async function (request, response) {
  //db.aliens.find({})
  const aliens = await getAllAliens();
  response.send(aliens);
});
//-------------------Get alien by id:localhost:4000/aliens/id-----------------------
router.get("/:id", async function (request, response) {
  console.log(request.params);
  //filter/find
  //db.aliens.findOne({id:"102"})
  const { id } = request.params;
  //const alien = aliens.find((aln) => aln.id === id);
  const alien = await getAlienById(id);
  console.log(alien);
  alien
    ? response.send(alien)
    : response.status(404).send({ message: "No such alien found" });
});
//-------------------Delete alien by id:localhost:4000/aliens/id-----------------------
router.delete("/:id", async function (request, response) {
  console.log(request.params);
  //filter/find
  //db.aliens.deleteOne({id:"102"})
  const { id } = request.params;
  //const alien = aliens.find((aln) => aln.id === id);
  const result = await deleteAlienById(id);
  response.send(result);
});
//-------------------Update(Edit)(put) alien by id:localhost:4000/aliens/id-----------------------
router.put("/:id", async function (request, response) {
  console.log(request.params);
  //db.aliens.updateOne({id:"102"},{$set:updateData})
  const { id } = request.params;
  const updateData = request.body;
  const result = await updateAlienById(id, updateData);
  response.send(result);
});
//-----------------Post(create) aliens-----------------------------
router.post("/", async function (request, response) {
  //db.aliens.insertMany(data)
  const data = request.body;
  console.log(data);
  const result = await createAliens(data);
  response.send(result);
});

export const aliensRouter = router;
