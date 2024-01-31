import { Mongoose } from "mongoose"

const User = Mongoose.model("User", userSchema);

export const createUser = async (para) => {
    try {
        const newUser = new User(para)

        const savedUser = await newUser.save();
        console.log("User saved successfully:", savedUser);
    } catch (error) {
        console.log("Error saving user:", error);
    }
}