// header-component.js
// Definición de un componente personalizado para el encabezado de la aplicación
class HeaderComponent extends HTMLElement {
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
    }

    // Método que define la estructura y el estilo del encabezado
    render() {
        // Obtiene el valor del atributo 'title' del componente, o usa un valor por defecto
        const title = this.getAttribute('title') || 'Mi Aplicación Web';
        
        // Define el HTML y los estilos para el componente del encabezado
        this.shadowRoot.innerHTML = `
            <style>
                /* Importa una fuente personalizada desde Google Fonts */
                @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap'); 

                /* Estilos del contenedor del componente */
                :host {
                    display: block; /* El componente debe ocupar todo el ancho disponible */
                    background-color: #1a252f; /* Color de fondo oscuro */
                    color: white; /* Color del texto blanco */
                    padding: 1.5rem; /* Espaciado interno de 1.5rem */
                    text-align: center; /* Alinea el texto al centro */
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra sutil para darle profundidad */
                }

                /* Estilos para el título dentro del encabezado */
                h1 {
                    margin: 0; /* Elimina el margen predeterminado del h1 */
                    font-size: 2.5rem; /* Tamaño de fuente grande */
                    font-family: 'Lobster', cursive; /* Fuente decorativa */
                    background-image: linear-gradient(90deg, #ff6f61, #ffdd59, #6dd5fa, #dcbef5); /* Gradiente de colores para el texto */
                    -webkit-background-clip: text; /* Aplica el gradiente solo al texto */
                    -webkit-text-fill-color: transparent; /* Hace que el color del texto sea transparente para que se vea el gradiente */
                    animation: gradient-text 5s infinite alternate; /* Anima el gradiente para que se mueva de un lado a otro */
                }

                /* Definición de la animación para el gradiente */
                @keyframes gradient-text {
                    0% {
                        background-position: 0% 50%; /* Empieza desde la posición inicial del gradiente */
                    }
                    100% {
                        background-position: 100% 50%; /* Termina en la posición final del gradiente */
                    }
                }
            </style>
            <!-- El título del encabezado se inserta aquí -->
            <h1>${title}</h1>
        `;
    }
}

// Registra el componente personalizado con el nombre 'app-header'
customElements.define('app-header', HeaderComponent);