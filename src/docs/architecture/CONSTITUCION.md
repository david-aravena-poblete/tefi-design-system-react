Tefi Design System Constitution
Version: 1.1.0
La Constitución del Tefi Design System es la única fuente oficial de verdad del proyecto.
Define la filosofía, la arquitectura, los estándares, las metodologías y las decisiones permanentes que gobiernan la evolución del Design System.
Todo componente, refactorización, revisión o contribución debe cumplir esta Constitución.
Cuando exista una contradicción entre el código y esta Constitución, siempre prevalecerá esta Constitución.
Ninguna decisión permanente puede existir únicamente en conversaciones, memoria de una IA o conocimiento implícito.
Toda decisión permanente debe incorporarse primero a esta Constitución y posteriormente al código.

1. Objetivo
   El objetivo de esta Constitución es garantizar que cualquier desarrollador, incluida una IA, pueda desarrollar el Design System utilizando exactamente los mismos criterios.
   Todas las decisiones deben favorecer:
   Simplicidad.
   Consistencia.
   Legibilidad.
   Mantenibilidad.
   Escalabilidad.
   Evolución continua.
2. Filosofía
   La plataforma primero
   Siempre preferir las capacidades nativas de:
   HTML
   CSS
   JavaScript
   TypeScript
   React
   antes de crear una abstracción propia.
   React moderno
   El Design System utilizará siempre las prácticas recomendadas por la versión estable más reciente de React.
   No se mantendrán patrones únicamente por compatibilidad histórica.
   Composición antes que configuración
   Cuando un problema pueda resolverse mediante composición, esa solución tendrá prioridad sobre la creación de nuevas props.
   API mínima
   Cada prop debe justificar su existencia.
   Si React, HTML o la composición ya resuelven un problema, no agregar una nueva prop.
   Una única responsabilidad
   Cada componente debe resolver un único problema.
   Su responsabilidad debe ser clara, específica y fácil de comprender.
   Componentes colaborativos
   Un componente público puede estar compuesto por uno o más componentes internos cuando estos colaboran para cumplir una única responsabilidad pública.
   La composición interna no modifica la responsabilidad del componente público.
   La simplicidad gana
   Ante dos soluciones técnicamente correctas, siempre elegir la más simple.
   Legibilidad primero
   El código se escribe para ser leído.
   Todo archivo debe poder entenderse de arriba hacia abajo siguiendo una estructura consistente.
   Organización uniforme
   Todo el Design System debe seguir una organización consistente.
   Cuando dos componentes resuelven problemas equivalentes, deben estructurarse de la misma manera salvo que exista una razón demostrable para hacerlo diferente.
   Evolución continua
   El Design System es un sistema vivo.
   Las reglas pueden evolucionar cuando exista una mejor solución.
   Toda mejora debe incorporarse primero a esta Constitución y posteriormente al código.
   La Constitución tiene prioridad
   El código se adapta a la Constitución.
   Nunca la Constitución al código.
3. Principios de Ingeniería
   La evidencia tiene prioridad
   Las decisiones arquitectónicas deben basarse en evidencia obtenida mediante experimentación.
   No se modificará una arquitectura únicamente por intuición.
   Investigar antes de rediseñar
   Ante un problema importante:
   Formular una hipótesis.
   Diseñar experimentos pequeños.
   Obtener evidencia.
   Documentar la conclusión.
   Actualizar esta Constitución.
   Adaptar el código.
   Mantener la API pública
   Las refactorizaciones internas no deben romper la API pública salvo que exista una decisión constitucional que lo justifique.
   Una única fuente de verdad
   Toda regla permanente debe existir únicamente en esta Constitución.
4. Arquitectura
   Todo componente debe seguir la misma organización para facilitar su lectura, mantenimiento y evolución.
   La organización debe ser uniforme en todo el Design System.
   TSX
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
   CSS
   Base
   ↓
   Elements
   ↓
   Variants
   ↓
   Sizes
   ↓
   States
   Types
   Tipos auxiliares
   ↓
   Props públicas
   ↓
   Tipos exportados
   Stories
   Imports
   ↓
   Meta
   ↓
   Args compartidos
   ↓
   Stories
   ↓
   Play (opcional)
   Index
   Componente
   ↓
   Tipos
   ↓
   Hooks
   ↓
   Subcomponentes
   Hooks
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
   Organización de componentes
   Todo componente, público o interno, debe mantener exactamente la misma organización.
   Cada componente posee su propia carpeta y administra de forma independiente sus archivos.
   Cuando un componente los requiera, su estructura estará compuesta por:
   index
   componente
   tipos
   estilos
   hooks
   utilidades
   stories
   La ausencia de alguno de estos archivos dependerá únicamente de las necesidades del componente.
   La estructura nunca dependerá de si el componente es público o interno.
   Componentes públicos e internos
   Un componente puede ser público o interno.
   Componentes públicos
   Forman parte de la API oficial del Design System.
   Son los únicos componentes disponibles para los consumidores de la biblioteca.
   Componentes internos
   Existen únicamente para colaborar con un componente público.
   No forman parte de la API pública.
   No deben utilizarse directamente desde aplicaciones consumidoras.
   Organización y API pública
   La organización del código y la API pública son conceptos independientes.
   Todo componente merece la misma calidad de organización independientemente de su visibilidad.
   La diferencia entre un componente público y uno interno se define exclusivamente mediante los archivos index.ts que exponen la API del módulo.
5. Estándares
   Generales
   Código simple.
   Código legible.
   Nombres claros.
   Responsabilidades claras.
   APIs pequeñas.
   Componentes pequeños cuando sea posible.
   Evitar duplicación innecesaria.
   Evitar abstracciones injustificadas.
   Mantener consistencia en todo el Design System.
   La organización interna debe mantenerse uniforme en todos los componentes.
   La API pública debe exponer únicamente los componentes destinados al consumo del Design System.
   React
   Utilizar componentes funcionales.
   Extender ComponentProps cuando corresponda.
   Aprovechar las capacidades modernas de React.
   Favorecer composición antes que especialización.
   Evitar crear props cuando la composición ya resuelve el problema.
   HTML
   Utilizar HTML semántico.
   Evitar div innecesarios.
   Aprovechar las capacidades nativas del navegador.
   CSS
   No utilizar estilos inline.
   Agrupar reglas por responsabilidad.
   Mantener un orden consistente.
   Evitar duplicación.
   Mantener reglas pequeñas.
   Accesibilidad
   Todo componente debe considerar accesibilidad desde su primera versión.
6. Component Specification
   Antes de implementar un componente debe existir una especificación.
   Ningún componente podrá implementarse directamente.
   La especificación constituye el contrato funcional del componente y debe ser aprobada antes de comenzar cualquier implementación.
   (Aquí se mantiene exactamente el formato de Component Specification que ya definieron para el proyecto.)
7. Checklist de revisión
   (Mantener exactamente el checklist actual, sin modificaciones.)
   Fin de la Parte 2. En la Parte 3 iría la Base de Conocimiento, incluyendo el nuevo KB-002, además de la sección Evolución de la Constitución y la Regla de Oro.
8. Base de Conocimiento
   La Base de Conocimiento registra las decisiones arquitectónicas permanentes del proyecto.
   Toda decisión incorporada a esta sección ha sido previamente investigada, validada mediante evidencia y adoptada oficialmente por la Constitución.
   KB-001 — Componentes Polimórficos
   Estado
   ✅ Resuelto
   Problema
   TypeScript pierde la inferencia de ComponentPropsWithoutRef<T> al reconstruir objetos mediante object rest.
   Investigación
   Se evaluó el contrato polimórfico, MergeProps, renderPolymorphic y múltiples implementaciones.
   Los experimentos demostraron que el contrato es correcto y que la limitación pertenece al compilador.
   Decisión
   Se mantiene la arquitectura oficial.
   Cuando sea necesario se permite un cast localizado a ComponentPropsWithoutRef<T>.
   No se debe rediseñar la arquitectura por esta limitación.
   Revisión futura
   Volver a evaluar cuando TypeScript mejore la inferencia sobre object rest.
   KB-002 — Organización de Componentes Internos
   Estado
   ✅ Resuelto
   Problema
   Existían distintas alternativas para organizar componentes internos:
   Compartir archivos con el componente público.
   Mantener únicamente el componente interno en una carpeta independiente.
   Crear una carpeta independiente para cada componente.
   Era necesario determinar cuál proporcionaba una arquitectura más consistente y escalable.
   Investigación
   Se implementaron distintas alternativas utilizando Text y ExpandableText como caso de estudio.
   Se evaluó:
   Organización del código.
   Legibilidad.
   Separación de responsabilidades.
   Escalabilidad.
   Impacto sobre la API pública.
   Los experimentos demostraron que mantener cada componente en su propia carpeta produce una arquitectura más uniforme y facilita la evolución del sistema.
   Decisión
   Todo componente, público o interno, mantiene su propia carpeta y administra sus propios archivos.
   La organización del código es independiente de la API pública.
   La diferencia entre un componente público y uno interno se define exclusivamente mediante los index.ts que exportan la API del módulo.
   Justificación
   Esta organización:
   Mantiene una estructura uniforme.
   Reduce el acoplamiento.
   Evita mezclar responsabilidades.
   Facilita el mantenimiento.
   Permite evolucionar la implementación interna sin afectar la API pública.
9. Evolución de la Constitución
   La Constitución es un documento vivo.
   Cuando se identifique una mejor práctica se seguirá el siguiente proceso:
   Identificar el problema.
   Formular una hipótesis.
   Diseñar experimentos pequeños.
   Obtener evidencia.
   Documentar la conclusión.
   Actualizar esta Constitución.
   Adaptar el código.
   Nunca se incorporarán decisiones permanentes directamente al código sin actualizar previamente la Constitución.
10. Regla de Oro
    Toda decisión debe mejorar al menos uno de los siguientes principios:
    Simplicidad.
    Consistencia.
    Legibilidad.
    Mantenibilidad.
    Escalabilidad.
    Si una decisión reduce alguno de estos principios, deberá justificarse mediante evidencia.
    Si una regla deja de aportar valor, deberá investigarse nuevamente antes de ser modificada.
    La Constitución evoluciona para que el Design System también evolucione.

El componente es responsable de definir su apariencia durante el estado Skeleton. El componente Skeleton únicamente proporciona el comportamiento y el contenedor del estado de carga.

## Bloque: CONDITIONAL RENDER

Cuando un componente tenga uno o más caminos de renderizado (por ejemplo: `skeleton`, `loading`, `error`, `empty`, etc.), las decisiones de render deben agruparse en un bloque llamado **CONDITIONAL RENDER**, ubicado después de **CONTENT** y antes de **RENDER**.

El objetivo es separar claramente:

- La construcción del contenido (`CONTENT`).
- Las decisiones sobre qué renderizar (`CONDITIONAL RENDER`).
- El renderizado final (`RENDER`).

Evitar ternarios complejos dentro del JSX cuando un bloque `CONDITIONAL RENDER` haga el flujo más claro y legible.
