# Pure Essence - Tienda de Perfumes

Este proyecto es una tienda online de fragancias con el objetivo de profundizar en el uso avanzado de **CSS** y el preprocesador **SASS**, además de aplicar la integración de modelos 3D en la web mediante la librería de three.js

---

## Características

* **Visualización 3D**: En la sección de ofertas (`tipo5.html`), se integra un visor 3D que permite al usuario interactuar con la fragancia.
* **Galería Interactiva**: El archivo `productos.js` gestiona el cambio de imágenes principales mediante miniaturas y navegación por flechas.
* **Sección de Ofertas Animada**: Un banner de noticias infinito creado mediante animaciones de CSS en el `index`.
* **Accesibilidad Multimedia**: Inclusión de video con subtítulos (`.vtt`) para la presentación de la fragancia "Eclaire".
* **Formularios Validados**: Diseño de formularios de contacto y pedidos con feedback visual mediante pseudo-clases de validación CSS.

## Tecnologías

* **HTML5**: Estructura semántica.
* **SASS (SCSS)**: Uso de variables, mixins, funciones, bucles (`@each`) y herencia para código limpio y modular.
* **JavaScript**: Lógica de la galería de productos y manipulación del DOM.
* **Three.js**: Motor 3D utilizado para renderizar modelos de perfumes interactivos (`.glb` / `.gltf`).
* **FontAwesome**: Librería de iconos para redes sociales y elementos de interfaz.

## Estructura de Estilos (SASS)

El proyecto sigue una estructura modular para facilitar el mantenimiento:
* `_variables.scss`: Paleta de colores, tipografías y espaciados globales.
* `_mixins.scss`: Mixins reutilizables para botones, transiciones, animaciones (como el efecto *bounce*) y estados hover.
* `style.scss`: Estilos base y configuración del layout general (Header, Footer).
* **Módulos específicos**: Archivos dedicados para `index`, `tienda`, `productos`, `carro` y `formContacto`, asegurando que cada sección tenga estilos independientes y organizados.

## Instalación y Uso
**Clona este repositorio**
   
```
 npm install sobre la terminal en la carpeta del proyecto
 npm run dev sobre la terminal
```

## Aprendizaje

Este proyecto, aprendí a dominar:
* La arquitectura de estilos escalable con **SASS**.
* Diseño **responsive** y layouts complejos (**Grid** y **Flexbox**).
* Interactividad mediante **JavaScript**.
* Visualización de productos en **3D** para mejorar la experiencia de usuario.


---

### Autora
Proyecto creado por **Irene Smykla Jiménez*** para el aprendizaje en el desarrollo Frontend

### Imágenes del Proyecto
**Inicio:**

**Scroll aplicado:**

**Vista del footer**

**Vista de un producto**

**Productos**

