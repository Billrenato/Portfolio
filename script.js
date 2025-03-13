
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

 
});
