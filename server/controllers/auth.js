import bcrypt from "bcrypt"; //Encrpt our password
import jwt from "jsonwebtoken";// from Json web token so this will give me a way to send a user a web token that they can use for authorization
import User from "../models/User.js";

/* Node: REGISTER USER */
export const register = async (req, res) => { // This has to be async/asynchronous because we're going to be calling mongooe database
    try {
       const {
        firstName,
        lastName,
        email,
        password,
        picturePath,
        friends,
        location,
        occupation
       } = req.body;//So basically we're just structuring these parameters from the request body so on the front end we're going to have to send an object that has these parameters or arguments, going to grab this and use this in this function 
    
    const salt = await bcrypt.genSalt(); // We goning to create a random salt provided by bcrypt, So this is basically encryption and we're going to use this salt to encrypt our password 
    const passwordHash = await bcrypt.hash(password, salt); //salt pass it in and hash this together so we get the password hash

    const newUser = new User({ // Create new user
        firstName,
        lastName,
        email,
        password: passwordHash,
        picturePath,
        friends,
        location,
        occupation,
        viewedProfile: Math.floor(Math.random() * 10000),// so it's just going to give it a random number between 0 or 1 througt 10000
        impressions: Math.floor(Math.random() * 10000)
    })
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);// http status codes(201 Created) https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    } catch (error){
        res.status(500).json({error: error.message});
    }
};