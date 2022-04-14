class Building {

  id: string;
  name: string;
  zipcode: number;
  organizationId: string

  constructor(id: string, name: string, zipcode: number, organizationId: string) {
    this.id = id;
    this.name = name;
    this.zipcode = zipcode;
    this.organizationId = organizationId;
  }

}
export default Building;