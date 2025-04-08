// Función para cargar componentes como navbar y footer
function cargarComponente(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// Cargar navbar y footer automáticamente
document.addEventListener('DOMContentLoaded', function () {
  cargarComponente('navbar', 'components/navbar.html');
  cargarComponente('footer', 'components/footer.html');
});
