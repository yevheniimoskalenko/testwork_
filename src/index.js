const express = require("express");
const fileupload = require("express-fileupload");
const mysql = require("mysql2");
const fs = require("fs");
const csvjson = require("csvjson");
const path = require("path");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "artJoker",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
const app = express();
app.use(fileupload());
//Загрузите файл CSV. Файл должен быть проанализирован и сохранен в базе данных
app.post("/upload", async (req, res) => {
  const {
    name,
    mimetype
  } = req.files.file;
  if (mimetype != "text/csv") return res.sendStatus(415); // если не файл в формате cvs то значит ошибка

  req.files.file.mv(`./uploads/${name}`, err => {
    if (err) {
      return res.send(err);
    } else {
      var data = fs.readFileSync(path.join(`./uploads/${name}`), {
        encoding: "utf8"
      });
      var options = {
        delimiter: ";", // optional
        quote: '"' // optional
      };

      const data_ = csvjson.toObject(data, options);
      for (let key in data_) {
        pool.query(
          `INSERT INTO users (username, firstname, lastname, age) VALUES ("${data_[key].Username}","${data_[key].Firstname}","${data_[key].Lastname}","${data_[key].Age}" )`,
          function (err, rows, fields) {}
        );
      }
      return res.sendStatus(200);
    }
  });
});
// Получить коллекцию пользователей в формате JSON
app.get("/all_users", async (req, res) => {
  pool.query(
    `SELECT username, firstname, lastname, age FROM users`,
    (err, rows, fields) => {
      return res.status(200).send(JSON.stringify(rows));
    }
  );
});
// Загрузите файл CSV. Необходимо сериализовать коллекцию пользователей из базы данных в файл CSV и отправить ее.

app.get("/download", async (req, res) => {
  pool.query(
    `SELECT username, firstname, lastname, age FROM users`,
    (err, rows, fields) => {
      var options = {
        delimiter: ";",
        wrap: false,
        headers: "relative"
      };
      let data = csvjson.toCSV(rows, options);
      var createfile = fs.createWriteStream(path.join("./out/newfile.csv"));
      createfile.write(data);
    }
  );
  return res.status(200).send('./out/newfile.csv')
});

app.listen(3000, () => {
  console.log(`Server is run`);
});
