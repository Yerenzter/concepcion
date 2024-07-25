const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const server = express();
const host = Bun.env.SERVER_HOST;
const port = Bun.env.SERVER_PORT;

server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/login", (req, res) => {
  res.send({
    token: "pakyu2024",
  });
});

// POST
server.post("/accounts", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "INSERT INTO accounts VALUES(account_id, ?, ?, ?, ?)",
    [
      task.account_username,
      task.account_password,
      task.account_type,
      task.account_creation,
    ]
  );
  console.log(data);
});

server.post("/accounts/search", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "SELECT * FROM accounts WHERE account_id=? OR account_username=? OR account_password=?",
    [
      task.account_search_id,
      task.account_search_username,
      task.account_search_password,
    ]
  );
  res.send(data);
});

server.post("/accounts/delete", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("DELETE FROM accounts WHERE account_id=?", [
    task.account_id,
  ]);
  console.log(data);
});

server.post("/residents", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "INSERT INTO residents VALUES(resident_id, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      task.resident_fname,
      task.resident_mname,
      task.resident_lname,
      task.resident_age,
      task.resident_sex,
      task.resident_birthday,
      task.resident_occupation,
      task.resident_civilstatus,
      task.resident_contact_number,
    ]
  );
  console.log(data);
});

server.post("/residents/search", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "SELECT * FROM residents WHERE resident_id=? OR resident_fname=? OR resident_mname=? OR resident_lname=? OR resident_age=? OR resident_sex=? OR resident_occupation=?",
    [
      task.resident_search_id,
      task.resident_fname,
      task.resident_mname,
      task.resident_lname,
      task.resident_age,
      task.resident_sex,
      task.resident_occupation,
    ]
  );

  res.send(data);
});

server.post("/residents/delete", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "DELETE FROM residents WHERE resident_id=?",
    [task.resident_id]
  );
  console.log(data);
});

// GET
server.get("/accounts/sort/id", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("SELECT * FROM accounts", [task.account_id]);
  res.send(data);
});

server.get("/accounts/login/auth", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("SELECT * FROM accounts", [task.account_id]);
  res.send(data);
});

server.get("/residents/sort/id", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("SELECT * FROM residents", [
    task.resident_id,
  ]);
  res.send(data);
});

server.get("/residents", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("SELECT * FROM residents", [
    task.resident_id,
  ]);
  res.setDefaultEncoding(data);
});

// PUT
server.put("/accounts", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "UPDATE accounts set account_username=?, account_password=? WHERE account_id=?",
    [task.account_username, task.account_password, task.account_id]
  );
});

server.put("/residents", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "UPDATE residents SET resident_fname=?, resident_mname=?, resident_lname=?, resident_age=?, resident_sex=?, resident_birthday=?, resident_occupation=?, resident_civilstatus=?, resident_contact_number=? WHERE resident_id=?",
    [
      task.resident_fname,
      task.resident_mname,
      task.resident_lname,
      task.resident_age,
      task.resident_sex,
      task.resident_birthday,
      task.resident_occupation,
      task.resident_civilstatus,
      task.resident_contact_number,
      task.resident_id,
    ]
  );
  console.log(data);
});

// DELETE

// SERVER LEE SIN
server.listen(port, () =>
  console.log(`API server is now running at http://${host}:${port}...`)
);
