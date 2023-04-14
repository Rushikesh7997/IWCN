import express, { query } from "express";
import mysql from "mysql";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome to server");
});

app.get("/getNote", (req, res) => {
  const data = "SELECT * FROM notes";
});

app.post("/create", (req, res) => {;
  const data = "INSERT INTO notes(`title`,`content`) VALUES (?)";
  // if(values==data){
  //   query.data(values)
  // }
});

app.delete("/delete/:id", (req, res) => {});

app.listen(5000, () => {
  console.log("Server Started");
});
