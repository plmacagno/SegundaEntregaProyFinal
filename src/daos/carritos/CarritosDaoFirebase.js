import ContenedorFirebase from "../../contenedores/ContenedorFirebase.js";

class CarritosDaoFirebase extends ContenedorFirebase {
    constructor() {
        super("carrito");
    }

    async guardar(carrito = { productos: [] }) {
        return super.guardar(carrito);
    }
}

export default CarritosDaoFirebase;