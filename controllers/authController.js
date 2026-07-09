const User = require("../models/user")

const authController = {
    register: async (request, response) => {
        try {
            // get deails from the request body
            const { name, email, password } = request.body


            // create the new object of the request body
             const newUser = new User({
                name,
                email,
                password
             })

            // strore the user in database
             await newUser.save();

            response.status(200).json({message: "User register successfuly"})

        }catch(e) {
         return response.status(500).json({message: "Error register new user .try again later!", error:e.message})   
        }
    }
}

module.exports = authController