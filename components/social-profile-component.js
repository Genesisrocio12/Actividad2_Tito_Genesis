// social-profile-component.js
// Definición del componente personalizado para un perfil social
class SocialProfileComponent extends HTMLElement {
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

    // Método que define la estructura y los estilos del perfil social
    render() {
        // Define el HTML y los estilos para el componente
        this.shadowRoot.innerHTML = `
            <style>
                /* Estilos para el contenedor principal del perfil */
                :host {
                    display: block; /* El componente debe ocupar todo el ancho disponible */
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Fuente para el perfil */
                    max-width: 600px; /* Ancho máximo para el perfil */
                    margin: 0 auto; /* Centrado horizontal en la página */
                    padding: 20px; /* Espaciado alrededor del perfil */
                }

                /* Estilo para el contenedor del perfil */
                .profile-container {
                    background-color: #1a2634; /* Fondo oscuro para el contenedor */
                    border-radius: 15px; /* Bordes redondeados */
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Sombra para el contenedor */
                    padding: 30px; /* Espaciado interno */
                    text-align: center; /* Centra el texto en el contenedor */
                    color: #ffffff; /* Color de texto blanco */
                    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transición suave en el hover */
                }

                /* Efecto al pasar el ratón sobre el contenedor del perfil */
                .profile-container:hover {
                    transform: translateY(-10px); /* Mueve el contenedor hacia arriba */
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); /* Sombra más intensa */
                }

                /* Estilo para la imagen de perfil */
                .profile-image {
                    width: 150px; /* Ancho de la imagen */
                    height: 150px; /* Alto de la imagen */
                    border-radius: 50%; /* Hace que la imagen sea redonda */
                    object-fit: cover; /* Asegura que la imagen cubra todo el espacio disponible */
                    margin-bottom: 20px; /* Espaciado debajo de la imagen */
                    border: 4px solid #fff; /* Borde blanco alrededor de la imagen */
                }

                /* Estilo para el nombre del perfil */
                .profile-name {
                    font-size: 28px; /* Tamaño de fuente para el nombre */
                    margin-bottom: 10px; /* Espaciado debajo del nombre */
                    color: #ffffff; /* Color blanco para el texto */
                    background: linear-gradient(90deg, #ff6347, #ff1493); /* Gradiente de colores para el texto */
                    -webkit-background-clip: text; /* Clipa el fondo para que se aplique solo al texto */
                    -webkit-text-fill-color: transparent; /* Hace que el texto sea transparente para mostrar el fondo */
                }

                /* Estilo para la información adicional del perfil */
                .profile-info {
                    color: #dcdcdc; /* Color gris claro para la información */
                    font-size: 16px; /* Tamaño de fuente para la información */
                    margin-bottom: 20px; /* Espaciado debajo de la información */
                }

                /* Estilo para el contenedor de los enlaces sociales */
                .social-links {
                    display: flex; /* Usa flexbox para alinear los enlaces */
                    justify-content: center; /* Centra los enlaces horizontalmente */
                    gap: 20px; /* Espaciado de 20px entre cada enlace */
                }

                /* Estilo general para los enlaces sociales */
                .social-link {
                    text-decoration: none; /* Elimina el subrayado por defecto de los enlaces */
                    font-weight: bold; /* Hace que el texto sea negrita */
                    font-family: 'Courier New', Courier, monospace; /* Fuente monoespaciada para los enlaces */
                    padding: 12px 20px; /* Espaciado interno de los enlaces */
                    border-radius: 5px; /* Bordes redondeados para los enlaces */
                    text-transform: uppercase; /* Hace que el texto esté en mayúsculas */
                    transition: background 0.3s ease; /* Transición suave en el cambio de fondo */
                    color: #ffffff; /* Color de texto blanco */
                    display: inline-block; /* Hace que los enlaces se comporten como bloques en línea */
                    min-width: 120px; /* Ancho mínimo para los enlaces */
                    text-align: center; /* Centra el texto dentro de los enlaces */
                }

                /* Estilo para el enlace de GitHub */
                .social-link.github {
                    background: linear-gradient(90deg, #000000, #444444); /* Gradiente de fondo para GitHub */
                }
                /* Efecto hover para el enlace de GitHub */
                .social-link.github:hover {
                    background: linear-gradient(90deg, #333333, #777777); /* Gradiente diferente al pasar el ratón */
                }

                /* Estilo para el enlace de Facebook */
                .social-link.facebook {
                    background: linear-gradient(90deg, #4267B2, #365899); /* Gradiente de fondo para Facebook */
                }
                /* Efecto hover para el enlace de Facebook */
                .social-link.facebook:hover {
                    background: linear-gradient(90deg, #365899, #2b4973); /* Gradiente diferente al pasar el ratón */
                }

                /* Estilo para el enlace de Instagram */
                .social-link.instagram {
                    background: linear-gradient(90deg, #E1306C, #F77737, #FFDC80); /* Gradiente de fondo para Instagram */
                }
                /* Efecto hover para el enlace de Instagram */
                .social-link.instagram:hover {
                    background: linear-gradient(90deg, #F77737, #FFDC80, #E1306C); /* Gradiente diferente al pasar el ratón */
                }
            </style>
            <!-- Estructura HTML del perfil social -->
            <div class="profile-container">
                <!-- Imagen de perfil -->
                <img 
                    src="https://i.pinimg.com/736x/f4/fd/eb/f4fdebc83a81917db17d7b945bc8dabc.jpg" 
                    alt="Perfil" 
                    class="profile-image"
                >
                <!-- Nombre del perfil -->
                <h2 class="profile-name">Genesis Tito</h2>
                <!-- Información adicional del perfil -->
                <p class="profile-info">
                    Desarrolladora Web | Apasionada por la tecnología | 
                    Creadora de soluciones innovadoras
                </p>
                <!-- Enlaces sociales -->
                <div class="social-links">
                    <a href="https://github.com/" target="_blank" class="social-link github">GitHub</a>
                    <a href="https://www.facebook.com/?locale=es_LA" target="_blank" class="social-link facebook">Facebook</a>
                    <a href="https://www.instagram.com/" target="_blank" class="social-link instagram">Instagram</a>
                </div>
            </div>
        `;
    }
}

// Registra el componente personalizado con el nombre 'social-profile'
customElements.define('social-profile', SocialProfileComponent);