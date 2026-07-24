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