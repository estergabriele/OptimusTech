/* Esse arquivo foi criado para manipular o menu responsivo */

const menu = document.querySelector('.cabecalho_menu')
const menuIcon = document.querySelector('.cabecalho_logo img')

menuIcon.addEventListener('click', function() {
  // quando houver clique no ícone de menu
  menu.classList.toggle('active')
})