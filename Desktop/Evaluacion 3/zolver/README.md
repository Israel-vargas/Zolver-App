# Zolver - Marketplace de Servicios

## Cliente y problemática
**Cliente:** Trabajadores independientes (gasfíteres, contratistas, especialistas en remodelación) y usuarios particulares que requieren servicios de mantenimiento para el hogar.
**Contexto y Problemática detectada:** El mercado de oficios funciona principalmente por el "boca a boca". Existe una dificultad constante para conectar de forma segura y rápida a los especialistas con los clientes que los necesitan urgentemente.

## Descripción de la solución
Desarrollo de una Single Page Application (SPA) que actúa como un marketplace digital. La plataforma centraliza la oferta y demanda de servicios de oficios, permitiendo a los usuarios buscar especialistas por categoría y conectar con ellos de forma ágil.

## Funcionalidades propuestas
* Búsqueda dinámica de especialistas mediante una barra de búsqueda.
* Visualización de tarjetas de perfil de los trabajadores (`WorkerCard`).
* (A futuro) Creación, modificación y eliminación de perfiles de especialistas (CRUD).
* (A futuro) Integración con API externa para validación de direcciones y cálculo de tarifas dinámicas.

## Planificación de Integración Externa
Para la evolución de esta plataforma, se contempla la integración con una fuente de datos externa (como la API de Google Maps o similar).
* **¿Qué información se obtendrá?** Datos de geolocalización, cálculo de distancias y validación de direcciones postales.
* **¿Por qué se requiere?** Zolver necesita mostrarle al usuario únicamente los especialistas que tienen cobertura en su comuna o sector específico.
* **¿Cómo aportará valor?** Reducirá drásticamente los tiempos de traslado de los trabajadores y le garantizará al cliente una atención mucho más rápida, optimizando la logística del servicio.

## Estructura del proyecto
El proyecto está construido con React y Vite, manteniendo una separación de responsabilidades:
* `src/components/`: Contiene los componentes modulares de la interfaz (`SearchBar.jsx`, `Header.jsx`, `WorkerCard.jsx`).
* `src/App.jsx`: Componente principal que orquesta la vista y agrupa los subcomponentes.
* `src/App.css`: Estilos visuales de la aplicación.

## Uso de Inteligencia Artificial (Prompts)
Durante el desarrollo, se utilizó un asistente de Inteligencia Artificial integrado en el entorno de Visual Studio Code para agilizar la escritura de código y estructurar el proyecto. Evidencia de prompts utilizados en el chat del IDE:

* **Prompt 1 (Planificación):** "@workspace Ayúdame a definir la estructura de carpetas dentro de `src` para un nuevo proyecto React + Vite llamado Zolver, considerando las mejores prácticas para separar componentes modulares."
  * **Sugerencia de la IA:** Recomendó crear una carpeta dedicada `src/components/` para alojar archivos individuales reutilizables y mantener `App.jsx` solo como orquestador.
  * **Decisión:** Se implementó la estructura sugerida para mantener el código limpio y preparado para escalar.

* **Prompt 2 (Generación de Código):** "(Seleccionando el archivo vacío SearchBar.jsx) Genera un componente de React que renderice un formulario de búsqueda. Debe incluir un input de texto y un botón, y utilizar el hook `useState` para controlar el valor ingresado por el usuario."
  * **Sugerencia de la IA:** Generó el código base del componente implementando `e.preventDefault()` en el formulario y enlazando el estado al input de forma controlada.
  * **Ajustes realizados:** Se modificaron los estilos en línea generados por la IA para adaptarlos a la paleta de colores oscura planificada para Zolver.

* **Prompt 3 (Depuración de Errores):** "¿Por qué mi aplicación de Vite muestra una pantalla en blanco después de importar el nuevo componente `SearchBar` en `App.jsx`? No hay errores en la terminal."
  * **Sugerencia de la IA:** El asistente indicó que este comportamiento suele ocurrir por archivos con cambios sin guardar (estado modificado en el editor) o por la necesidad de forzar la recarga del servidor de Vite local.
  * **Decisión:** Se procedió a utilizar la función "Guardar todo" del IDE y abrir la aplicación en un navegador externo, resolviendo el problema de renderizado.

* **Prompt 4 (Refinamiento UI/UX y Estilos Globales):** "El diseño inicial se ve plano y centrado. ¿Cómo modifico los estilos en Vite para que ocupe el 100% de la pantalla, tenga un diseño oscuro profesional y los botones sean interactivos?"
  * **Sugerencia de la IA:** El asistente proporcionó un reseteo CSS para `index.css` (`margin: 0`, `width: 100vw`), recomendó usar CSS Grid para las tarjetas e indicó cómo usar eventos como `onMouseEnter` y `onClick` en línea para interactividad.
  * **Decisión y Ajustes:** Se aplicó el rediseño completo a la interfaz, logrando una vista de escritorio envolvente y agregando alertas interactivas a los botones de "Ver Perfil" e "Iniciar Sesión" para simular la navegación futura.

* **Prompt 5 (Resolución de errores de sintaxis):** "Recibí un error [PARSE_ERROR] Unexpected token en Header.jsx tras actualizar el botón de login. ¿Qué pudo fallar?"
  * **Sugerencia de la IA:** Identificó que al copiar y pegar fragmentos de código, se omitieron inadvertidamente las etiquetas de cierre `</nav>`, `</header>` y los paréntesis de la función.
  * **Decisión:** Se sustituyó el bloque completo del componente para asegurar la integridad de la estructura JSX y resolver el conflicto de compilación de Vite.
  
## Explicación general del avance realizado
En esta evaluación se construyó la base técnica de la SPA utilizando React y Vite. Se implementó la estructura de carpetas, se limpiaron los archivos por defecto y se creó un componente funcional (`SearchBar`) que utiliza el hook `useState` para el manejo de estado en tiempo real. Además, se configuró el control de versiones con Git, respetando el uso de ramas y commits descriptivos, dejando el entorno preparado para la futura integración de persistencia de datos.