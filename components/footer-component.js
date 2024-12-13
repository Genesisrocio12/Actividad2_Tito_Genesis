// footer-component.js
// Definición de un componente personalizado para el pie de página
class FooterComponent extends HTMLElement {
    // Constructor del componente
    constructor() {
        // Llama al constructor de la clase padre HTMLElement
        super();
        // Crea un Shadow DOM con modo 'open' para encapsular los estilos y la estructura
        this.attachShadow({ mode: 'open' });
    }

    // Método del ciclo de vida que se ejecuta cuando el componente es agregado al DOM
    connectedCallback() {
        // Llama al método render para dibujar el contenido del componente
        this.render();
    }

    // Método que define la estructura y el estilo del componente
    render() {
        // Obtiene el año actual usando la clase Date de JavaScript
        const year = new Date().getFullYear();
        // Obtiene el nombre de la empresa desde el atributo 'company' o asigna un valor predeterminado
        const companyName = this.getAttribute('company') || 'Mi Empresa';

        // Define el HTML y los estilos para el pie de página
        this.shadowRoot.innerHTML = `
            <style>
                /* Estilos generales del componente */
                :host {
                    display: block; /* El componente debe ocupar todo el ancho disponible */
                    background: linear-gradient(90deg, #2c3e50, #34495e); /* Fondo con gradiente */
                    color: #ecf0f1; /* Color de texto */
                    padding: 1.5rem 0; /* Espaciado superior e inferior */
                    text-align: center; /* Alineación del texto al centro */
                    font-family: 'Poppins', Arial, sans-serif; /* Fuente personalizada */
                    position: relative; /* Posicionamiento relativo */
                    width: 100%; /* Ancho completo */
                    bottom: 0; /* Se coloca en la parte inferior */
                }

                /* Contenedor del contenido del pie de página */
                .footer-content {
                    display: flex; /* Usa un diseño flexible */
                    flex-direction: column; /* Organiza los elementos en columna */
                    justify-content: center; /* Centra los elementos verticalmente */
                    align-items: center; /* Centra los elementos horizontalmente */
                    max-width: 1200px; /* Ancho máximo */
                    margin: 0 auto; /* Centra el contenedor */
                }

                /* Estilos del texto de derechos de autor */
                .copyright {
                    font-size: 0.95rem; /* Tamaño de fuente */
                    margin: 0.5rem 0; /* Espaciado superior e inferior */
                    font-weight: 500; /* Peso de la fuente */
                    color: #f7f9fa; /* Color del texto */
                }

                /* Estilos para los enlaces de redes sociales */
                .social-links {
                    display: flex; /* Organiza los enlaces de manera flexible */
                    gap: 1rem; /* Espaciado entre los enlaces */
                    margin: 1rem 0; /* Espaciado superior e inferior */
                }

                /* Estilos de los enlaces de redes sociales */
                .social-links a {
                    color: #ecf0f1; /* Color de los enlaces */
                    font-size: 1rem; /* Tamaño de fuente */
                    text-decoration: none; /* Elimina el subrayado */
                    transition: color 0.3s ease, transform 0.2s ease; /* Transición suave para el color y la escala */
                }

                /* Efecto hover sobre los enlaces de redes sociales */
                .social-links a:hover {
                    color: #1abc9c; /* Cambia el color al pasar el mouse */
                    transform: scale(1.1); /* Agranda ligeramente el enlace */
                }

                /* Estilo decorativo para los enlaces de redes sociales */
                .social-links a::before {
                    content: '🔗'; /* Agrega un icono antes de los enlaces */
                    margin-right: 0.5rem; /* Espaciado a la derecha del icono */
                }
            </style>

            <!-- Estructura HTML del pie de página -->
            <div class="footer-content">
                <!-- Texto de derechos de autor con el año y el nombre de la empresa -->
                <div class="copyright">
                    © ${year} ${companyName}. Todos los derechos reservados.
                </div>

                <!-- Enlaces de redes sociales -->
                <div class="social-links">
                    <a href="https://www.facebook.com/?locale=es_LA" target="_blank" class="social-link">Facebook</a>
                    <a href="https://x.com/?lang=es" target="_blank" class="social-link">Twitter</a>
                    <a href="https://www.espe.edu.ec/" target="_blank" class="social-link">ESPE</a>
                </div>
            </div>
        `;
    }
}

// Registra el componente personalizado para poder usarlo en el HTML
customElements.define('app-footer', FooterComponent);