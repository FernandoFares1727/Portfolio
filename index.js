
var currentPage = "";

// Seleciona o elemento que contém o conteúdo dinâmico
const content = document.querySelector('.bodyContent');

// Função para atualizar o conteúdo
function updateContent(page) {

    if(page == currentPage)
        return;

    console.log(page)
    // Simulação de requisição para buscar o conteúdo (substitua por sua lógica real)
    if (page === 'home') {
      fetch('home/index.html')
      .then(response => response.text())
      .then(data => {
        currentPage = page;
        content.innerHTML = data;
      })
    }
    else if (page == 'about'){
      fetch('about/index.html')
      .then(response => response.text())
      .then(data => {
        console.log(data);
        currentPage = page;
        content.innerHTML = data;
      })
    }
 } 

// Chama a função para carregar a página Home inicialmente
updateContent('home');

// Adiciona um event listener aos links da navegação
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const page = link.dataset.page;
    updateContent(page);
  });
});