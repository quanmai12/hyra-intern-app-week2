const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost", // Địa chỉ máy chủ MySQL
  user: "root", // Tên đăng nhập MySQL
  password: "your_password", // Mật khẩu MySQL
  database: "finance_app", // Tên database
});

connection.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối MySQL:", err);
    return;
  }
  console.log("Kết nối MySQL thành công!");
});

module.exports = connection;
