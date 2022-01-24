const express = require("express");
const S = require("fluent-json-schema");
const SQL = require("@nearform/sql");
const { query } = require("../data/mysqldb");
const { validationMid } = require("../middlewares/validation");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

const schema = S.object()
  .prop("title", S.string())
  .prop("description", S.string())
  .prop("userName", S.string().required().minLength(1))
  .prop("userId", S.string().required().minLength(1))
  .prop("date", S.number().required());

router.post("/", validationMid(schema.valueOf()), async (req, res) => {
  try {
    if (req.body.title.length < 1 && req.body.description.length < 1) {
      throw new Error("Item must contain a title and/or a description");
    }

    const uuid = uuidv4();
    await query(
      SQL`INSERT INTO items (itemId, userId, userName, date, title, description, isDone) VALUES (${uuid},${req.body.userId},${req.body.userName},${req.body.date},${req.body.title},${req.body.description},0);`
    );
    res.send("To Do added");
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
