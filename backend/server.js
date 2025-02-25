const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json()); // Đọc dữ liệu JSON từ request body


// API lấy số dư từ MySQL
app.get("/api/balance", (req, res) => {
    db.query("SELECT amount FROM balance LIMIT 1", (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ balance: results[0]?.amount || 0 });
    });
  });
  
  // API lấy danh sách giao dịch từ MySQL
  app.get("/api/transactions", (req, res) => {
    db.query("SELECT * FROM transactions", (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });

// // API lấy số dư
// app.get("/api/balance", (req, res) => {
//   res.json({ balance });
// });

// // API lấy danh sách giao dịch
// app.get("/api/transactions", (req, res) => {
//   res.json({ transactions });
// });

// API cập nhật số dư (khi nạp hoặc rút tiền)
app.post("/api/update-balance", (req, res) => {
  const { amount } = req.body;
  balance += amount;
  res.json({ balance });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
