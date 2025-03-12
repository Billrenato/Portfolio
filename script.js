
document.addEventListener("DOMContentLoaded", function () {
  const hamburguer = document.querySelector(".hamburguer");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  // Alterna o menu ao clicar no ícone do hambúrguer
  hamburguer.addEventListener("click", (event) => {
      event.stopPropagation(); // Evita propagação para o document
      hamburguer.classList.toggle("active");
      navMenu.classList.toggle("active");
  });

  // Fecha o menu ao clicar em um link
  navLinks.forEach((link) => {
      link.addEventListener("click", () => {
          hamburguer.classList.remove("active");
          navMenu.classList.remove("active");
      });
  });

  // Fecha o menu se clicar fora dele
  document.addEventListener("click", (event) => {
      if (!navMenu.contains(event.target) && !hamburguer.contains(event.target)) {
          hamburguer.classList.remove("active");
          navMenu.classList.remove("active");
      }
  });

  // Animação de imagem ao carregar a página
  const img = document.querySelector('.container img');
  if (img) {
      setTimeout(() => {
          img.classList.add('loaded');
      }, 500);
  }

  // Animação de legenda ao rolar a página
  window.addEventListener("scroll", function () {
      const legendaSobre = document.querySelector(".legenda-sobre");
      if (!legendaSobre) return;

      const scrollTop = window.scrollY;
      const offsetTop = legendaSobre.getBoundingClientRect().top + scrollTop;

      if (scrollTop > offsetTop - 200) {
          legendaSobre.classList.add("animar");
      }
  });
});
