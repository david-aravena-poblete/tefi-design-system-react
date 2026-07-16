# 🛒 Departamentos

## 🟦 React

**Dueño:** Meta

React proporciona las herramientas necesarias para construir componentes reutilizables.

---

### Tipado *(ayuda a TypeScript a entender el código)*

📦 ComponentProps
> Hereda automáticamente todas las características (props) de un elemento HTML o de otro componente React. Ejemplo: `onClick`, `disabled`, `className`, `style`, etc.

📦 ComponentPropsWithRef
> Igual que ComponentProps, pero incluyendo una referencia (ref) al elemento.

📦 ComponentPropsWithoutRef
> Igual que ComponentProps, pero sin incluir una referencia (ref).

📦 ElementType
> Permite elegir qué elemento o componente se renderizará. Es la base del patrón `as`.

📦 ComponentType
> Representa cualquier componente React.

📦 PropsWithChildren
> Agrega automáticamente la propiedad `children`, permitiendo recibir contenido entre las etiquetas del componente.

📦 Ref
> Es una referencia directa a un elemento o componente, útil cuando necesitamos acceder a él sin buscarlo en la página.

---

### Componentes *(piezas especiales que React ofrece)*

📦 Fragment
> Agrupa varios elementos sin crear un elemento HTML adicional.

📦 Suspense
> Permite mostrar un estado temporal mientras otro componente o información termina de cargarse.

📦 StrictMode
> Ayuda a detectar posibles errores y malas prácticas durante el desarrollo.

📦 Profiler
> Permite medir el rendimiento de los componentes para encontrar posibles mejoras.

---

### Hooks *(herramientas que agregan comportamiento a los componentes)*

📦 useState
> Guarda información que puede cambiar con el tiempo.

📦 useEffect
> Ejecuta una acción cuando ocurre un cambio o después de renderizar un componente.

📦 useMemo
> Recuerda el resultado de un cálculo para no volver a hacerlo innecesariamente.

📦 useCallback
> Recuerda una función para evitar crearla nuevamente en cada render.

📦 useContext
> Comparte información entre varios componentes sin tener que enviarla manualmente por props.

📦 useId
> Genera identificadores únicos.

📦 useRef
> Guarda una referencia o un valor que permanece entre renderizados sin provocar un nuevo render.

📦 useReducer
> Permite manejar estados más complejos mediante acciones.

📦 useImperativeHandle
> Personaliza lo que otros componentes pueden hacer cuando utilizan un `ref`.

📦 useTransition
> Permite dar prioridad a las actualizaciones más importantes para mantener la interfaz fluida.

📦 useDeferredValue
> Retrasa actualizaciones menos importantes para mejorar el rendimiento.

📦 useOptimistic
> Muestra un resultado esperado antes de recibir la respuesta definitiva del servidor.

📦 useActionState
> Facilita el manejo del estado de acciones, especialmente en formularios.

---

### Renderizado *(cómo React muestra los componentes en pantalla)*

📦 createPortal
> Renderiza un componente fuera del lugar donde normalmente estaría en el árbol de React.

📦 lazy
> Carga un componente únicamente cuando realmente se necesita.

---

## 🟧 HTML

**Dueño:** WHATWG

HTML define la estructura y el significado del contenido que muestra el navegador.

---

### Elementos *(las etiquetas HTML)*

📦 div
> Contenedor genérico.

📦 span
> Contenedor para contenido en línea.

📦 button
> Botón interactivo.

📦 input
> Campo para ingresar información.

📦 textarea
> Campo de texto de varias líneas.

📦 label
> Etiqueta descriptiva para un campo.

📦 form
> Agrupa campos para enviar información.

📦 img
> Muestra una imagen.

📦 picture
> Permite servir diferentes imágenes según el dispositivo.

📦 section
> Agrupa contenido relacionado.

📦 article
> Contenido independiente.

📦 header
> Encabezado.

📦 footer
> Pie de página.

📦 nav
> Navegación.

📦 aside
> Contenido secundario.

📦 main
> Contenido principal.

📦 dialog
> Ventana modal nativa.

📦 details
> Contenedor desplegable.

📦 summary
> Encabezado del componente details.

📦 table
> Tabla.

📦 ul
> Lista sin orden.

📦 ol
> Lista ordenada.

📦 li
> Elemento de una lista.

📦 video
> Reproductor de video.

📦 audio
> Reproductor de audio.

---

### Atributos *(características de las etiquetas HTML)*

📦 class
> Asigna una clase CSS.

📦 style
> Aplica estilos directamente.

📦 id
> Identificador único.

📦 title
> Texto informativo al pasar el mouse.

📦 hidden
> Oculta el elemento.

📦 disabled
> Deshabilita el elemento.

📦 readonly
> Permite ver pero no editar.

📦 placeholder
> Texto de ayuda.

📦 href
> Dirección de un enlace.

📦 src
> Dirección de un recurso.

📦 alt
> Descripción de una imagen.

📦 role
> Describe la función del elemento para accesibilidad.

📦 tabindex
> Controla el orden de navegación con teclado.

---

### Accesibilidad *(ayuda a personas que utilizan tecnologías asistivas)*

📦 aria-*
> Información adicional para lectores de pantalla.

📦 data-*
> Información personalizada utilizada por la aplicación.

---

## 🟨 CSS

**Dueño:** CSS Working Group

CSS controla la apariencia y distribución visual de los elementos.

---

### Layout *(cómo se organizan los elementos)*

📦 display
> Define el comportamiento visual de un elemento.

📦 flex
> Distribuye elementos en una fila o columna.

📦 grid
> Organiza elementos en una cuadrícula.

📦 position
> Controla la posición de un elemento.

📦 z-index
> Controla qué elemento queda encima de otro.

---

### Tamaño

📦 width
> Ancho.

📦 height
> Alto.

📦 min-width
> Ancho mínimo.

📦 max-width
> Ancho máximo.

📦 aspect-ratio
> Mantiene una proporción entre ancho y alto.

---

### Espaciado

📦 margin
> Espacio exterior.

📦 padding
> Espacio interior.

📦 gap
> Separación entre elementos.

---

### Tipografía

📦 font
> Fuente.

📦 line-height
> Altura de línea.

📦 text-align
> Alineación del texto.

---

### Color

📦 color
> Color del texto.

📦 background
> Fondo.

📦 border
> Borde.

📦 color-mix()
> Mezcla colores.

---

### Animaciones

📦 transition
> Anima cambios entre estados.

📦 animation
> Ejecuta animaciones.

📦 @starting-style
> Define el estado inicial de una transición.

---

### Responsive

📦 media queries
> Aplica estilos según el dispositivo.

📦 container queries
> Aplica estilos según el tamaño del contenedor.

---

### CSS Moderno

📦 nesting
> Permite anidar reglas CSS.

📦 cascade layers
> Organiza prioridades entre estilos.

📦 :has()
> Selecciona elementos según sus hijos.

📦 :is()
> Agrupa selectores.

📦 :where()
> Agrupa selectores sin aumentar especificidad.

📦 clamp()
> Limita un valor entre mínimo y máximo.

📦 min()
> Usa el menor valor.

📦 max()
> Usa el mayor valor.

---

## 🟪 TypeScript

**Dueño:** Microsoft

TypeScript agrega tipos para escribir código más seguro y fácil de mantener.

---

### Tipos *(describen la forma de los datos)*

📦 type
> Define un tipo.

📦 interface
> Define la estructura de un objeto.

📦 enum
> Conjunto de valores posibles.

📦 keyof
> Obtiene las claves de un tipo.

📦 typeof
> Obtiene el tipo de una variable.

📦 infer
> Permite deducir un tipo automáticamente.

📦 extends
> Extiende o restringe un tipo.

---

### Utilidades *(herramientas para crear nuevos tipos)*

📦 Partial
> Hace opcionales todas las propiedades.

📦 Required
> Hace obligatorias todas las propiedades.

📦 Pick
> Selecciona propiedades.

📦 Omit
> Excluye propiedades.

📦 Record
> Crea un objeto con claves y valores tipados.

📦 Exclude
> Elimina tipos de una unión.

📦 Extract
> Extrae tipos de una unión.

📦 ReturnType
> Obtiene el tipo que devuelve una función.

---

### Moderno

📦 satisfies
> Comprueba que un objeto cumple un tipo sin perder información.

📦 const assertions
> Conserva valores literales.

📦 Generics
> Permiten crear tipos reutilizables.

---

## 🟩 JavaScript

**Dueño:** TC39

JavaScript proporciona el lenguaje que ejecuta la lógica de la aplicación.

📦 Array
> Lista de elementos.

📦 Object
> Conjunto de propiedades.

📦 Map
> Colección de pares clave-valor.

📦 Set
> Colección de valores únicos.

📦 WeakMap
> Mapa con referencias débiles.

📦 Promise
> Representa una operación asíncrona.

📦 Date
> Manejo de fechas.

📦 Intl
> Internacionalización.

📦 URL
> Manipulación de direcciones web.

📦 JSON
> Formato para intercambiar información.

---

## 🟫 Browser APIs

**Dueño:** Plataforma Web

Son capacidades que ofrece directamente el navegador.

📦 Fetch API
> Realiza peticiones HTTP.

📦 AbortController
> Cancela operaciones en curso.

📦 ResizeObserver
> Detecta cambios de tamaño.

📦 IntersectionObserver
> Detecta cuándo un elemento entra o sale de la pantalla.

📦 MutationObserver
> Detecta cambios en el DOM.

📦 Clipboard API
> Copia y pega información.

📦 View Transitions API
> Crea transiciones entre vistas.

📦 Popover API
> Muestra popovers nativos.

📦 Fullscreen API
> Activa pantalla completa.

📦 History API
> Manipula el historial del navegador.

📦 Navigator API
> Proporciona información del navegador y del dispositivo.

📦 Storage API
> Guarda información localmente.

---

## 🟢 Tefi

**Dueño:** Tefi Design System

Aquí viven únicamente las capacidades que la plataforma no ofrece y que aportan valor al Design System.

📦 Tokens
> Valores de diseño reutilizables (colores, espacios, tamaños, tipografía, etc.).

📦 Theme
> Define la apariencia visual (por ejemplo: claro u oscuro).

📦 Brand
> Permite adaptar el Design System a distintas marcas.

📦 Variant
> Define diferentes versiones de un mismo componente.

📦 State
> Representa estados visuales como hover, pressed, disabled, loading, etc.

📦 Design Tokens
> Sistema centralizado de valores visuales utilizados por toda la librería.

📦 Component API
> Define cómo se utiliza un componente desde el código.

📦 Composition
> Permite construir componentes combinando capacidades existentes en lugar de crear nuevas.