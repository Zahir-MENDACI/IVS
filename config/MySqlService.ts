import mysql from "mysql2"


export class MySqlService {
  private static instance: MySqlService;

  db: mysql.Connection;

  constructor() {
    


    this.db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "IVS"
      });

    console.log("Created new instance of MySqlService");
  }

  static getInstance(): MySqlService {
    if (!MySqlService.instance) {
      MySqlService.instance = new MySqlService();
    }
    return MySqlService.instance;
  }
}
