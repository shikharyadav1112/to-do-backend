const app = require("./src/app");
const connectDb = require("./src/db/db");
connectDb();

app.listen(8001, () => {
  console.log("server is running at port 8001");
});
