# Diseño del Componente

> Este documento define la arquitectura del componente antes de implementarlo.
> No se debe escribir código hasta completar este documento.

---

# Propósito

Representar visualmente una persona, organización o entidad mediante una imagen, iniciales o un icono de respaldo.

---

# Responsabilidades

## Sí hace

- Mostrar una imagen.
- Mostrar un skeleton mientras la imagen carga.
- Mostrar un fallback personalizado.
- Mostrar iniciales cuando no existe una imagen.
- Mostrar un icono por defecto cuando no existe ninguna alternativa.

## No hace

- Obtener información del usuario.
- Subir o editar imágenes.
- Administrar estados de autenticación.
- Manejar información de perfiles.

---

# Anatomía

```text
Avatar

├── Image
│    └── Skeleton
│
└── Fallback
     ├── Initials
     └── Icon
```

---

# Dependencias

- Image
- Skeleton (a través de Image)
- Icon

---

# Flujo de renderizado

```text
¿Existe src?

│

├── Sí
│     ↓
│   Image
│
│     ¿Error?
│
│     ├── No → Mostrar imagen
│     └── Sí
│
└───────────────↓

¿Existe fallback?

│

├── Sí
│     ↓
│  Mostrar fallback
│
└── No
      ↓

¿Existe alt?

│

├── Sí
│     ↓
│  Mostrar iniciales
│
└── No
      ↓

Mostrar icono por defecto
```

---

# API pública

| Prop     | Descripción                                                    |
| -------- | -------------------------------------------------------------- |
| src      | Imagen del avatar.                                             |
| alt      | Texto alternativo e iniciales.                                 |
| size     | Tamaño del avatar.                                             |
| shape    | Forma del avatar.                                              |
| fallback | Contenido personalizado cuando no existe imagen.               |
| icon     | Icono mostrado cuando no existe imagen, fallback ni iniciales. |
| as       | Elemento HTML raíz.                                            |

---

# Estados

| Estado    | Descripción                                    |
| --------- | ---------------------------------------------- |
| Imagen    | La imagen carga correctamente.                 |
| Cargando  | Se muestra Skeleton.                           |
| Error     | La imagen falla y se usa el flujo de respaldo. |
| Fallback  | Se muestra el contenido personalizado.         |
| Iniciales | Se generan desde `alt`.                        |
| Icono     | Último estado disponible.                      |

---

# Accesibilidad

- La imagen debe recibir `alt`.
- El icono decorativo debe ser `aria-hidden`.
- El componente debe conservar los atributos del elemento raíz (`as`).

---

# Ejemplos de uso

```tsx
<Avatar
  src="/avatar.jpg"
  alt="Estefanía Díaz"
/>

<Avatar
  fallback="ED"
/>

<Avatar
  icon="user"
/>

<Avatar
  size="lg"
  shape="rounded"
/>
```

---

# Evolución futura

- Badge de estado (online, offline, ocupado).
- Avatar Group.
- Indicador de carga personalizado.
- Soporte para imágenes responsive si fuese necesario.

---

# Checklist de implementación

- [x] El propósito está definido.
- [x] Las responsabilidades están claras.
- [x] La anatomía está completa.
- [x] Las dependencias están identificadas.
- [x] El flujo de renderizado está definido.
- [x] La API pública está cerrada.
- [x] La accesibilidad fue revisada.
- [x] El componente está listo para implementarse.
