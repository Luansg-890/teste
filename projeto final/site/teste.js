document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".item");
    const currentPath = window.location.pathname.split("/").pop(); // pega o nome do arquivo atual
  
    links.forEach(link => {
      const linkPath = link.getAttribute("href");
      
      // Marca ativo se o href for igual ao arquivo atual
      if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
        link.classList.add("ativo");
      }
    });
  });

  var expandir = document.querySelector('#exp')
var menuSide = document.querySelector('.menu')

expandir.addEventListener('click', function(){
     menuSide.classList.toggle('expandir')
}) 