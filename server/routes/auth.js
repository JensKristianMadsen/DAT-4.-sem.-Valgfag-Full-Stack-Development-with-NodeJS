import express from "express";
import { login } from "../controllers/auth.js";
//Set up our router
const router = express.Router(); // This piece of code will allow Express to identify that these routes willall be these in separate files to keep us orgnized 

router.post("/login", login);// Here is not specified auth like in index.js app.post("/auth/register", upload.single("picture"), Because we are using authRoutes index.js app.use("/auth", authRoutes); //

export default router;