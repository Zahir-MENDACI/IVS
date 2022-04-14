class Building {

  id: number;
  name: string;
  zipcode: number;
  id_organization: number

  constructor(id: number, name: string, zipcode: number, id_organization: number) {
    this.id = id;
    this.name = name;
    this.zipcode = zipcode;
    this.id_organization = id_organization;
  }

}
export default Building;