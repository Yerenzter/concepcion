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

// GET
server.get("/accounts/sort/id", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("SELECT * FROM accounts", [task.account_id]);
  res.send(data);
});

server.get("/residents", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("SELECT * FROM residents", [
    task.resident_id,
  ]);
  res.send(data);
});

// PUT
server.put("/accounts", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "UPDATE accounts set account_username=?, account_password=? WHERE account_id=?",
    [task.account_username, task.account_password, task.account_id]
  );
});

// DELETE

// SERVER LEE SIN
server.listen(port, () =>
  console.log(`API server is now running at http://${host}:${port}...`)
);
