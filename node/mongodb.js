const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/users", { useNewUrlParser: true })

  .then((response) => {
    console.log("Mongodb is Connected");
  })
  .catch((err) => {
    console.log("Mongodb is not Connected");
  });
