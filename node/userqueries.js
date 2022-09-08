const mongodb = require("./mongodb");
const usermodel = require("./schema");
jwt = require("jsonwebtoken");

const userQueries = {
  insertUser: (req, res) => {
    let userObj = {
      username: req.body.username,
      email: req.body.email,
      gender: req.body.gender,
      mob_no: req.body.mob_no,
      role: req.body.role,
      address: req.body.address,
      salary: req.body.salary,
      password: req.body.password,
    };

    usermodel.create(userObj);
    return res.json({
      data: userObj,
      success: true,
    });
  },
  getUser: async (req, res) => {
    const data = await usermodel.find();
    return res.json({
      users: data,
      success: true,
    });
  },
  loginUser: async (req, res) => {
    usermodel.findOne({ email: req.body.email }, function (err, user) {
      if (err) throw err;
      if (!user || !user.comparePassword(req.body.password, user.password)) {
        return res.json({
          message: "Authentication failed. Invalid user id or password.",
        });
      }
      return res.json({
        token: jwt.sign({ email: user.email }, "RESTFULAPIs"),
      });
    });
  },

  updateUser: async (req, res) => {
    const data = await usermodel.updateOne(
      { _id: req.params._id },
      {
        $set: {
          username: req.body.username,
          gender: req.body.gender,
          mob_no: req.body.mob_no,
          role: req.body.role,
          address: req.body.address,
          salary: req.body.salary,
          password: req.body.password,
        },
      }
    );
    return res.json({
      message: "updated ",
    });
  },
  deleteUser: async (req, res) => {
    const data = await usermodel.deleteOne({ _id: req.params._id });
    if (data.deletedCount !== 0) {
      return res.json({
        message: "deleted",
      });
    }
    return res.json({
      message: "not deleted",
    });
  },

  filterUser: async (req, res) => {
    const data = await usermodel.find({ role: req.params.role });
    return res.json({
      users: data,
      success: true,
    });
  },
};

module.exports = userQueries;
