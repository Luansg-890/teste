//selecionar ao clicar em algum elemento da barra lateral
var menuItem = document.querySelectorAll('.item')

 

function select (){
   menuItem.forEach((item)=>
        item.classList.remove('ativo')       
    )
     this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click',select)
)

//vai expandir o menu
var expandir = document.querySelector('#exp')
var menuSide = document.querySelector('.menu')

expandir.addEventListener('click', function(){
     menuSide.classList.toggle('expandir')
}) 

//fim da barra lateral

//propaganda

//mostrar propaganda ao trocar de pagina
window.onload = function() {
     document.getElementById("propaganda").style.display = "flex";
};

//fechar propaganda
function fecharpropaganda() {
     document.getElementById("propaganda").style.display = "none"
}
