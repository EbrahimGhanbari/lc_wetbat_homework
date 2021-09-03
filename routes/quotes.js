const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.select(
    "q.id as quote_id",
    "c.first_name as costumer_first_name",
    "c.last_name as costumer_last_name",
    "q.destination",
    "q.price"
  )
    .from({ q: "quotes" })
    .leftJoin({ c: "costumers" }, "q.costumer_id", "c.id")
    .then((data) => {
      res.send(data);
    });
});

router.get("/:quoteID", (req, res) => {
  db.select(
    "q.id as quote_id",
    "q.from",
    "q.destination",
    "q.departure_date",
    "q.return_date",
    "q.number_of_traveller",
    "q.price",
    "q.quote_status",
    "c.first_name as costumer_first_name",
    "c.last_name as costumer_last_name",
    "c.email as costumer_email",
    "c.phone as costumer_phone",
    "c.address as costumer_address",
    "s.first_name as staff_first_name",
    "s.last_name as staff_last_name",
    "s.email as staff_email",
    "s.phone as staff_phone",
    "s.address as staff_address"
  )
    .from({ q: "quotes" })
    .leftJoin({ s: "staffs" }, "q.owner_id", "s.id")
    .leftJoin({ c: "costumers" }, "q.costumer_id", "c.id")
    .where("q.id", req.params.quoteID)
    .then((data) => {
      res.send(data);
    });
});

module.exports = router;
