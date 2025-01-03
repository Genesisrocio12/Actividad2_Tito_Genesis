# Proyecto: Creación de Componentes Web Personalizados

**Nombre:** Genesis Tito  
**Materia:** PROGRAMACIÓN INTEGRAL de COMPONENTES WEB  
**NRC:** 1406  
**Fecha:** Diciembre 2024

## Descripción del Proyecto

Este proyecto tiene como objetivo la creación de una **aplicación web modular** utilizando **Web Components**, como **Custom Elements** con **Shadow DOM**, **Templates** y **Slots**, tal como lo solicita la actividad. La aplicación incluye los siguientes componentes: un encabezado, pie de página, menú de navegación, contenedor principal, perfil social, tabla personalizada y galería de imágenes. Cada componente ha sido desarrollado de manera autónoma y reutilizable, utilizando JavaScript.

---
### Implementación de Componentes

#### 1. **Header Component** (`header-component.js`)

Este componente muestra el encabezado de la página con un título. Está diseñado para ser reutilizable y utiliza **Shadow DOM** para encapsular sus estilos y estructura.

#### 2. **Footer Component** (`footer-component.js`)

Este componente implementa el pie de página con información de copyright, enlaces a redes sociales y el año actual generado dinámicamente. También utiliza **Shadow DOM** para asegurar que sus estilos no afecten al resto de la página.

#### 3. **Main Component** (`main-component.js`)

Este es el contenedor principal de la aplicación, donde se muestra el contenido de las distintas páginas. Utiliza **slots** para insertar contenido dinámico, lo que permite que diferentes partes de la página sean reutilizables y se mantenga una estructura modular.

#### 4. **Menu Component** (`menu-component.js`)

El menú de navegación permite moverse entre las distintas páginas de la aplicación sin necesidad de recargar la página, implementando una navegación tipo **SPA** (Single Page Application). Utiliza eventos personalizados para gestionar la navegación y sus estilos están encapsulados en el **Shadow DOM**.

#### 5. **Social Profile Component** (`social-profile-component.js`)

Este componente muestra la información estática de un perfil de usuario, como nombre, foto de perfil y enlaces a redes sociales. Está diseñado con una tarjeta de perfil utilizando **Shadow DOM** para encapsular sus estilos.

#### 6. **Custom Table Component** (`custom-table-component.js`)

Este componente carga datos de usuarios desde la API REST de **JSONPlaceholder** y los muestra en una tabla dinámica. La tabla se ajusta dinámicamente según los datos recibidos y se asegura de manejar errores durante la carga con la **Fetch API**.

#### 7. **Gallery Component** (`gallery-component.js`)

Este componente carga una galería de imágenes obtenidas desde la API REST **PokeAPI**. Las imágenes se renderizan dinámicamente en tarjetas con información adicional sobre cada Pokémon. Al igual que otros componentes, utiliza el **Shadow DOM** para mantener los estilos encapsulados.

---
### Tecnologías Utilizadas

- **HTML**: Para estructurar la página web.
- **JavaScript (Web Components)**: Para crear los componentes reutilizables y manejar la lógica de la aplicación.
- **Shadow DOM**: Para encapsular estilos y evitar que afecten a otros elementos de la página.
- **Custom Elements**: Para crear nuevos elementos HTML personalizados.
- **Fetch API**: Para obtener datos dinámicos desde APIs externas como JSONPlaceholder y PokeAPI.

### Requisitos

- Un navegador moderno que soporte **Web Components** (Chrome, Firefox, Edge, Safari).
- Conexión a Internet para cargar los datos desde las APIs externas (JSONPlaceholder y PokeAPI).

### Instalación

1. Clonar el repositorio:

   ```bash
   git clone <url-del-repositorio>
   ```

2. Abrir el archivo `index.html` directamente en un navegador.  
   (No requiere instalación de dependencias).

### Funcionalidades

- **Navegación entre páginas** sin recargar (SPA).
- **Componentes reutilizables** que permiten una arquitectura modular.
- **Datos dinámicos** cargados desde APIs externas (JSONPlaceholder y PokeAPI).
- **Diseño responsivo**, que se adapta a dispositivos móviles y escritorios.
---