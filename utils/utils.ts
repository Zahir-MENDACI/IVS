import mysql from "mysql2"
import { MySqlService } from "../config/MySqlService";

export class Utils {
  private static instance: Utils;
  db: mysql.Connection;

  constructor() {
    this.db = MySqlService.getInstance().db;
    console.log("Created new instance of Utils");
  }

  static getInstance(): Utils {
    if (!Utils.instance) {
      Utils.instance = new Utils();
    }
    return Utils.instance;
  }


  async mySqlQuery(query: string, values?: any) {
    try {
      return new Promise((resolve, reject) => {
        this.db.query(query, values ?? null, (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res)
        }
        )
      })
    } catch (e) {
      throw e
    }
  }

  async createOrganizationsTable() {
    try {
        new Promise ((resolve, reject) => {
          MySqlService.getInstance().db.query("CREATE TABLE Organizations(id INT AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))", err => {
            if (err) {
              reject(err)
            }
            resolve("")
          })
        })
    } catch (e) {
      throw e
    }
  }
  async createBuildingsTable() {
    try {
      new Promise ((resolve, reject) => {
              MySqlService.getInstance().db.query("CREATE TABLE Buildings(id INT AUTO_INCREMENT, name VARCHAR(255), zipcode INT, id_organization INT, PRIMARY KEY (id),CONSTRAINT FK_Building_Organization FOREIGN KEY (id_organization)REFERENCES Oùrganizations(id))", err => {
            if (err) {
              reject(err)
            }
            resolve("")
          })
        })
    } catch (e) {
      throw e
    }
  }
  async createRoomsTable() {
    try {
        new Promise ((resolve, reject) => {
          MySqlService.getInstance().db.query("CREATE TABLE Rooms(id INT AUTO_INCREMENT, name VARCHAR(255), nb_persons INT, id_building INT, PRIMARY KEY (id),CONSTRAINT FK_Room_Building FOREIGN KEY (id_building)REFERENCES Buildings(id))", err => {
            if (err) {
              reject(err)
            }
            resolve("")
          })
        })
    } catch (e) {
      throw e
    }
  }


}
