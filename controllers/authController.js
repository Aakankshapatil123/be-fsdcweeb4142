const User = require("../models/user")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const authController = {
    register: async (request, response) => {
        try {
            // get deails from the request body
            const { name, email, password } = request.body

            // encrypt the password using bcrypt
            const hashedPaassword = await bcrypt.hash(password, 10)


            // create the new object of the request body
             const newUser = new User({
                name,
                email,
                password: hashedPaassword
             })

            // check if the user already exists in the database
            const existingUser = await User.findOne({ email }) 


            // existingUser - null or an oject
            // existingUser = null => user dose not exit
            // existingUser = object => user already exists
             if(existingUser){
                return response.json({message: "user already exists!"})
             }

            // strore the user in database
             await newUser.save();

            response.status(200).json({message: "User register successfuly"})

        }catch(e) {
         return response.status(500).json({message: "Error register new user .try again later!", error:e.message})   
        }
    },

    login: async (request, response) => {
        try {
            // get the datials from the request body
            const { email, password } = request.body;
            
            // check user is exists in the database
            const existingUser = await User.findOne({ email })

            // if the user dose not exist, return error message
            if(!existingUser){
                return response.json({message: "user dose not exists!"})
            }

            // if we reach here, it means the user exit in the database
            // compare the password provided by the user with the hashed password store in the database
            const isPasswordValid = await bcrypt.compare(password, existingUser.password); 

            // if the password is invalid , return error massage
            if(!isPasswordValid){
                return response.json({message: "Invalide password!"})
            }
            
            // if we reach here , it meanse the user has provide valid credentials
            // generate a jwt token for the user
            const token = await jwt.sign({userId: existingUser._id}, 'apple', {expiresIn: '3h'})

            // store the token in the http only cookie
            response.cookie('token', token, {httpOnly: true});

            response.status(200).json({message: "User login successfuly" })

        }catch(e) {
         return response.status(500).json({message: "Error loggong in .try again later!", error:e.message})   
        }
    },

    me: async (request, response) => {
        try{
            // get the user id from the request object
            const userId = request.userId;

            // fetch the user details from the databse
            const user = await User.findById(userId).select('-password -__v');

            response.status(200).json({message: "User deails fetched successfuily!", user})

        }catch(e) {
            return response.status(500).json({message: "error feaching user details. Try again later!", error:e.message})
        }
    },

    logout: async (request, response) => {
        try{
            // clear the token the cookies
            response.clearCookie('token')

            response.status(200).json({message: "User logged out successfuly"})

        }catch(e) {
            return response.status(500).json({message: "Error logging out. Try again later!", error:e.message})
        }
    }
}

module.exports = authController