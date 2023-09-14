var CronJob = require("cron").CronJob;
const User = require("../models/userModel");
const whetherData = require("..//utils/getWheatherData");
const { sendWeatherReport } = require("../utils/sendWheatherData");
const saveData = require("../controllers/userDatasave");

var sendEmailAutomatically = new CronJob("0 0 */3 * * *", async () => {
  try {
    const users = await User.find({});

    for (const user of users) {
      try {
        const data = await whetherData(user.location);
        await sendWeatherReport(
          user.email,
          data["weather"][0]["main"],
          data["weather"][0]["description"]
        );

        await saveData.saveUser(
          user.email,
          user.location,
          data["weather"][0]["main"] + " " + data["weather"][0]["description"]
        );

        console.log("Weather report sent successfully");
      } catch (error) {
        console.error("Error sending weather report:", error);
      }
    }

    console.log("Users fetched and emails sent successfully");
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});

sendEmailAutomatically.start();
