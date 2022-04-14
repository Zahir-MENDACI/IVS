class Room {

  id: string;
  name: string;
  nb_persons: number;
  buildingId: string

  constructor(id: string, name: string, nb_persons: number, buildingId: string) {
    this.id = id;
    this.name = name;
    this.nb_persons = nb_persons;
    this.buildingId = buildingId;
  }

}
export default Room;