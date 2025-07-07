
import { registerUser, loginUser } from "../service/user-services.js";

export const signup = async(req, res) => {
    const {username, password} = req.body

    if(!username || !password){
        return res.status(400).json({message: "all fields are required"});
    }

    try{
        const user = await registerUser(username, password);
        res.status(200).json({
            success: true,
            message: "user registered successfully",
            data: user
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "error while signup the user",
            error: error.message
        })
    }
}

export const login = async(req, res) => {
   const {username, password} = req.body;

   if(!username || !password){
        return res.status(400).json({message: "all fields are required"});
   }

   //check if a user is already login aor not
   if(req.session.userId){
        return res.status(403).json({
            success: false,
            message: "A user is already logged in with this session. Please wait unitl previous user logout!"
        })
   }
   
   try{
        const user = await loginUser(username, password)
        //save user_id in session
        req.session.userId = user._id    
        res.status(200).json({
            success: true,
            message: "login successfull"
        })
   }
   catch(error){
    res.status(500).json({
            success: false,
            message: "error while login the user",
            error: error.message
        })
   }
}

export const logout = async(req, res) => {
    try{
        req.session.destroy((err) => {
            if(err){
                return res.status(400).json({
                    success: false,
                    message: "error while logging out",
                    error: err.message
                })
            }

            res.clearCookie('connect.sid');
            res.status(200).json({
                success: true,
                message: "logout successfull!"
            })
        })

    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "server side error",
            error: error.message
        })
    }
}

