import User from "../model/register.model.js";
import { asynchandler } from "../utils/asynchandler.js";
import { APIResponse } from "../utils/APIResponse.js";
import { APIerror } from "../utils/APIerror.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  console.log(req.body);
  const { name, email, age, password } = req.body;

  //If any field is empty
  if (
    [name, email, age, password].every((field) => field && field.trim() === "")
  ) {
    return res.send(400).json({ error: "All fields required" });
  }

  //If user already exits
  try {
    //Check if email exists more than once than user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.send(409).json({ error: "User already exists" });
    }

    //If Not Create new User
    const newUser = await User.create({
      name,
      email,
      age,
      password,
    });

    return res.status(201).json({
      status: true,
      data: newUser,
      message: "New User registered successfully",
    });
  } catch (error) {
    console.error("Error submitting the form:", error);
    return res.send(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  //Find the email for login
  const checkUser = await User.findOne({ $or: [{ email }, { password }] });
  if (!checkUser) {
    return res.status(404).json({ error: "User not Found" });
  }
  const check = await bcrypt.compare(password, checkUser.password);

  if (!check) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  //JWT token generation
  const token = jwt.sign(
    { userId: checkUser._id, email: checkUser.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return res.status(200).json({
    message: "User logged in Succesfully",
    token,
    user: {
      id: checkUser._id,
      name: checkUser.name,
      email: checkUser.email,
    },
  });
};

export { registerUser, login };
