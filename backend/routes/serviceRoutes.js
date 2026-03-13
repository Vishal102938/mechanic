import express from "express";
import { isAuth } from "../middleware/isAuth.js";
import { getStats ,getMyRequests ,getAllRequests, updateRequestStatus,createServiceRequest } from "../controllers/serviceController.js";
import adminAuth from "../middleware/adminAuth.js";

const serviceRouter = express.Router();

serviceRouter.post("/request", isAuth, createServiceRequest);

serviceRouter.get("/all", adminAuth, getAllRequests);
serviceRouter.patch("/update/:id", adminAuth, updateRequestStatus);
serviceRouter.get("/my-requests", isAuth, getMyRequests);
serviceRouter.get("/stats", adminAuth, getStats);


export default serviceRouter;