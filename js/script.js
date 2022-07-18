document.querySelector('.hamburguer').addEventListener('click', () => 

    document.querySelector('.container').classList.toggle('show-menu')
);
//script para o scroll descer até ao setor Conhecimentos e subir para a page Home
const menuItem = document.querySelectorAll('.menu a[href^="#"]');
menuItem.forEach(item => {
    
    item.addEventListener('click', scrollToId);
})

function scrollToId(event){
    
    event.preventDefault();
    
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    
    window.scroll({
        
        top:to,
        behavior: "smooth"});
    
    document.querySelector('.show-menu').classList.toggle('hidden-menu');
    
    document.querySelector('.hamburguer').addEventListener('click', () => 
    document.querySelector('.container').classList.remove('hidden-menu'), document.querySelector('.container').classList.toggle('show-menu'))
}



