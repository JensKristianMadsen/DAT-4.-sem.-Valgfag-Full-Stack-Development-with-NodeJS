import express from "express";
import bodyParser from "body-parser"; 
import mongoose from "mongoose";
import cors from "cors"; 
import dotenv from "dotenv"
import multer from "multer"
import helmet from "helmet";
import morgan from "morgan";
import path from "path";                                // These two wil allow us to properly set the paths, when i configure directories later on
import { fileURLToPath } from "url";

/* Node: CONFIGURATIONS */                                    // so this  include all the middleware configurations as well as different package configurations. middleware is basically something that runs in between different requests basically, little like basically functions that run in between different things 
const __filename = fileURLToPath(import.meta.url);      //So this configuration is so we can grab the dile URL and it's specifically when you use the modules f.eks (package.json create "type": "module" ) this configuration so we grab we can use directory name which i going to create (const __dirname = path.dirname(__filename);) this is only when you use the type modules
const __dirname = path.dirname(__filename);
dotenv.config(); //Going to invoke that so we can use dot EMV files
const app = express(); // So we invoke our express application so we can use our middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets'))); //So what this is right here is doing is going to set the directory of where we keep our Assets in our case it be the images that i store so we're going to store this locally

/* Node: FILE STORAGE */
const storage = multer.diskStorage({  // So this is how you can save your files so anytime someone uploads a file onto your website then it's going to say destination it's going to be saved into this particular folder 
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {//https://github.com/expressjs/multer
        cb(null, file.originalname);// So a lot of these configurations are coming from the package instructions. So basically i got all of this information from the github repo of malter 
    }
});
const upload = multer({ storage }); // So that wil help us save it and anytimewe need to upload a file we're going to be using this variable