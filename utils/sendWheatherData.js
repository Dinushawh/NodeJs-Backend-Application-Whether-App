const nodemailer = require("nodemailer");

async function sendWeatherReport(email, main, description) {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: "test@test.com",
      to: email,
      subject: "Hourly Weather Report",
      text: `Weather Data:\nWhether around you is ${main} with ${description}.\nHave a great day!`,
    };

    await transporter.sendMail(mailOptions);

    console.log("Weather report sent successfully to:", email);
  } catch (error) {
    console.error("Error sending weather report:", error);
    throw error;
  }
}

module.exports = { sendWeatherReport };
