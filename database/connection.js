const mongoose = require("mongoose");

const connect = async (props) => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    })
    .then(function () {
      console.log(
        "Connection has been established successfully at port: " + props
      );
    })
    .catch(function (err) {
      console.log("Unable to connect to the database: " + err);
    });
};

module.exports = connect;
