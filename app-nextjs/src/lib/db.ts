import mysql from 'mysql2/promise';

const db = mysql.createPool({

  host: 'localhost',
  port: 3325, // port que tu as exposé dans docker-compose
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'blind_test',

});

export default db;
