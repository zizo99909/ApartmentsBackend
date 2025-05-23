import express, { Request, Response } from "express";
import {
  getAllApartments,
  getApartmentById,
  createApartment,
} from "../controllers/apartmentController";

const router = express.Router();

router.get("/", getAllApartments);
router.get("/:id", (req, res, next) => {
  Promise.resolve(getApartmentById(req, res)).catch(next);
});
router.post("/", createApartment);

export default router;
