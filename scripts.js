// Función para actualizar contador de artículos
function actualizarContador() {
    const contadores = document.querySelectorAll('.contador-articulos');
    contadores.forEach(contador => {
        const seccion = contador.getAttribute('data-seccion');
        const cantidad = document.querySelectorAll(`#${seccion} article`).length;
        contador.textContent = `(${cantidad} artículos)`;
    });
}

// Formulario para agregar artículos
document.getElementById('form-articulo').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;
    const categoria = document.getElementById('categoria').value;
    
    const articulo = document.createElement('article');
    articulo.innerHTML = `
        <h3>${titulo}</h3>
        <p><strong>Categoría:</strong> ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</p>
        <p>${contenido}</p>
    `;
    
    document.querySelector(`#${categoria} .grid-articulos`).appendChild(articulo);
    actualizarContador();
    this.reset();
});

// Formulario de contacto
document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito! Gracias por contactarnos.');
    this.reset();
});

// Inicializar contador al cargar la página
document.addEventListener('DOMContentLoaded', actualizarContador);