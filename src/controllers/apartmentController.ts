import { Request, Response } from "express";
import Apartment from "../models/apartment";

export const getAllApartments = async (req: Request, res: Response) => {
  try {
    //const { search } = req.query;
    const query: any = {};

    // if (search) {
    //   query.$or = [
    //     { unit_name: { $regex: search, $options: 'i' } },
    //     { unit_number: { $regex: search, $options: 'i' } },
    //     { project: { $regex: search, $options: 'i' } },
    //   ];
    // }

    const apartments = await Apartment.find(query);
    res.json(apartments);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getApartmentById = async (req: Request, res: Response) => {
  //getApartmentById
  try {
    const id = req.params.id;
    const apartment = await Apartment.findById(req.params.id);
    res.json(apartment);
  } catch (err) {
    res.status(404).json({ error: "Not found" });
  }
};

export const createApartment = async (req: Request, res: Response) => {
  try {
    const apartment = new Apartment(req.body);
    await apartment.save();
    res.status(201).json(apartment);
  } catch (err) {
    res.status(400).json({ error: "Invalid data", details: err });
  }
};
