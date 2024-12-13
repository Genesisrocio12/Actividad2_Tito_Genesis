// menu-component.js
// Definición del componente personalizado para el menú de navegación
class MenuComponent extends HTMLElement {
    // Constructor del componente
    constructor() {
        // Llama al constructor de la clase base HTMLElement
        super();
        // Crea un Shadow DOM con modo 'open' para encapsular los estilos y la estructura
        this.attachShadow({ mode: 'open' });
    }

    // Método que se ejecuta cuando el componente es conectado al DOM
    connectedCallback() {
        // Llama al método render para dibujar el contenido del componente
        this.render();
        // Llama al método addEventListeners para agregar los eventos de interacción
        this.addEventListeners();
    }

    // Método que define la estructura y el estilo del menú
    render() {
        // Define el HTML y los estilos para el componente
        this.shadowRoot.innerHTML = `
            <style>
                /* Estilos para el componente de menú */
                :host {
                    display: block; /* El componente debe ocupar todo el ancho disponible */
                    background-color: #34495e; /* Color de fondo del menú */
                    padding: 10px 0; /* Espaciado superior e inferior */
                }

                /* Estilo para el contenedor que agrupa los elementos del menú */
                .menu-container {
                    display: flex; /* Usa flexbox para alinear los elementos */
                    justify-content: center; /* Centra los elementos dentro del contenedor */
                    gap: 20px; /* Espacio de 20px entre cada elemento */
                }

                /* Estilo para cada elemento del menú */
                .menu-item {
                    color: white; /* Color de texto blanco */
                    text-decoration: none; /* Elimina el subrayado por defecto de los enlaces */
                    padding: 10px 15px; /* Espaciado interno de cada ítem del menú */
                    border-radius: 5px; /* Bordes redondeados */
                    transition: background-color 0.3s ease; /* Transición suave en el cambio de fondo */
                    cursor: pointer; /* Cambia el cursor para indicar que es interactivo */
                }

                /* Estilo para cuando el usuario pasa el ratón por encima de un ítem */
                .menu-item:hover {
                    background-color: #2c3e50; /* Fondo oscuro cuando se pasa el ratón */
                }
            </style>
            <nav class="menu-container">
                <!-- Elementos de menú con enlaces, usando atributos 'data-page' para identificar las páginas -->
                <a class="menu-item" data-page="home">Inicio</a>
                <a class="menu-item" data-page="profile">Perfil</a>
                <a class="menu-item" data-page="table">Tabla</a>
                <a class="menu-item" data-page="gallery">Galería</a>
            </nav>
        `;
    }

    // Método que agrega los eventos de interacción (escucha clics en los ítems del menú)
    addEventListeners() {
        // Selecciona todos los elementos con la clase '.menu-item' dentro del Shadow DOM
        const menuItems = this.shadowRoot.querySelectorAll('.menu-item');
        
        // Agrega un event listener a cada ítem del menú
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                // Cuando se hace clic, se obtiene el valor del atributo 'data-page'
                const page = e.target.getAttribute('data-page');
                // Llama a la función para manejar la navegación
                this.navigateTo(page);
            });
        });
    }

    // Método que maneja la navegación al hacer clic en un ítem del menú
    navigateTo(page) {
        // Creamos un evento personalizado 'navigate' para gestionar la navegación
        const navigationEvent = new CustomEvent('navigate', {
            detail: { page }, // Pasamos la página a la que se debe navegar como detalle
            bubbles: true, // El evento burbujea para que sea escuchado por otros componentes
            composed: true // Permite que el evento atraviese el Shadow DOM
        });
        
        // Disparamos el evento de navegación
        this.dispatchEvent(navigationEvent);
    }
}

// Registra el componente personalizado con el nombre 'app-menu'
customElements.define('app-menu', MenuComponent);