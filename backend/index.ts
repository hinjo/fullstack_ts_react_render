import cors from 'cors';
import express from 'express';
import path from 'path';

const app = express();

app.use(cors());

app.use(express.static(path.join(path.resolve(), "public")));

app.get("/api", (_request, response) => {
  response.send({ hello: "World!!" });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Redo på port ${port}`);
});
