const express = require("express");
const S = require("fluent-json-schema");
const SQL = require("@nearform/sql");
const { query } = require("../data/mysqldb");
const { validationMid } = require("../middlewares/validation");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const router = express.Router();

const schema = S.object().prop("name", S.string().required().minLength(1));

router.post("/", validationMid(schema.valueOf()), async (req, res) => {
  try {
    const user = await query(
      SQL`SELECT * FROM users WHERE userName = ${req.body.name};`
    );
    if (user[0]) {
      console.log(user);
      res.send({ userName: user[0].userName, userId: user[0].userId });
      return;
    } else {
      const uid = uuidv4();
      const insertUser = await query(
        SQL`INSERT INTO users (userId, userName) VALUES (${uid},${req.body.name});`
      );

      const newUser = await query(
        SQL`SELECT * FROM users WHERE userName = ${req.body.name};`
      );

      res.send({ userName: newUser[0].userName, userId: newUser[0].userId });
    }
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
