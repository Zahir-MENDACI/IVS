import mysql from "mysql2"
import "dotenv/config"


export class MySqlService {
  private static instance: MySqlService;

  db: mysql.Connection;

  constructor() {
    
    this.db = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
      })

    this.db.query("CREATE DATABASE [IF NOT EXISTS] IVS")

    console.log("Created new instance of MySqlService");
  }

  static getInstance(): MySqlService {
    if (!MySqlService.instance) {
      MySqlService.instance = new MySqlService();
    }
    return MySqlService.instance;
  }
}
