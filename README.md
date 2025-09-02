# Gestor de Tareas

Gestor de Tareas es una aplicación web desarrollada con React y Vite que permite crear, visualizar, editar y eliminar tareas de manera sencilla y eficiente.

**Autores:** Santiago Gomez Gonzalez, Rubén Darío Gaspar

## Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Componentes Principales](#componentes-principales)
- [Gestión de Estado con useState](#gestión-de-estado-con-usestate)
- [Estilos](#estilos)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## Características

- Añadir nuevas tareas.
- Marcar tareas como completadas.
- Editar y eliminar tareas existentes.
- Interfaz intuitiva y responsiva.

## Instalación

1. Clona el repositorio:
   ```powershell
   git clone <URL-del-repositorio>
   ```
2. Instala las dependencias:
   ```powershell
   cd vite-project
   npm install
   ```
3. Inicia la aplicación:
   ```powershell
   npm run dev
   ```

## Estructura del Proyecto

```
vite-project/
│
├── public/                # Archivos públicos y estáticos
│   └── vite.svg
│
├── src/                   # Código fuente de la aplicación
│   ├── assets/            # Imágenes y recursos
│   │   └── react.svg
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilos globales de App
│   ├── index.css          # Estilos globales
│   ├── main.jsx           # Punto de entrada de React
│   ├── TodoForm.jsx       # Formulario para agregar/editar tareas
│   ├── TodoForm.css       # Estilos de TodoForm
│   ├── TodoItem.jsx       # Componente para cada tarea individual
│   ├── TodoItem.css       # Estilos de TodoItem
│   ├── TodoList.jsx       # Listado de tareas
│   ├── TodoList.css       # Estilos de TodoList
│
├── index.html             # HTML principal
├── package.json           # Dependencias y scripts
├── vite.config.js         # Configuración de Vite
├── eslint.config.js       # Configuración de ESLint
└── README.md              # Documentación del proyecto
```

## Uso

- Al iniciar la aplicación, verás una lista de tareas.
- Puedes agregar una nueva tarea usando el formulario.
- Haz clic en una tarea para marcarla como completada.
- Usa los botones de editar o eliminar para modificar o borrar tareas.

## Componentes Principales

- **App.jsx**: Componente raíz que gestiona el estado global de las tareas y coordina la interacción entre los demás componentes.
- **TodoForm.jsx**: Formulario para crear y editar tareas, utilizando estado local para el texto ingresado.
- **TodoList.jsx**: Renderiza la lista de tareas recibidas como props y delega la visualización de cada tarea a `TodoItem`.
- **TodoItem.jsx**: Representa cada tarea individual, con opciones para completar, editar o eliminar.

## Gestión de Estado con useState

En este proyecto se utiliza el hook `useState` de React para manejar el estado interno de los componentes funcionales. Este hook permite almacenar y actualizar información dinámica, como la lista de tareas o los datos de los formularios.

### Ejemplo en App.jsx

En el componente principal [`App`](src/App.jsx), `useState` se emplea para gestionar la lista de tareas:

```jsx
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  // ...
}
```

- `todos`: almacena el arreglo de tareas.
- `setTodos`: función para actualizar el estado de las tareas.

### Ejemplo en TodoForm.jsx

En el componente [`TodoForm`](src/TodoForm.jsx), `useState` se utiliza para manejar el texto ingresado por el usuario:

```jsx
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');
  // ...
}
```

- `input`: almacena el valor actual del campo de texto.
- `setInput`: actualiza el valor del campo de texto conforme el usuario escribe.

### Beneficios

- Permite que cada componente administre su propio estado de manera independiente.
- Facilita la actualización y renderizado dinámico de la interfaz.
- Hace que la aplicación sea más interactiva y responsiva.

## Estilos

Los estilos están organizados por componente para facilitar el mantenimiento y la escalabilidad. Se utilizan archivos `.css` específicos para cada componente.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para sugerencias o mejoras.

## Licencia

Este proyecto está bajo la licencia MIT.

---

Desarrollado con ❤️ por Santiago y Rubén Darío Gaspar usando React