import express, { Request, Response, NextFunction } from 'express';
import { CreateVandorInput } from '../dto';
import { Vandor } from '../models';
import { GeneratePassword, GenerateSalt } from '../utility';


export const CreateVandor = async (req: Request, res: Response, next: NextFunction) => {
    const { name, address, pincode, foodType, email, password, ownerName, phone } = <CreateVandorInput>req.body;

    const existingVandor = await Vandor.findOne({ email: email });
    if (existingVandor != null) {
        return res.json({ 'message': 'A vandor is already exist with same email' });
    }

    const salt = await GenerateSalt();
    const userPassword = await GeneratePassword(password, salt);

    const createVandor = await Vandor.create({
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: userPassword,
        salt: salt,
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        converImages: []
    })

    res.json(createVandor);
}

export const GetVandors = async (req: Request, res: Response, next: NextFunction) => {
    const vandors = await Vandor.find();

    if (vandors != null) {
        return res.json(vandors);
    }
    return res.json({ 'message': 'no vandors available yet' });
}

export const GetVandorByID = async (req: Request, res: Response, next: NextFunction) => {
    const vandorID = req.params.id;
    try {
        const vandor = await Vandor.findById(vandorID);
        if (vandor != null) {
            return res.json(vandor);
        }
    }
    catch (error) {
        return res.json({ 'message': 'no vandor available against given id' });
    }
}
