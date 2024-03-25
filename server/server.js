const app = require("./app");
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

app.use(cors());

mongoose.connect(process.env.MONGODB_URL).then((res) => {
  console.log("database connected successfully");
});
const port = process.env.port || 8000;

app.listen(port, () => {
  console.log("server started at port: " + port);
});
