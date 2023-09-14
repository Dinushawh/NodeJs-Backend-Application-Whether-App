const UserWhereData = require("../models/userDataModel");

const saveData = {
  saveUser: async (email, location, whetherData) => {
    try {
      const userWhereData = new UserWhereData({
        email,
        location,
        whetherData,
      });

      await userWhereData.save();

      console.log("User data saved successfully.");
    } catch (error) {
      console.error("Error saving user data:", error);
      throw error;
    }
  },
};

module.exports = saveData;
