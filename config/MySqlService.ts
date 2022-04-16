import mysql from "mysql2"


export class MySqlService {
  private static instance: MySqlService;

  db: mysql.Connection;

  constructor() {
    


    this.db = mysql.createConnection({
        host: "sql11.freemysqlhosting.net",
        user: "sql11486053",
        password: "Qlmnbzs2rA",
        database: "sql11486053"
      })

    console.log("Created new instance of MySqlService");
  }

  static getInstance(): MySqlService {
    if (!MySqlService.instance) {
      MySqlService.instance = new MySqlService();
    }
    return MySqlService.instance;
  }
}
