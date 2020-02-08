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
        encoding: 'utf8'
      });
      var options = {
        delimiter: ';', // optional
        quote: '"' // optional
      };

      const data_ = csvjson.toObject(data, options);
      console.log(data_)
      //   return res.sendStatus(200)
    }

  });
});

app.listen(3000, () => {
  console.log(`Server is run`)
});
