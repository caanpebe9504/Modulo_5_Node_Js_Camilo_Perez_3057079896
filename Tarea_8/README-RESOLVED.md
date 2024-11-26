# API de Estudiantes

En este proyecto verás una API básica para gestionar estudiantes usando Express.js. Los estudiantes se almacenan en un archivo JSON llamado `students.json`. Verás también cómo usar operaciones CRUD sobre los estudiantes.

## Endpoints disponibles

### 1. Obtener todos los estudiantes

**Método:** `GET /students`

Devuelve la lista de todos los estudiantes almacenados en el sistema.

```
[
  {
    "id": 1,
    "name": "Juan Pérez",
    "age": 21,
    "major": "Ingeniería de Sistemas"
  },
  {
    "id": 2,
    "name": "Ana García",
    "age": 22,
    "major": "Biología"
  }
]
```

### 2. Obtener un estudiante por ID

**Método:** `GET /students/:id`

Devuelve los detalles de un estudiante específico dado su id.

**Parámetros de URL:**

- id: ID del estudiante a buscar.

```
{
  "id": 1,
  "name": "Juan Pérez",
  "age": 21,
  "major": "Ingeniería de Sistemas"
}
```


### 3. Crear un nuevo estudiante

*Método:*  `POST /students`

Crea un nuevo estudiante en el sistema. Los datos del estudiante deben enviarse la solicitud.

**Parámetros para la solicitud:**

* name: Nombre del estudiante (cadena de texto, no vacío).
* age: Edad del estudiante (número entero positivo).
* major: Especialidad del estudiante (cadena de texto, no vacío).

```
{
  "name": "Carlos López",
  "age": 20,
  "major": "Química"
}
```

### 4. Actualizar un estudiante

**Método:** PUT /students/:id

Actualiza los datos de un estudiante específico.

**Parámetros para la solicitud:**

* name: (opcional) Nuevo nombre del estudiante.
* age: (opcional) Nueva edad del estudiante.
* major: (opcional) Nueva especialidad del estudiante.

```
{
  "name": "Carlos López Gómez",
  "age": 21
}
```
### 5. Eliminar un estudiante

**Método:** `DELETE /students/:id`

Elimina un estudiante de la base de datos.

**Parámetros de URL:**

id: ID del estudiante a eliminar.

# Para usar la API:

1. Clona este repositorio o descarga el proyecto.
2. Asegúrate de tener Node.js instalado en tu máquina.
3. Navega a la carpeta del proyecto y ejecuta npm install para instalar las dependencias
4. Ejecuta node server.js
5. Debes ver este mensaje: Servidor corriendo en http://localhost:3002, en la consola. A través de esta url puedes ingresar a los datos en Postman.


