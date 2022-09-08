const express = require("express");
const app = express();
const user = require("./userroutes");

var cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", user);

var port = 4000;
app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
