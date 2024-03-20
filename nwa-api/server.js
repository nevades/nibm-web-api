const express = require("express");
//const weatherRoutes = require("./src/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Weather Rest API made by Neva");
});

//app.use("/api/v1/weather", weatherRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));