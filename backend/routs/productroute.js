
import express from "express"
import getallproduct from "../controller/productcontroller.js";

const router=express.Router();
 
router.route("/products").get(getallproduct)

export default router