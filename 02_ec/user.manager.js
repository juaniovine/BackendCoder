class UserManager {
    // propiedad estatica, sumo todos los eventos que se vayan creando
    static events = [];

    constructor(data) {
      this.id = UserManager.events.length === 0 ? 1 : UserManager.events[UserManager.events.length-1].id+1;
      this.name = data.name;
      this.photo = data.photo;
      this.email = data.email;
      UserManager.events.push(this);
    }
    // create(data)
    create(data) {
      const event = {
          id: UserManager.events.length === 0 ? 1 : UserManager.events[UserManager.events.length-1].id+1,
          name: data.name,
          photo: data.photo,
          email: data.email,
      }
      UserManager.events.push(event);
    }
  // read()
    read() {
      return UserManager.events
    }
  // readOne(id)
    readOne(id) {
      return UserManager.events.find(each => each.id === Number(id))
    }
  }
  
  const events = new UserManager({
    name: 'Carlos Rodriguez',
    photo: 'photoIV',
    email: 'carlos.rodriguez@gmail.com',
  });
  events.create({
    name: 'Ana Lopez',
    photo: 'photoIV',
    email: 'alopez@gmail.com',
  });
  events.create({
    name: 'Alejandro Gomez',
    photo: 'photoIV',
    email: 'ale.gomez@gmail.com',
  })

  console.log(events.read());
  
  console.log(events.readOne(2)); //read event by ID
