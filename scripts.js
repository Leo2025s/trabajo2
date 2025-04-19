// Función para actualizar contador de artículos
function actualizarContador() {
    const contadores = document.querySelectorAll('.contador-articulos');
    contadores.forEach(contador => {
        const seccion = contador.getAttribute('data-seccion');
        const cantidad = document.querySelectorAll(`#${seccion} .card`).length;
        contador.textContent = `(${cantidad} artículos)`;
    });
}

// Función para actualizar el reloj
function actualizarReloj() {
    const ahora = new Date();
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    };
    document.getElementById('reloj').textContent = ahora.toLocaleDateString('es-ES', opciones);
}

// Formulario para agregar artículos
document.getElementById('form-articulo')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;
    const categoria = document.getElementById('categoria').value;
    
    const articulo = document.createElement('div');
    articulo.className = 'col';
    articulo.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text"><small class="text-muted">${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</small></p>
                <p class="card-text">${contenido}</p>
            </div>
        </div>
    `;
    
    document.querySelector(`#${categoria} .row`).appendChild(articulo);
    actualizarContador();
    this.reset();
});

// Formulario de contacto
document.getElementById('form-contacto')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const alerta = document.createElement('div');
    alerta.className = 'alert alert-success alert-dismissible fade show';
    alerta.innerHTML = `
        ¡Mensaje enviado con éxito! Gracias por contactarnos.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    this.parentNode.insertBefore(alerta, this);
    this.reset();
});

// Inicializar contador y reloj al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarContador();
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
});
