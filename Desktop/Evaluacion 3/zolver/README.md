# Zolver - Marketplace de Servicios

## Cliente y problemática
**Cliente:** Trabajadores independientes (gasfíteres, contratistas, especialistas en remodelación) y usuarios particulares que requieren servicios de mantenimiento para el hogar.
**Contexto y problemática detectada:** El mercado de oficios funciona principalmente por el boca a boca. Existe una dificultad constante para conectar de forma segura y rápida a los especialistas con los clientes que los necesitan urgentemente.

## Descripción de la solución
Desarrollo de una Single Page Application (SPA) que actúa como un marketplace digital. La plataforma centraliza la oferta y demanda de servicios de oficios, permitiendo a los usuarios buscar especialistas por categoría, administrarlos desde un panel local y mejorar la experiencia visual del producto.

## Funcionalidades implementadas
- Búsqueda dinámica de especialistas mediante una barra de búsqueda.
- Visualización de tarjetas de perfil de los trabajadores en un panel profesional.
- Creación, edición y eliminación de perfiles de especialistas mediante CRUD.
- Persistencia local con LocalStorage para conservar los datos al recargar la página.
- Integración inicial con una API externa para cargar datos de ejemplo si el almacenamiento local está vacío.
- Rediseño visual de la interfaz con un enfoque más profesional y consistente.

## Estructura del proyecto
El proyecto está construido con React y Vite, manteniendo una separación de responsabilidades:
- `src/components/`: Contiene los componentes modulares de la interfaz (`SearchBar.jsx`, `Header.jsx`, `WorkerCard.jsx`, `WorkerForm.jsx`).
- `src/App.jsx`: Componente principal que orquesta la vista y agrupa los subcomponentos.
- `src/App.css`: Estilos visuales y estructura de diseño de la aplicación.

## Estado del repositorio
- Rama de trabajo creada: `feat/ui-profesional-readme`
- Objetivo de la rama: dejar la app con una presentación más profesional y documentar el proceso para la evaluación.

## Prompts utilizados durante el desarrollo
A continuación se registran los prompts que fueron útiles para construir y mejorar la app en orden para la evaluación.

### Prompt 1 (Planificación)
**Texto:** "@workspace Ayúdame a definir la estructura de carpetas dentro de `src` para un nuevo proyecto React + Vite llamado Zolver, considerando las mejores prácticas para separar componentes modulares."

- **Sugerencia de la IA:** Recomendó crear una carpeta dedicada `src/components/` para alojar archivos individuales reutilizables y mantener `App.jsx` solo como orquestador.
- **Decisión:** Se implementó la estructura sugerida para mantener el código limpio y preparado para escalar.

### Prompt 2 (Generación de Código)
**Texto:** "(Seleccionando el archivo vacío `SearchBar.jsx`) Genera un componente de React que renderice un formulario de búsqueda. Debe incluir un input de texto y un botón, y utilizar el hook `useState` para controlar el valor ingresado por el usuario."

- **Sugerencia de la IA:** Generó el código base del componente implementando `e.preventDefault()` en el formulario y enlazando el estado al input de forma controlada.
- **Ajustes realizados:** Se modificaron los estilos en línea generados por la IA para adaptarlos a la paleta de colores oscura planificada para Zolver.

### Prompt 3 (Depuración de Errores)
**Texto:** "¿Por qué mi aplicación de Vite muestra una pantalla en blanco después de importar el nuevo componente `SearchBar` en `App.jsx`? No hay errores en la terminal."

- **Sugerencia de la IA:** El asistente indicó que este comportamiento suele ocurrir por archivos con cambios sin guardar (estado modificado en el editor) o por la necesidad de forzar la recarga del servidor de Vite local.
- **Decisión:** Se procedió a utilizar la función "Guardar todo" del IDE y abrir la aplicación en un navegador externo, resolviendo el problema de renderizado.

### Prompt 4 (Refinamiento UI/UX y Estilos Globales)
**Texto:** "El diseño inicial se ve plano y centrado. ¿Cómo modifico los estilos en Vite para que ocupe el 100% de la pantalla, tenga un diseño oscuro profesional y los botones sean interactivos?"

- **Sugerencia de la IA:** El asistente proporcionó un reseteo CSS para `index.css` (`margin: 0`, `width: 100vw`), recomendó usar CSS Grid para las tarjetas e indicó cómo usar eventos como `onMouseEnter` y `onClick` en línea para interactividad.
- **Decisión y Ajustes:** Se aplicó el rediseño completo a la interfaz, logrando una vista de escritorio envolvente y agregando alertas interactivas a los botones de "Ver Perfil" e "Iniciar Sesión" para simular la navegación futura.

### Prompt 5 (Resolución de errores de sintaxis)
**Texto:** "Recibí un error [PARSE_ERROR] Unexpected token en `Header.jsx` tras actualizar el botón de login. ¿Qué pudo fallar?"

- **Sugerencia de la IA:** Identificó que al copiar y pegar fragmentos de código, se omitieron inadvertidamente las etiquetas de cierre `</nav>`, `</header>` y los paréntesis de la función.
- **Decisión:** Se sustituyó el bloque completo del componente para asegurar la integridad de la estructura JSX y resolver el conflicto de compilación de Vite.

## Explicación general del avance realizado
En esta evaluación se construyó la base técnica de la SPA utilizando React y Vite. Se implementó la estructura de carpetas, se limpiaron los archivos por defecto y se creó un componente funcional (`SearchBar`) que utiliza el hook `useState` para el manejo de estado en tiempo real. Además, se configuró el control de versiones con Git, respetando el uso de ramas y commits descriptivos, dejando el entorno preparado para la futura integración de persistencia de datos.

## Explicación general del avance realizado en tu README.md
"Actualmente, la barra de búsqueda implementa el hook `useState` para capturar el valor de entrada, el cual se refleja dinámicamente en la interfaz como indicador de estado. La lógica de filtrado de las tarjetas de especialistas ha sido planificada para la siguiente etapa del proyecto, donde se integrará con una fuente de datos (JSON/API) y se realizarán operaciones de filtrado (`filter`) sobre el estado global de la lista de trabajadores."

### Prompt Evaluación 4 - Fase 1 (Persistencia Local)
**Texto:** "Necesito implementar `LocalStorage` en `App.jsx` para que la lista de especialistas no se borre al recargar la página. ¿Cómo inicializo el estado con los datos guardados?"

- **Sugerencia IA:** Utilizar una función flecha dentro de `useState` para leer `localStorage.getItem` en la carga inicial, y un `useEffect` para guardar los cambios cada vez que el estado se actualice.
- **Decisión:** Se implementó esta estructura en `App.jsx` para garantizar la persistencia de datos.

### Prompt Evaluación 4 - Fase 2 (Operaciones CRUD y Validaciones)
**Texto:** "Crea un componente `WorkerForm.jsx` que permita agregar y editar trabajadores. Debe incluir validaciones básicas para que no se envíen campos vacíos y botones para Editar/Eliminar en `WorkerCard.jsx`."

- **Sugerencia IA:** Crear el formulario con `useState` para cada campo, aplicar validaciones con un `if (!nombre.trim()) return`, y pasar las funciones de CRUD desde `App.jsx` mediante props a las tarjetas y al formulario.
- **Decisión:** Se integró el componente `WorkerForm` y se añadieron los botones de acción en `WorkerCard`, logrando el CRUD completo y manejando los datos actualizados hacia el componente padre.

### Prompt Evaluación 4 - Fase 3 (Integración Externa y Errores)
**Texto:** "¿Cómo consumo datos de una API externa en React para cargar especialistas de prueba si el `LocalStorage` está vacío, y cómo manejo los errores si la API falla?"

- **Sugerencia IA:** Usar `useEffect` con una función asíncrona (`async/await`) haciendo `fetch` a JSONPlaceholder. Para el manejo de errores, envolver la petición en un bloque `try...catch` y mostrar una alerta si falla.
- **Decisión:** Se implementó el `fetch` inicial, mapeando los datos de la API al formato de la aplicación, y logrando un manejo de errores robusto.

## Cómo ejecutar
```bash
npm install
npm run dev
```

## Notas para la evaluación
- El proyecto mantiene la lógica base solicitada para la evaluación.
- Se aplicaron mejoras visuales de forma cuidadosa para no romper la arquitectura original.
- Se dejó documentado el proceso en este README para facilitar la revisión del trabajo.