import jwt from 'jsonwebtoken';
/* Node: Authorization*/
export const verifyToken = async (req, res, next) => { //Next parameter will allow us to have the function continue
    try {
        let token = req.header("Authorization"); // so what we're doing is from the request from the front end we're grabbing the authorization header and that's where the token will be set on the front end will be setting this and then we can grab it in the back end through this key

        if (!token) {
            return res.status(403).send("Access Denied") // this handles a case where the token doesn't even exist so that means the're not even sending it
        }

        if (token.startsWith("Bearer ")) { // Bearer string 
            token = token.slice(7, token.length).trimLeft();// We want the token to be starting whith Bearer so again this is going to be set on the front end and we going to take everything from the right side of this Bearer so the token will be placed after a space in the bear so that's how we grabbing the actual token
        }


        const verified = jwt.verify(token, process.env.JWT_SECRET)// we're using that secret string that you don't want other people to know
        req.user = verified;
        next();

    }catch (error) {
        res.status(500).json({ error: error.message})
    }
}