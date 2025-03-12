const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})


window.addEventListener('scroll', function() {
    const legendaSobre = document.querySelector('.legenda-sobre','.container');
    const scrollTop = window.scrollY;
    const offsetTop = legendaSobre.offsetTop;
  
    if (scrollTop > offsetTop - 200) {
      legendaSobre.classList.add('animar');
    }
  });


