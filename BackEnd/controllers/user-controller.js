import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res) => {
  const { name, email, password, age } = req.body;

  console.log(name, email, password, age);
  if (
    !name ||
    name.trim() === "" ||
    !email ||
    email.trim() === "" ||
    !password ||
    password.trim() === "" ||
    !age ||
    age.trim() === ""
  ) {
    return res.status(400).json({ message: "Invalid Inputs" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ name, email, password: hashedPassword, age });
    res.json({ message: 'Signup successful', user });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const login = async (req, res) => {
  console.log(`req body is ${JSON.stringify(req.body)}`);
  const { userId, password} = req.body;
  if (!userId || !password) {
    return res.status(400).json({ message: "Invalid Inputs" });
  }

  try {
    const user = await User.findOne({ email: userId });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: 'Incorrect password' });
    }
    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default { getAllUsers, signup, login };
