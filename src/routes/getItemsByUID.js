const express = require("express");
const S = require("fluent-json-schema");
const SQL = require("@nearform/sql");
const { query } = require("../data/mysqldb");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const getItems = await query(
      SQL`SELECT * FROM items WHERE userId = ${req.params.id} ORDER BY date DESC;`
    );
    res.send(getItems);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
