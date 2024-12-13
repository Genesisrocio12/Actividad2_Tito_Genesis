// gallery-component.js
// Definición de un componente personalizado para la galería de Pokémon
class GalleryComponent extends HTMLElement {
    // Constructor del componente
    constructor() {
        // Llama al constructor de la clase padre HTMLElement
        super();
        // Crea un Shadow DOM con modo 'open' para encapsular los estilos y la estructura
        this.attachShadow({ mode: 'open' });
        // Inicializa la lista de Pokémon como un arreglo vacío
        this.pokemonList = [];
    }

    // Método que se ejecuta cuando el componente es conectado al DOM
    async connectedCallback() {
        // Llama a la función para obtener los datos de los Pokémon antes de renderizar el componente
        await this.fetchPokemonData();
        // Llama al método render para dibujar el contenido de la galería
        this.render();
    }

    // Función asíncrona para obtener los datos de los Pokémon
    async fetchPokemonData() {
        try {
            // Realiza una petición fetch a la API de Pokémon para obtener los primeros 10 Pokémon
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
            // Convierte la respuesta en formato JSON
            const data = await response.json();
            
            // Obtiene detalles de cada Pokémon usando Promise.all para esperar las respuestas
            this.pokemonList = await Promise.all(
                data.results.map(async (pokemon) => {
                    // Realiza una nueva petición para obtener los detalles de cada Pokémon
                    const detailResponse = await fetch(pokemon.url);
                    // Devuelve los detalles completos de cada Pokémon
                    return await detailResponse.json();
                })
            );
        } catch (error) {
            // Si ocurre un error, lo muestra en la consola y establece la lista de Pokémon vacía
            console.error('Error fetching Pokemon data:', error);
            this.pokemonList = [];
        }
    }

    // Método que define la estructura y el estilo del componente
    render() {
        // Define el HTML y los estilos para la galería de Pokémon
        this.shadowRoot.innerHTML = `
            <style>
                /* Estilo general para el componente */
                :host {
                    display: block; /* El componente debe ocupar todo el ancho disponible */
                    font-family: Arial, sans-serif; /* Fuente para el texto */
                }

                /* Contenedor principal de la galería */
                .gallery-container {
                    display: grid; /* Usa un diseño de cuadrícula */
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Coloca las tarjetas en columnas con un ancho mínimo de 200px */
                    gap: 20px; /* Espaciado entre las tarjetas */
                    padding: 20px; /* Espaciado alrededor de la galería */
                }

                /* Estilo para cada tarjeta de Pokémon */
                .pokemon-card {
                    background-color: #2c3e50; /* Color de fondo oscuro */
                    border-radius: 10px; /* Bordes redondeados */
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Sombra para dar profundidad */
                    padding: 15px; /* Espaciado interno */
                    text-align: center; /* Alinea el texto al centro */
                    transition: transform 0.3s ease; /* Transición suave para el efecto hover */
                }

                /* Efecto al pasar el mouse sobre una tarjeta */
                .pokemon-card:hover {
                    transform: scale(1.05); /* Agranda la tarjeta ligeramente */
                }

                /* Estilo para la imagen del Pokémon */
                .pokemon-image {
                    max-width: 150px; /* Ancho máximo de la imagen */
                    height: 150px; /* Altura fija para la imagen */
                    object-fit: contain; /* Ajusta la imagen dentro del contenedor sin recortarla */
                    margin-bottom: 10px; /* Espaciado inferior */
                }

                /* Estilo para el nombre del Pokémon */
                .pokemon-name {
                    font-weight: bold; /* Hace el texto en negrita */
                    color: #fff; /* Color blanco para el texto */
                    text-transform: capitalize; /* Convierte la primera letra de cada palabra en mayúscula */
                }

                /* Contenedor para los tipos de Pokémon */
                .pokemon-types {
                    display: flex; /* Usamos un layout flexible */
                    justify-content: center; /* Centra los tipos de Pokémon horizontalmente */
                    gap: 10px; /* Espaciado entre los tipos */
                    margin-top: 10px; /* Espaciado superior */
                }

                /* Estilo para cada tipo de Pokémon */
                .pokemon-type {
                    background-color: #1a242f; /* Color de fondo oscuro */
                    color: #fff; /* Texto blanco */
                    padding: 5px 10px; /* Espaciado interno */
                    border-radius: 5px; /* Bordes redondeados */
                    font-size: 0.8rem; /* Tamaño de fuente pequeño */
                }

                /* Efecto hover para los tipos de Pokémon */
                .pokemon-type:hover {
                    background-color: #34495e; /* Cambia el color de fondo cuando el mouse pasa sobre el tipo */
                }
            </style>
            <!-- Contenedor de la galería de Pokémon -->
            <div class="gallery-container">
                <!-- Mapeamos la lista de Pokémon para crear una tarjeta por cada uno -->
                ${this.pokemonList.map(pokemon => `
                    <div class="pokemon-card">
                        <img 
                            src="${pokemon.sprites.front_default}" 
                            alt="${pokemon.name}" 
                            class="pokemon-image"
                        >
                        <!-- Nombre del Pokémon -->
                        <div class="pokemon-name">${pokemon.name}</div>
                        <!-- Tipos de Pokémon -->
                        <div class="pokemon-types">
                            ${pokemon.types.map(type => `
                                <span class="pokemon-type">${type.type.name}</span>
                            `).join('')} <!-- Muestra todos los tipos de Pokémon -->
                        </div>
                    </div>
                `).join('')} <!-- Une todas las tarjetas de Pokémon -->
            </div>
        `;
    }
}

// Registra el componente personalizado para poder usarlo en el HTML
customElements.define('pokemon-gallery', GalleryComponent);