import User from "../models/User.js";

/*Node: Read */

export const getUser = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    }catch(error){
        res.status(404).json({ message: error.message},'Node Read getuser error (server > controllers> users.js)');
    }
}

export const getUserFriends = async (req, res) =>{
    try {
        const { id } = req.params;
        const user = await User.findById(id);
    
        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(  // Grab each id that the user has and we're going to do user find by id. and grab all the information from the fris id
            ({ _id, firstName, lastName, occupation, location, picturePath}) => { //We kind of wanted to modify our schema a little bit before we send it back to the front end, We going to make sure that we can format this in the proper way for the front end. Set aall the information that we need to set so that front end will need
                return { _id, firstName, lastName, occupation, location, picturePath};
    
            } 
        );
        res.status(200).json(formattedFriends);
    } catch (error) {
        res.status(404).json({ message: error.message},'Node Read getUserFriends error (server > controllers> users.js)');
    }
};

/*Node: UPDATE */
export const addRemoveFriend = async (req, res) => {
    try {
        const { id, friendId } = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        if (user.friends.includes(friendId)) { //We're going to see if the friend id is included in the main user's friend's id 
            user.friends = user.friends.filter((id) => id !== friendId);//if so we make sure they are removed, if the friend id is alreadypart of the main user's friends list we removed
            friend.friends = friend.friends.filter((id) => id !==id);
            
        }else {//If they're not included we'er gonna add them to the friend list by doing
            user.friends.push(friendId);
            friend.friends.push(id);
        }
        await user.save();
        await friend.save();
                
        const friends = await Promise.all( //Going to formattted as we did befor it once again 
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(  // Grab each id that the user has and we're going to do user find by id. and grab all the information from the fris id
            ({ _id, firstName, lastName, occupation, location, picturePath}) => { //We kind of wanted to modify our schema a little bit before we send it back to the front end, We going to make sure that we can format this in the proper way for the front end. Set aall the information that we need to set so that front end will need
                return { _id, firstName, lastName, occupation, location, picturePath};
            } 
        );
        res.status(200).json(formattedFriends);
    }catch (error) {
        res.status(404).json({ message: error.message},'Node UPDATE addRemoveFriend error (server > controllers> users.js)');
    }
};