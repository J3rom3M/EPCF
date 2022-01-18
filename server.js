import express from "express";
import DataStore from 'nedb';

const port = 3000

const app = express();

app.use(express.json());
app.listen(port, () => {
  console.log(`Le serveur est lancé sur le port : ${port}`)
});
