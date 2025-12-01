import User from "../Models/UserModules.js"


export const RegisterUser = async (req, res) => {
    try {

        const { username, email, password } = req.body

        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(404).json({
                message: "This Email Already Registered"
            })
        }

        const user = new User({ username, email })

    } catch (error) {
        res.status(500).json({
            messgae: error.messgae
        })
    }
}