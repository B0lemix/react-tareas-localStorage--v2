# Lista de Tareas en React (v2)

Una aplicación simple de lista de tareas desarrollada con React, Tailwind CSS y LocalStorage.

### v2

- Atomicidad de componentes y utilización del contexto de React para manejar el estado global.
- Añadido React Toastify para notificaciones al añadir/eliminar tareas.
- Mejora gráfica de interfaz UI.

## Características

- Agregar tareas con descripción.
- Eliminar tareas.
- Almacenamiento local para persistencia de datos. (LocalStorage)
- Interfaz de usuario responsiva con Tailwind CSS.
- React Toastify para notificaciones al añadir/eliminar tareas.
- Contexto de React

## Uso

Inicie el servidor con npm run dev.
Simplemente abre el archivo `index.html` en tu navegador para utilizar la aplicación.

### IMPORTANTE

Añadir el siguiente código al archivo de configuracion de Tailwind, para que las clases
de colores dinámicas de fondos de botón y tarjetas (según variable) pueda funcionar correctamente.

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-yellow-200",
    "bg-blue-200",
    "bg-pink-200",
    "bg-purple-200",
    "bg-green-200",
    "hover:bg-yellow-200",
    "hover: bg-blue-200",
    "hover:bg-pink-200",
    "hover:bg-purple-200",
    "hover:bg-green-200",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Contribución

Las contribuciones son bienvenidas. Si encuentras algún problema o tienes alguna sugerencia, por favor, abre un [issue](https://github.com/tu_usuario/tu_repositorio/issues) o envía una solicitud de extracción.

## Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.
