import bcrypt from "bcrypt"; //Encrpt our password
import jwt from "jsonwebtoken";// from Json web token so this will give me a way to send a user a web token that they can use for authorization
import User from "../models/User.js";