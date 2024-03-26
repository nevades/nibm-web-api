const express = require("express");
const weatherRoutes = require("./src/weather");

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static("public"));
app.use("/api/weather", weatherRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
