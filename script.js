const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

//LADO ESQUERDO

//ATIVAÇÃO PARA AUMENTAR E FOCAR EM UM QUANDO PASSAR O MOUSE.
left.addEventListener('mouseenter', () => container.classList.add('hover-left')) //não é preciso colocar {} pois, esta é apenas uma linha nesta função
//AGORA PARA REMOVER O AUMENTAR, QUANDO TIRAR O CURSOR DO MOUSE DE CIMA.
left.addEventListener('mouseleave', () => container.classList.remove('hover-left')) //não é preciso colocar {} pois, esta é apenas uma linha nesta função

//LADO DIREITO

//ATIVAÇÃO PARA AUMENTAR E FOCAR EM UM QUANDO PASSAR O MOUSE.
right.addEventListener('mouseenter', () => container.classList.add('hover-right')) //não é preciso colocar {} pois, esta é apenas uma linha nesta função
//AGORA PARA REMOVER O AUMENTAR, QUANDO TIRAR O CURSOR DO MOUSE DE CIMA.
right.addEventListener('mouseleave', () => container.classList.remove('hover-right')) //não é preciso colocar {} pois, esta é apenas uma linha nesta função
