import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String
    },
    role: {
        type: String,
        enum: ["normal", "admin"],
        default: "normal"
    }
}, { timestamps: true });

export const UserModel = mongoose.model("User", UserSchema);
