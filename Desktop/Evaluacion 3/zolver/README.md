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

### Prompt 1 - Planificación inicial
- Texto: "@workspace Ayúdame a definir la estructura de carpetas dentro de src para un nuevo proyecto React + Vite llamado Zolver, considerando las mejores prácticas para separar componentes modulares."
- Resultado esperado: organización de componentes en `src/components/` y un `App.jsx` más limpio como orquestador.
- Decisión adoptada: se implementó la estructura modular sugerida.

### Prompt 2 - Componente de búsqueda
- Texto: "Genera un componente de React que renderice un formulario de búsqueda con input y botón, usando useState para controlar el valor ingresado."
- Resultado esperado: componente `SearchBar` funcional y con un estado controlado por React.
- Ajuste realizado: se mejoró la interfaz y el comportamiento para que se vea más profesional.

### Prompt 3 - Depuración de renderizado
- Texto: "¿Por qué mi aplicación de Vite muestra una pantalla en blanco después de importar un componente nuevo en App.jsx?"
- Resultado esperado: encontrar la causa del fallo de renderizado.
- Decisión adoptada: se revisó el estado del editor, los archivos y se reanudó la ejecución del proyecto con Vite.

### Prompt 4 - Rediseño visual
- Texto: "Quiero un diseño oscuro, profesional, con botones interactivos y una vista más completa para la app."
- Resultado esperado: modernizar la interfaz del proyecto con una experiencia más sólida.
- Ajuste realizado: se aplicó una estructura visual más limpia, mejor jerarquía de contenido y estilos consistentes.

### Prompt 5 - CRUD y validaciones
- Texto: "Crea un componente WorkerForm.jsx para agregar y editar trabajadores, con validaciones básicas y botones de acción en WorkerCard.jsx."
- Resultado esperado: implementar operaciones CRUD con validación de campos obligatorios.
- Ajuste realizado: se integró el formulario y se añadieron acciones de edición y eliminación.

### Prompt 6 - Persistencia y API externa
- Texto: "Necesito guardar los especialistas en LocalStorage y cargar datos desde una API externa cuando no haya información local."
- Resultado esperado: garantizar persistencia de datos y carga inicial desde API externa si el almacenamiento está vacío.
- Ajuste realizado: se implementó `useState` con inicialización desde `localStorage` y `useEffect` para guardar cambios y cargar datos de ejemplo.

## Evidencia de avance
- Se construyó la base técnica de la SPA con React + Vite.
- Se implementó un panel de administración funcional y visualmente más ordenado.
- Se dejó el proyecto preparado para demostrar habilidades de desarrollo front-end, organización de componentes y uso de herramientas de IA en un entorno real.

## Cómo ejecutar
```bash
npm install
npm run dev
```

## Notas para la evaluación
- El proyecto mantiene la lógica base solicitada para la evaluación.
- Se aplicaron mejoras visuales de forma cuidadosa para no romper la arquitectura original.
- Se dejó documentado el proceso en este README para facilitar la revisión del trabajo.