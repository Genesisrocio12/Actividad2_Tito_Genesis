// main-component.js
// Definición de un componente personalizado para el contenido principal de la aplicación
class MainComponent extends HTMLElement {
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

    // Método que define la estructura y el estilo del contenido principal
    render() {
        // Define el HTML y los estilos para el componente
        this.shadowRoot.innerHTML = `
            <style>
                /* Importa una fuente personalizada desde Google Fonts */
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

                /* Estilos del contenedor principal del componente */
                :host {
                    display: block; /* El componente debe ocupar todo el ancho disponible */
                    width: 100%; /* Ancho completo */
                    min-height: calc(100vh - 120px); /* Altura mínima ajustada a la ventana, restando el tamaño del encabezado */
                    padding: 20px; /* Espaciado interno de 20px */
                    box-sizing: border-box; /* Para que el padding se incluya en el cálculo del tamaño total */
                    background-color: #f0f4f8; /* Color de fondo claro */
                }

                /* Estilos para el contenedor interno principal */
                .main-container {
                    max-width: 1200px; /* Ancho máximo de 1200px */
                    margin: 0 auto; /* Centra el contenedor */
                    background-color: #ffffff; /* Fondo blanco */
                    padding: 20px; /* Espaciado interno */
                    border-radius: 8px; /* Bordes redondeados */
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra sutil para dar profundidad */
                }

                /* Estilo para los elementos pasados a través de <slot> */
                ::slotted(*) {
                    margin: 10px 0; /* Márgenes de 10px arriba y abajo para los elementos dentro del slot */
                }

                /* Estilos para el título (h2) */
                h2 {
                    font-size: 36px; /* Tamaño de fuente grande */
                    margin-bottom: 20px; /* Espacio debajo del título */
                    font-weight: bold; /* Negrita */
                    font-family: 'Poppins', sans-serif; /* Fuente personalizada */
                    display: flex; /* Usa flexbox para alinear los elementos */
                    justify-content: center; /* Centra los elementos dentro del contenedor */
                    gap: 4px; /* Espacio entre cada letra */
                }

                /* Estilos para cada letra del título */
                h2 span {
                    display: inline-block; /* Cada letra se comporta como un bloque en línea */
                    color: transparent; /* El color del texto es transparente */
                    background-clip: text; /* El fondo se recorta según el contorno del texto */
                    -webkit-background-clip: text; /* Propiedad específica de WebKit para el recorte del fondo */
                    background-size: 100% 100%; /* Ajusta el tamaño del fondo */
                    background-image: linear-gradient(120deg, #6dd5fa, #dcbef5); /* Gradiente de colores para el fondo */
                    animation: gradient-letters 3s ease infinite alternate; /* Anima el gradiente */
                }

                /* Definición de la animación del gradiente */
                @keyframes gradient-letters {
                    0% {
                        background-position: 0% 50%; /* Comienza el gradiente desde la posición inicial */
                    }
                    100% {
                        background-position: 100% 50%; /* Termina el gradiente en la posición final */
                    }
                }
            </style>
            <div class="main-container">
                <!-- Slot para insertar un título personalizado -->
                <slot name="title">
                    <!-- Título por defecto que se desglosa letra por letra para animación -->
                    <h2>
                        ${[...`Contenido Principal`].map(
                            (letter) => `<span>${letter}</span>`
                        ).join('')}
                    </h2>
                </slot>
                <!-- Slot para insertar contenido adicional -->
                <slot></slot>
            </div>
        `;
    }
}

// Registra el componente personalizado con el nombre 'app-main'
customElements.define('app-main', MainComponent);