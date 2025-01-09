
var currentPage = "";

// Seleciona o elemento que contém o conteúdo dinâmico
const content = document.querySelector('.bodyContent');

// Função para atualizar o conteúdo
function updateContent(page) {

    if(page == currentPage)
        return;

    fetch(`${page}/index.html`)
    .then(response => response.text())
    .then(data => {
        currentPage = page;
        content.innerHTML = data;
    })
 } 

// Chama a função para carregar a página Home inicialmente
updateContent('home');

// Adiciona um event listener aos links da navegação
const links = document.querySelectorAll('.menuItem');
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const page = link.dataset.page;
    updateContent(page);
  });
});