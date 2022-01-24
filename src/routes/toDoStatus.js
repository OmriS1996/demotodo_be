const express = require("express");
const S = require("fluent-json-schema");
const SQL = require("@nearform/sql");
const { query } = require("../data/mysqldb");

const router = express.Router();

router.post("/:id", async (req, res) => {
  try {
    await query(
      SQL`UPDATE items SET isDone = 1 WHERE itemId = ${req.params.id} ;`
    );
    res.send("item updated");
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
