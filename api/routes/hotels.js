import express from 'express';
import HotelSchema from "../models/Hotel.js";  

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
    const newHotel = new HotelSchema(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;
