$(document).ready(function() {
  console.log('Documento listo');

  // Función para el botón de modo claro
  $('#light-mode-btn').click(function() {
      console.log('Modo Claro activado');
      $('body').removeClass('dark-mode');
      $('.navbar').removeClass('dark-mode');
      $('.table').removeClass('dark-mode');
  });

  // Función para el botón de modo Oscuro
  $('#dark-mode-btn').click(function() {
      console.log('Modo Oscuro activado');
      $('body').addClass('dark-mode');
      $('.navbar').addClass('dark-mode');
      $('.table').addClass('dark-mode');
  });
});
