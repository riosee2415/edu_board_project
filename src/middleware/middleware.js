import mysql from "mysql2";

export const dbConnectionHandler = (req, res, next) => {
  const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3307",
    user: "root",
    password: "fourleaf0309",
    database: "edu",
  });

  connection.on("error", (error) => {
    console.log(error);
    console.log("❌ DB Connection Failed! Re Try Connect! ❌");

    setTimeout(() => {
      dbConnectionHandler();
    }, 3000);
  });

  req.body.connection = connection;

  next();
};
