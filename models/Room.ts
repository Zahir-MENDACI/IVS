class Room {

  id: number;
  name: string;
  nb_persons: number;
  id_building: number

  constructor(id: number, name: string, nb_persons: number, id_building: number) {
    this.id = id;
    this.name = name;
    this.nb_persons = nb_persons;
    this.id_building = id_building;
  }

}
export default Room;