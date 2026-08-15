# BabyBox Laboratory

## Discovery 001

Una capacidad es una unidad independiente que transforma una prop en clases CSS.

Flujo:

Prop
→ Capability
→ CSS Class
→ Visual Result

---

## Discovery 002

Box no implementa capacidades.

Box solo orquesta.

Las capacidades viven en `capabilities/`.

---

## Discovery 003

Una nueva capacidad requiere:

1. Crear `<capability>.ts`.
2. Exportarla en `capabilities/index.ts`.
3. Registrarla en `capabilities.ts`.
4. Agregar las clases CSS correspondientes.
5. Crear una Story para validarla.

No abstraer lo que la plataforma ya sabe hacer. Abstraer aquello a lo que nuestro sistema aporta significado.

Si la Web ya tiene la capacidad, Box la conserva. Si nuestro Design System necesita interpretarla, entonces se convierte en una capability.

<Box>
  │
  ├── HTML nativo ───────────────→ DOM
  │   id
  │   className
  │   aria-*
  │   ...
  │
  └── Design System
      direction
      between
      align
      ...
          ↓
       compose()
          ↓
     capabilities
          ↓
       clases CSS

las capabilities simples no necesitan implementación individual cuando todas siguen la misma transformación prop → box--{prop}-{value}.

BabyBox tendrá solo el código que sea necesario para expresar una capacidad real. Si algo puede eliminarse sin perder comportamiento, se elimina.

Una Box no tiene que controlar todo sobre sí misma. Parte de su comportamiento puede surgir de la relación entre Boxes.

Box = capacidades generales de construcción visual. Interaction = capacidades generales de comportamiento interactivo. Ninguna conoce Button, Card, Navbar, etc.

# Consolidación Arquitectónica 28/07/2026

Se realizó una auditoría completa de la arquitectura actual de Laboratory antes de continuar con nuevos componentes.

## Objetivo

Validar la arquitectura existente antes de seguir agregando funcionalidades, eliminando únicamente aquello que realmente haya quedado obsoleto o duplicado.

## Componentes revisados

- Button
- Button Types
- Box
- Box Types
- Compose
- Compose Interaction
- Interaction Types
- box.css
- interaction.css

## Conclusiones

### Arquitectura

La arquitectura se encuentra estable y consistente.

Los componentes mantienen responsabilidades claras y la infraestructura está correctamente separada.

No se encontraron responsabilidades mezcladas ni dependencias innecesarias entre Box, Interaction y Button.

### Duplicación

No se detectó duplicación significativa en la implementación.

La mayoría de las repeticiones encontradas corresponden a CSS explícito y son consideradas aceptables por simplicidad y mantenibilidad.

### Deuda técnica

Se detectaron únicamente dos candidatos reales para consolidación.

#### 1. Eliminar `surface`

`surface` y `background` representan el mismo concepto.

La decisión arquitectónica es que **Box debe conocer colores**, no un concepto especial de "Surface".

Todos los componentes deben utilizar `background` como capacidad visual.

Esta simplificación unifica el lenguaje del Design System.

#### 2. Revisar `shadow` en `compose`

`shadow` aparece en `capabilityNames`, pero actualmente no existe en `BoxProps`.

Se debe validar si corresponde eliminarlo por ser un remanente o implementarlo correctamente.

## Decisiones

Durante esta auditoría no se realizarán cambios.

Primero se revisa completamente la arquitectura.

Una vez finalizada la auditoría se ejecutará un único proceso de consolidación con todos los cambios aprobados.

## Estado

La arquitectura actual de Laboratory puede considerarse estable.

Las futuras abstracciones (Recipes, componentes compartidos, etc.) solo se crearán cuando existan suficientes componentes que justifiquen su existencia mediante evidencia y no por anticipación.

Box representa un elemento HTML genérico. Su responsabilidad es proporcionar la infraestructura común de cualquier elemento visual. No conoce conceptos tipográficos ni componentes específicos.

Box
↑
Representa un elemento HTML.

Text
↑
Especializa Box para contenido tipográfico.

Heading
↑
Especializa Text para encabezados.

Button
↑
Especializa Box para interacción y utiliza Text para su contenido.

Box representa un elemento HTML. No representa un componente, un layout ni texto. Representa el concepto más básico de la plataforma web: un elemento del DOM.
Todo lo demás son especializaciones.
HTML Element
↓
Box
Después:
Box
├── Text
├── Button
├── Card
├── Section
├── ...
Y algunos siguen especializándose:
Box
└── Text
├── Heading
└── Label

Cada especialización define su propia API pública.
Internamente puede usar Box.
Pero externamente solo expone las capacidades relacionadas con su responsabilidad.

Cuando un componente redefine una prop nativa de HTML (por ejemplo color, size, width, etc.), esa prop debe omitirse de ComponentPropsWithoutRef<T> antes de volver a declararla con el tipo del Design System.
