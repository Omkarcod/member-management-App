import User from "../schema/user-schema.js";

export const adddUser = async (req, res) => {
  const user = req.body;


  const newuser = new User(user);
  try {
    await newuser.save();
    res.status(201).json(newuser);
   
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const Users = await User.find({});
    res.status(200).json(Users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  console.log("get user id  in", req.params.id);
  try {
    const userData = await User.findById(req.params.id);
    // const userData= await User.find({_id:req.params.id});
    res.status(200).json(userData);
    // console.log(userData,'userdata')
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editUser = async (req, res) => {
  let isEdit = req.body;
  const isEditUser = new User(isEdit);

  try {
    await User.updateOne({ _id: req.params.id }, isEditUser);
    res.status(201).json(isEditUser);
  } catch (error) {
    console.log("error while calling edituser", error);
    res.status(409).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(204).json();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
