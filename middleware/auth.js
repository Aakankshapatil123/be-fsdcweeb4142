
// const jwt = require('jsonwebtoken');
// const User = require('../models/user')

// const auth = {
//     isAuthenticated: async (request, response, next) => {
//         try{
//             // get the token from the cookies
//             const token = request.cookies?.token;

//             // 
//             if(!token){
//                 response.status(401).json({message: "Yor are not logged in!"})
//             }
                                  
//            let decodedToken;

//            try{
//                 // verify the token
//             decodedToken = await jwt.verify(token, 'apple')
//            }catch(e) {

//             return response.status(401).json({message: "Invalide token!"})
           
//            }

           
                      
//             // get the user id from token
//             const userId = decodedToken.userId;

//             // add the user id from the token
//             request.userId = userId;

//             // call yhe next middleware
//             next();

//         }catch(e)  {
//            return response.status(500).json({message: "Error authenticating the user, Try again later",error: e.message})
//         }
//     },

//     allowRoles: (roles) => {
//         return async (request, response, next) => {
//             // get the user id from the request object
//             const userId = request.userId;

//             // get user from database
//             const user = await User.findById(userId)
            
//             // check if the user exists
//             if(!user){
//                 return response.status(401).json({message: "User not found!"})
//             }

//             // check if the user has the require role
//             if(!roles.includes(user.role)) {
//                return response.status(401).json({message: "You do not have permission to perform this action"});
//             }

//             // call the next moddleware
//             next();
//         }
//     }
// }

// module.exports = auth;















const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = {
    isAuthenticated: async (request, response, next) => {
        try {
            // get the token from the cookies
            const token = request.cookies.token;

            // check if the token exists
            if (!token) {
                return response.status(401).json({ message: 'You are not logged in!' });
            }

            let decodedToken;

            try {
                // verify the token
                decodedToken = await jwt.verify(token, 'apple');
            } catch (e) {
                return response.status(401).json({ message: 'Invalid token!' });
            }

            // get the user id from the token
            const userId = decodedToken.userId;

            // add the user id to the request object
            request.userId = userId;

            // call the next middleware
            next();
        } catch (e) {
            return response.status(500).json({ message: 'Error authenticating the user. Try again later!', error: e.message });
        }
    },
    allowRoles: (roles) => {
        return async (request, response, next) => {
            // Get the user id from the request object
            const userId = request.userId;

            // get the user from the database
            const user = await User.findById(userId);

            // check if the user exists
            if (!user) {
                return response.status(404).json({ message: 'User not found!' });
            }

            // check if the user has the required role
            if (!roles.includes(user.role)) {
                return response.status(403).json({ message: 'You do not have permission to perform this action!' });
            }

            // call the next middleware
            next();
        }
    }
}

module.exports = auth;