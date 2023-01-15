import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriends,
} from "../controllers/users.js";
import { verifyToken} from "../middleware/auth.js";

/* Node: Read routes */
// Read routes represent routes where we grab information we're not actually saving anything to the database we not updating or changing anything in the database so that's what a read route is so if you are familiar with crud which is create read opdate delete

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);// query string that will grab the particular ID
router.get("/:id/friends", verifyToken, getUserFriends);


/* UPDATE */
router.patch("/:id/friendId", verifyToken, addRemoveFriends); // Just note this is more like faccebok where you have friends you have a friend list you can remove them

export default router;