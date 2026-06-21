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
Durante el desarrollo, se utilizó Gemini como apoyo estructurado. Evidencia de prompts:
* **Prompt 1:** "necesito que leas y me expliques todo lo que pide esta evaluación y que una vez que la hayas analizado me expliques paso a paso todo lo que tengo que hacer. Considera que trabajo con Visual Studio Code..."
  * **Decisión:** Se definió la estructura base con Vite y se estableció el flujo de trabajo con ramas en Git.
* **Prompt 2:** "primero asignemos las carpetas que ocuparemos"
  * **Decisión:** Se creó la carpeta `components` para aislar lógicamente los archivos de la interfaz.
* **Prompt 3:** "tengo este codigo en app.jsx debo modificarlo todo por el nuevo que me estas dando ?" (ante error de pantalla en blanco).
  * **Decisión:** Se aplicó la recomendación de la IA para corregir el guardado de archivos pendientes (punto blanco en VS Code) y forzar la recarga del navegador, logrando visualizar el componente `useState` correctamente.

## Explicación general del avance realizado
En esta evaluación se construyó la base técnica de la SPA utilizando React y Vite. Se implementó la estructura de carpetas, se limpiaron los archivos por defecto y se creó un componente funcional (`SearchBar`) que utiliza el hook `useState` para el manejo de estado en tiempo real. Además, se configuró el control de versiones con Git, respetando el uso de ramas y commits descriptivos, dejando el entorno preparado para la futura integración de persistencia de datos.