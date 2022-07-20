document.querySelector('.hamburguer').addEventListener('click', () => 

    document.querySelector('.container').classList.toggle('show-menu')
    
);

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

  document.querySelector('#qtde').addEventListener('change', atualizarPreco)
  document.querySelector('#js').addEventListener('change', atualizarPreco )
  document.querySelector('#layout-sim').addEventListener('change', atualizarPreco)
  document.querySelector('#layout-nao').addEventListener('change', atualizarPreco)
  
  document.querySelector('#prazo').addEventListener('click', function(){
    
    const prazo = document.querySelector('#prazo').value;
    
    document.querySelector('label[for=prazo]').innerHTML = `Prazo: ${prazo} semanas`;
    
    atualizarPreco()
  })
  
  function atualizarPreco(){
    
    const qtde = document.querySelector('#qtde').value;
    const temJs = document.querySelector('#js').checked;
    const incluirLayout = document.querySelector('#layout-sim').checked;
    const prazo = document.querySelector('#prazo').value;
    
    let preco = qtde * 100;
    if(temJs) preco *= 1.1; //preco = preco + 10%
    if(incluirLayout) preco += 500;
    let taxaUrgencia = 1 - prazo * 0.1;
    preco *= 1 + taxaUrgencia;
    
    document.querySelector('#preco').innerHTML =  `R$ ${preco.toFixed(2)}`
}