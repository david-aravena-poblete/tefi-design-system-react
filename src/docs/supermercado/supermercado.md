# 🛒 Supermercado

## ¿Qué es?

El Supermercado es la base de conocimiento del Tefi Design System.

Reúne todas las capacidades disponibles de la plataforma web moderna para construir componentes reutilizando al máximo lo que ya existe.

No reemplaza React, HTML, CSS, TypeScript, JavaScript ni las APIs del navegador.

Su objetivo es integrarlos y utilizarlos a favor del Design System.

Cada capacidad pertenece a un único departamento y tiene un único dueño. El Supermercado integra capacidades, pero nunca cambia quién es su propietario.

---

## Filosofía

El Tefi Design System es una librería moderna.

Antes de crear una nueva abstracción siempre se debe revisar el Supermercado.

Si la plataforma ya ofrece una solución oficial, moderna y mantenida, esa solución tiene prioridad.

Solo cuando la plataforma no resuelve una necesidad real del Design System se incorpora una nueva capacidad al departamento Tefi.

---

## Objetivo

- Reducir el tamaño del código.
- Reducir la duplicación.
- Aprovechar al máximo la plataforma.
- Facilitar la lectura de los componentes.
- Facilitar la creación de nuevos componentes.
- Mantener una única fuente de verdad.
- Evolucionar junto con la plataforma web.

---

# Regla del Supermercado

Antes de desarrollar una nueva capacidad siempre recorrer los departamentos en este orden:

1. React
2. HTML
3. CSS
4. TypeScript
5. JavaScript
6. Browser APIs
7. Tefi

Solo si ningún departamento ofrece una solución adecuada, esa capacidad podrá incorporarse al departamento Tefi.

---

# 🛒 Departamentos

## 🟦 React
**Dueño:** Meta

### Tipado
- ComponentProps 
- ComponentPropsWithRef
- ComponentPropsWithoutRef
- ElementType
- ComponentType
- PropsWithChildren
- Ref

### Componentes
- Fragment
- Suspense
- StrictMode
- Profiler

### Hooks
- useState
- useEffect
- useMemo
- useCallback
- useContext
- useId
- useRef
- useReducer
- useImperativeHandle
- useTransition
- useDeferredValue
- useOptimistic
- useActionState

### Renderizado
- createPortal
- lazy

---

## 🟧 HTML
**Dueño:** WHATWG

### Elementos
- div
- span
- button
- input
- textarea
- label
- form
- img
- picture
- section
- article
- header
- footer
- nav
- aside
- main
- dialog
- details
- summary
- table
- ul
- ol
- li
- video
- audio

### Atributos
- class
- style
- id
- title
- hidden
- disabled
- readonly
- placeholder
- href
- src
- alt
- role
- tabindex

### Accesibilidad
- aria-*
- data-*

---

## 🟨 CSS
**Dueño:** CSS Working Group

### Layout
- display
- flex
- grid
- position
- z-index

### Tamaño
- width
- height
- min-width
- max-width
- aspect-ratio

### Espaciado
- margin
- padding
- gap

### Tipografía
- font
- line-height
- text-align

### Color
- color
- background
- border
- color-mix()

### Animaciones
- transition
- animation
- @starting-style

### Responsive
- media queries
- container queries

### Modern CSS
- nesting
- cascade layers
- :has()
- :is()
- :where()
- clamp()
- min()
- max()

---

## 🟪 TypeScript
**Dueño:** Microsoft

### Tipos
- type
- interface
- enum
- keyof
- typeof
- infer
- extends

### Utilidades
- Partial
- Required
- Pick
- Omit
- Record
- Exclude
- Extract
- ReturnType

### Moderno
- satisfies
- const assertions
- Generics

---

## 🟩 JavaScript
**Dueño:** TC39

- Array
- Object
- Map
- Set
- WeakMap
- Promise
- Date
- Intl
- URL
- JSON

---

## 🟫 Browser APIs
**Dueño:** Web Platform

- Fetch
- AbortController
- ResizeObserver
- IntersectionObserver
- MutationObserver
- Clipboard API
- View Transitions API
- Popover API
- Fullscreen API
- History API
- Navigator API
- Storage API

---

## 🟢 Tefi

Aquí solo vivirán las capacidades que realmente no existan en ningún otro departamento.

Ejemplos iniciales:

- Tokens
- Theme
- Brand
- Variant
- State
- Design Tokens
- Component API
- Composition