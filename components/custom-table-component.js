// custom-table-component.js
// Definición de un Componente Web personalizado para una tabla dinámica
class CustomTableComponent extends HTMLElement {
    // Constructor del componente: Se ejecuta al crear una instancia
    constructor() {
        // Llama al constructor de la clase padre HTMLElement
        super();
        
        // Crea un Shadow DOM con modo 'open' para encapsular estilos y estructura
        // Esto permite aislar los estilos internos del resto de la página
        this.attachShadow({ mode: 'open' });
        
        // Inicializa un arreglo vacío para almacenar los usuarios
        this.users = [];
    }

    // Método del ciclo de vida del componente que se ejecuta cuando se añade al DOM
    async connectedCallback() {
        // Método asíncrono para cargar datos de usuarios antes de renderizar
        await this.fetchUsers();
        
        // Renderiza el contenido del componente una vez cargados los datos
        this.render();
    }

    // Método asíncrono para obtener datos de usuarios desde una API externa
    async fetchUsers() {
        try {
            // Realiza una solicitud HTTP a la API de JSONPlaceholder para obtener usuarios
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            
            // Convierte la respuesta a formato JSON y guarda los usuarios
            this.users = await response.json();
        } catch (error) {
            // Manejo de errores: registra el error en consola
            console.error('Error fetching users:', error);
            
            // En caso de error, inicializa users como un arreglo vacío
            this.users = [];
        }
    }

    // Método para renderizar la estructura visual del componente
    render() {
        // Inyecta HTML y estilos en el Shadow DOM del componente
        this.shadowRoot.innerHTML = `
            <style>
                /* Estilos base del componente */
                :host {
                    display: block; /* Asegura que el componente sea un bloque */
                    font-family: 'Poppins', Arial, sans-serif; /* Fuente personalizada */
                    color: #dcdcdc; /* Color de texto */
                    padding: 20px; /* Espaciado interno */
                }

                /* Estilos del contenedor de la tabla */
                .table-container {
                    width: 100%; /* Ancho completo */
                    border-collapse: collapse; /* Bordes unidos */
                    margin: 8px 0; /* Margen vertical */
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Sombra */
                    border-radius: 12px; /* Bordes redondeados */
                    overflow: hidden; /* Oculta contenido que sobresale */
                    background-color: #1a252f; /* Color de fondo */
                }

                /* Estilos del encabezado de la tabla */
                .table-header {
                    background: linear-gradient(90deg, #34495e, #2980b9); /* Gradiente de fondo */
                    color: #ecf0f1; /* Color de texto */
                    text-transform: uppercase; /* Texto en mayúsculas */
                    font-weight: bold; /* Negrita */
                }

                /* Estilos de las celdas del encabezado */
                .table-header th {
                    padding: 16px; /* Espaciado interno */
                    text-align: left; /* Alineación del texto */
                    border: 1px solid #2c3e50; /* Borde */
                    font-size: 1rem; /* Tamaño de fuente */
                }

                /* Estilos de las filas */
                .table-row {
                    background-color: #2c3e50; /* Color de fondo */
                    transition: background-color 0.3s ease, transform 0.2s ease; /* Transiciones suaves */
                }

                /* Filas pares con color de fondo ligeramente diferente */
                .table-row:nth-child(even) {
                    background-color: #3e4b5b;
                }

                /* Efecto hover en las filas */
                .table-row:hover {
                    background-color: #5d6d7e;
                    transform: scale(1.02); /* Ligero zoom al pasar el mouse */
                }

                /* Estilos de las celdas de datos */
                .table-row td {
                    padding: 14px;
                    border: 1px solid #2c3e50;
                    text-align: center;
                    color: #ecf0f1;
                    font-size: 0.9rem;
                }

                /* Alineación de texto para columnas impares */
                .table-row td:nth-child(odd) {
                    text-align: left;
                }

                /* Efecto decorativo de gradiente en texto */
                .table-row td {
                    background: linear-gradient(90deg, #6dd5fa, #dcbef5);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                /* Estilos responsivos para pantallas pequeñas */
                @media (max-width: 600px) {
                    .table-header th, .table-row td {
                        padding: 10px;
                        font-size: 14px;
                    }
                }
            </style>

            <!-- Estructura de la tabla -->
            <table class="table-container">
                <!-- Encabezado de la tabla -->
                <thead class="table-header">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Ciudad</th>
                        <th>Empresa</th>
                    </tr>
                </thead>
                <!-- Cuerpo de la tabla, generado dinámicamente -->
                <tbody>
                    ${this.users.map(user => `
                        <tr class="table-row">
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.address.city}</td>
                            <td>${user.company.name}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
}

// Registra el componente personalizado para que pueda ser usado en HTML
customElements.define('custom-table', CustomTableComponent);