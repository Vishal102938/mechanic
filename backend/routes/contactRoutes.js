import express from "express";
import { createContact, getAllContacts } from "../controllers/contactController.js";
import adminAuth from "../middleware/adminAuth.js";

const contactRouter = express.Router();

contactRouter.post("/create-contact", createContact);

contactRouter.get("/all", adminAuth, getAllContacts);

export default contactRouter;