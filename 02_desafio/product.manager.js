class ProductManager {
    // propiedad estatica, sumo todos los eventos que se vayan creando
    static events = [];

    constructor(data) {
      this.id = ProductManager.events.length === 0 ? 1 : ProductManager.events[ProductManager.events.length-1].id+1;
      this.title = data.title;
      this.photo = data.photo;
      this.price = data.price;
      this.stock = data.stock;
      ProductManager.events.push(this);
    }
    // create(data)
    create(data) {
      const event = {
          id: ProductManager.events.length === 0 ? 1 : ProductManager.events[ProductManager.events.length-1].id+1,
          title: data.title,
          photo: data.photo,
          price: data.price,
          stock: data.stock,
      }
      ProductManager.events.push(event);
    }
  // read()
    read() {
      return ProductManager.events
    }
  // readOne(id)
    readOne(id) {
      return ProductManager.events.find(each => each.id === Number(id))
    }
  }
  
  const events = new ProductManager({
    title: 'StarWars IV',
    photo: 'photoIV',
    price: '100',
    stock: 'yes',
  });
  events.create({
    title: 'StarWars V',
    photo: 'photoV',
    price: '120',
    stock: 'yes',
  });
  events.create({
    title: 'StarWars VI',
    photo: 'photoVI',
    price: '150',
    stock: 'yes',
  })

  console.log(events.read());
  
  console.log(events.readOne(2)); //read event by ID

  