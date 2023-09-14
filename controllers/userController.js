const User = require("../models/userModel");
const userWhereData = require("../models/userDataModel");

const userController = {
  saveUser: async (req, res) => {
    try {
      const { email, location } = req.body;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(409).json({
          message: "email-already-exists",
        });
      }

      const user = new User({
        email,
        location,
      });

      await user.save();

      res.status(200).json({
        message: "user-saved-successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  updateUser: async (req, res) => {
    const { email, location } = req.body;

    try {
      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        return res.status(404).json({
          message: "User does not exist",
        });
      }

      // Update the user's location
      existingUser.location = location;
      await existingUser.save();

      res.status(200).json({
        message: "User location updated successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  getWhereDataAccordingtoDate: async (req, res) => {
    const { email, date } = req.body;

    try {
      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        return res.status(409).json({
          message: "Email does not exist",
        });
      }

      const weatherData = await userWhereData.findOne({
        email: email,
        date: {
          $gte: new Date(date),
          $lt: new Date(date).setDate(new Date(date).getDate() + 1),
        },
      });

      if (!weatherData) {
        return res.status(404).json({
          message: "Date data does not exist",
        });
      }

      res.status(200).json({
        message: weatherData,
      });
    } catch (error) {
      res.status(500).json({
        message: "Date does not exist",
      });
    }
  },
};

module.exports = userController;
