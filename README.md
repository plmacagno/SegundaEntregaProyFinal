# Segunda Entrega Proyecto Final


## Persistencia

En el archivo .env se puede cambiar la persistencia de productos y carritos, por defecto en json. Podés cambiar a firebase, memoria ó mongodb.

## Instrucciones Postman

### Ruta '/api/productos/'

-   GET: '/'  
    Lista todos los productos disponibles.

-   GET: '/:id'  
    Lista un producto por su id.

-   POST: '/'  
    Incorpora productos al listado.

-   PUT: '/:id'  
    Actualiza un producto por su id.
   
-   DELETE: '/:id'  
    Borra un producto por su id.

-   DELETE: '/'  
    Borra todos los productos.

### Ruta '/api/carritos/'

-   POST: '/'  
    Crea un carrito y devuelve su id.

-   GET: '/'  
    Lista todos los carritos creados.

-   GET: '/:id'  
    Lista todos el carrito por 'id'.

-   DELETE: '/:id'  
    Elimina el carrito por 'id'.

