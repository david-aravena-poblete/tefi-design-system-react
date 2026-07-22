# Tefi Design System Constitution

Version: 1.0.0

> La Constitución del Tefi Design System es la única fuente oficial de verdad del proyecto.
>
> Define la filosofía, la arquitectura, los estándares, las metodologías y las decisiones permanentes que gobiernan la evolución del Design System.
>
> Todo componente, refactorización, revisión o contribución debe cumplir esta Constitución.
>
> Cuando exista una contradicción entre el código y esta Constitución, siempre prevalecerá esta Constitución.
>
> Ninguna decisión permanente puede existir únicamente en conversaciones, memoria de una IA o conocimiento implícito.
>
> Toda decisión permanente debe incorporarse primero a esta Constitución y posteriormente al código.

---

# 1. Objetivo

El objetivo de esta Constitución es garantizar que cualquier desarrollador, incluida una IA, pueda desarrollar el Design System utilizando exactamente los mismos criterios.

Todas las decisiones deben favorecer:

- Simplicidad.
- Consistencia.
- Legibilidad.
- Mantenibilidad.
- Escalabilidad.
- Evolución continua.

---

# 2. Filosofía

## La plataforma primero

Siempre preferir las capacidades nativas de:

- HTML
- CSS
- JavaScript
- TypeScript
- React

antes de crear una abstracción propia.

---

## React moderno

El Design System utilizará siempre las prácticas recomendadas por la versión estable más reciente de React.

No se mantendrán patrones únicamente por compatibilidad histórica.

---

## Composición antes que configuración

Cuando un problema pueda resolverse mediante composición, esa solución tendrá prioridad sobre la creación de nuevas props.

---

## API mínima

Cada prop debe justificar su existencia.

Si React, HTML o la composición ya resuelven un problema, no agregar una nueva prop.

---

## Una única responsabilidad

Cada componente debe resolver un único problema.

---

## La simplicidad gana

Ante dos soluciones técnicamente correctas, siempre elegir la más simple.

---

## Legibilidad primero

El código se escribe para ser leído.

Todo archivo debe poder entenderse de arriba hacia abajo siguiendo una estructura consistente.

---

## Evolución continua

El Design System es un sistema vivo.

Las reglas pueden evolucionar cuando exista una mejor solución.

Toda mejora debe incorporarse primero a esta Constitución y posteriormente al código.

---

## La Constitución tiene prioridad

El código se adapta a la Constitución.

Nunca la Constitución al código.

---

# 3. Principios de Ingeniería

## La evidencia tiene prioridad

Las decisiones arquitectónicas deben basarse en evidencia obtenida mediante experimentación.

No se modificará una arquitectura únicamente por intuición.

---

## Investigar antes de rediseñar

Ante un problema importante:

1. Formular una hipótesis.
2. Diseñar experimentos pequeños.
3. Obtener evidencia.
4. Documentar la conclusión.
5. Actualizar esta Constitución.
6. Adaptar el código.

---

## Mantener la API pública

Las refactorizaciones internas no deben romper la API pública salvo que exista una decisión constitucional que lo justifique.

---

## Una única fuente de verdad

Toda regla permanente debe existir únicamente en esta Constitución.

---

# 4. Arquitectura

Todo componente debe seguir la misma organización para facilitar su lectura, mantenimiento y evolución.

## TSX

Imports

↓

Component

↓

Tefi Props

↓

React Props

↓

Rest Props

↓

Derived State

↓

Accessibility

↓

Classes

↓

Content

↓

Special States

↓

Render

---

## CSS

Base

↓

Elements

↓

Variants

↓

Sizes

↓

States

---

## Types

Tipos auxiliares

↓

Props públicas

↓

Tipos exportados

---

## Stories

Imports

↓

Meta

↓

Args compartidos

↓

Stories

↓

Play (opcional)

---

## Index

Componente

↓

Tipos

↓

Hooks

↓

Subcomponentes

---

## Hooks

Imports

↓

Tipos

↓

Hook

↓

Derived State

↓

Effects

↓

Handlers

↓

Return

---

# 5. Estándares

## Generales

- Código simple.
- Código legible.
- Nombres claros.
- Responsabilidades claras.
- APIs pequeñas.
- Componentes pequeños cuando sea posible.
- Evitar duplicación innecesaria.
- Evitar abstracciones injustificadas.
- Mantener consistencia en todo el Design System.

---

## React

- Utilizar componentes funcionales.
- Extender `ComponentProps` cuando corresponda.
- Aprovechar las capacidades modernas de React.
- Favorecer composición antes que especialización.

---

## HTML

- Utilizar HTML semántico.
- Evitar `div` innecesarios.
- Aprovechar las capacidades nativas del navegador.

---

## CSS

- No utilizar estilos inline.
- Agrupar reglas por responsabilidad.
- Mantener un orden consistente.
- Evitar duplicación.
- Mantener reglas pequeñas.

---

## Accesibilidad

Todo componente debe considerar accesibilidad desde su primera versión.

---

# 6. Component Specification

Antes de implementar un componente debe existir una especificación.

Ningún componente podrá implementarse directamente.

(Mantener aquí el formato que ya definiste.)

---

# 7. Checklist de revisión

(Mantener exactamente el checklist actual.)

---

# 8. Base de Conocimiento

Aquí se registran todas las decisiones permanentes del proyecto.

---

## KB-001 — Componentes Polimórficos

**Estado**

✅ Resuelto

**Problema**

TypeScript pierde la inferencia de `ComponentPropsWithoutRef<T>` al reconstruir objetos mediante `object rest`.

**Investigación**

Se evaluó el contrato polimórfico, `MergeProps`, `renderPolymorphic` y múltiples implementaciones.

Los experimentos demostraron que el contrato es correcto y que la limitación pertenece al compilador.

**Decisión**

Se mantiene la arquitectura oficial.

Cuando sea necesario se permite un cast localizado a `ComponentPropsWithoutRef<T>`.

No se debe rediseñar la arquitectura por esta limitación.

**Revisión futura**

Volver a evaluar cuando TypeScript mejore la inferencia sobre `object rest`.

---

# 9. Evolución de la Constitución

Cuando se identifique una mejor práctica:

1. Analizar.
2. Experimentar.
3. Validar.
4. Actualizar la Constitución.
5. Adaptar el código.

Nunca modificar un componente ignorando esta Constitución.

---

# 10. Regla de Oro

Toda decisión debe mejorar al menos uno de estos principios:

- Simplicidad.
- Consistencia.
- Legibilidad.
- Mantenibilidad.
- Escalabilidad.

Si una regla deja de aportar valor, debe revisarse.

La Constitución evoluciona para que el Design System también evolucione.