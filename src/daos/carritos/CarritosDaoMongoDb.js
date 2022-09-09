import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js";

class CarritosDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super("carrito", {
            productos: { type: [], required: true },
        });
    }

    async guardar(carrito = { productos: [] }) {
        return super.guardar(carrito);
    }
}

export default CarritosDaoMongoDb;