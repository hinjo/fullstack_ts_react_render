const cors = require("cors"),
  express = require("express");
const path = require("path");

const app = express();

app.use(cors());

app.use(express.static(path.join(path.resolve(), "public")));

app.get("/api", (_request, response) => {
  response.send({ hello: "World" });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Redo på http://localhost:8080/");
});
