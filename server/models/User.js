import mongoose from "mongoose";

const UserSchema = new mongoose.Schema( //So now this is kind of close to what you write with an object except there's some parameters that we're going to be setting
    {
        firstName: { //Have a first name that has these properties
            type: String, //Type of string
            required: true, // It's has to be required ,
            min: 2, // With a minimun of 2 values adn,
            max: 50, //maximum of 50 values 
        },
        lastName: { 
            type: String,
            required: true, 
            min: 2, 
            max: 50, 
        },
        email: { 
            type: String,
            required: true, 
            max: 50,
            unique: true // You cannot have duplicate emails
        },
        password: { 
            type: String,
            require: true, 
            min: 5, 
        },
        picturePath: { 
            type: String,
            default: "", //Is empty string
        },
        friends: { 
            type: Array,
            default: [], //Is empty string
        },
            location: String,
            occupation: String,
            viewedProfile: Number, 
            impressions: Number,
        
    },{ timestamps: true} // automatic dates for when it's created when it's updated things like that
);

const User = mongoose.model("User", UserSchema)
export default User;
//So when you create a mongoose mode you ,
//want to create this Mongoose Schema from line 3 to 42
//And then we pass it into mongoose.model  and we pass it into user