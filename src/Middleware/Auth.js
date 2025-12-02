import jwt from "jsonwebtoken";
import User from "../Models/UserModels.js";



export const AuthMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer "))
        return res.status(401).json({ message: "Unauthorized - No Token" });

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};


export const Authorization = (...roles) => {
    return (req, res, next) => {

        // console.log("Get Profile :", req.user);

        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Access Denied - Insufficient Permissions"
            });
        }

        next();
    };
};
