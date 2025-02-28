const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("User Not Found");
  }
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    user = new User({
      name,
      email,
    });
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};
