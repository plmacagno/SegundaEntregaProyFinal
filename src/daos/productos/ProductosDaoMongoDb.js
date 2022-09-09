import { Timestamp } from "mongodb";
import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js";

class ProductosDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super("productos", {
             
				name: { type: String, require: true },
				description: { type: String, require: true },
				code: { type: Number, require: true },
				url: { type: String, require: true },
				price: { type: Number, require: true },
				stock: { type: Number, require: true },
				
			});
    }
}

export default ProductosDaoMongoDb;
