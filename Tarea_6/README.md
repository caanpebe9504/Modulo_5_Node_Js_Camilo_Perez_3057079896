# API de Productos

¡Hola de nuevo! 

Te comparto está API básica para gestionar una lista de productos.

## Endpoints

### `GET /products`

Devuelve la lista completa de productos.

#### Respuesta:

```json
[
  { "id": 1, "name": "Laptop", "price": 999.99, "category": "Electronics" },
  { "id": 2, "name": "Chair", "price": 49.99, "category": "Furniture" },
  { "id": 3, "name": "Pen", "price": 1.99, "category": "Stationery" }
]
```
### `POST /products`

Agrega un nuevo producto a la lista de productos.

### Estructura del nuevo producto para la solicitud:


```
{
  "name": "Phone",
  "price": 499.99,
  "category": "Electronics"
}

```
### Respuesta: 

```
{
  "id": 4,
  "name": "Phone",
  "price": 499.99,
  "category": "Electronics"
}

```

## Instrucciones de Uso

1. Clona este repositorio o descarga los archivos.

2. Ejecuta npm install para instalar las dependencias necesarias.

3. Inicia el servidor con node server.js.

4. Prueba los endpoints utilizando Postman o cualquier otra herramienta HTTP.
