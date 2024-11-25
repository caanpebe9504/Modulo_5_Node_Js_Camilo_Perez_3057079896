# API de Estudiantes

¡Hola! Te comparto por acá esta API básica para gestionar una lista de estudiantes.

## Endpoints

### `GET /students`

Devuelve la lista completa de estudiantes. Ejemplo http://localhost:3002/students

#### Respuesta:

```json
[
  { "id": 1, "name": "Alice", "age": 20, "major": "Computer Science" },
  { "id": 2, "name": "Bob", "age": 22, "major": "Mathematics" },
  { "id": 3, "name": "Charlie", "age": 21, "major": "Physics" }
]
```

### `GET /students/:id`

Devuelve los detalles de un estudiante específico según el id proporcionado. Ejemplo: http://localhost:3002/students/1

#### Respuesta:

```json
{
  "id": 1,
  "name": "Alice",
  "age": 20,
  "major": "Computer Science"
}
```

### `DELETE /students/:id`

Elimina un estudiante específico por su id. Ejemplo: http://localhost:3002/students/2

#### Respuesta:

```json
{
  "message": "Estudiante con ID 2 eliminado"
}
```

## Instrucciones de uso

1. Clona este repositorio o descarga los archivos.

2. Ejecuta npm install para instalar las dependencias necesarias.

3. Inicia el servidor con node server.js.

4. Prueba los endpoints utilizando Postman o cualquier otra herramienta HTTP.






