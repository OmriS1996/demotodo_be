const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json({ limit: 10000000 }));
const port = 4000;
const host = "localhost";

app.use("/users", require("./src/routes/signin"));

app.listen(port, host, () => {
  console.log(`server started http://${host}:${port}`);
});
