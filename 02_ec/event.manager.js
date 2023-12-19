class EventManager {
  // propiedad estatica, sumo todos los eventos que se vayan creando
  static events = [];
  static #perGain = 0.3; // # defino propiedad privada, se usa dentro de la clase
  static #totalGain = 0;
  constructor(data) {
    this.id = EventManager.events.length === 0 ? 1 : EventManager.events[EventManager.events.length-1].id+1;
    this.name = data.name;
    this.place = data.place;
    this.price = data.price || 10; // data.price ó 10
    this.capacity = data.capacity || 50;
    this.date = data.date || new Date(); // hoy por defecto
    EventManager.events.push(this);
  }
  create(data) {
    const event = {
        id: EventManager.events.length === 0 ? 1 : EventManager.events[EventManager.events.length-1].id+1,
        name: data.name,
        place: data.place,
        price: data.price || 10,
        capacity: data.capacity || 50,
        date: data.date || new Date()
    }
    EventManager.events.push(event);
  }
// readEvents()
  read() {
    return EventManager.events
  }
// readEventById(id)
  readById(id) {
    return EventManager.events.find(each => each.id === Number(id))
  }
// soldTicket(x,id)()
  soldTicket(quantity, eventId){
    const event = this.readById(eventId)
    event.capacity = event.capacity - quantity
    // SUMO (cantidad por precio por % de ganancia)
    EventManager.#totalGain = EventManager.#totalGain + quantity * event.price * EventManager.#perGain
    return true
  }
  
// getGain()
  getGain() {
    return EventManager.#totalGain
  }
}

const events = new EventManager({
  name: 'StarWars IV',
  place: 'showcase',
});
events.create({
    name: 'StarWars V',
    place: 'showcase',
})
events.create({
    name: 'StarWars VI',
    place: 'showcase',
})
console.log(events.read());
console.log(events.readById(1)); //read event by ID
events.soldTicket(12,1)
events.soldTicket(8,2)
events.soldTicket(5,3)
console.log(events.getGain())
