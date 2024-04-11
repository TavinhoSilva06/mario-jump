const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const pulo = () => {
    mario.classList.add('jump-class');

    setTimeout(() => {

        mario.classList.remove('jump-class');

    }, 500);
}

const loop = setInterval(() => {
    
    //Posição atual do pipe
    const pipePosition = pipe.offsetLeft;
    console.log("posição do pipe", pipePosition)
   
    
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log("posição do mario", marioPosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        console.log("Foi de vasco")

        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.left = '${marioPosition}px';

        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50x'
        
        //Recarrega a página da URL automaticamente assim que o mario morre.
        //E tem um intervalo de tempo de 1 segundo para que isso aconteça.
        setTimeout(function() {
            window.location.reload(true);
          }, 1000);

        clearInterval(loop);


    }

}, 10);
//Adiciona o comportamento de pulo, quando o usuário tocar na tecla "espaço" do teclado
document.addEventListener('keydown', pulo);

function startup() {
    console.log("Entrou no mario");
    //Chama um elemento "document" que seria todo o conteúdo do meu HTML, 
    //e chama a função "querySelector", na qual pega um elemento que contém a classe ("game-html")
    //E atribui o que foi encontrado a uma variável chamda "el"
    var el = document.querySelector(".game-html");
    console.log("Valor da variavel el", el);
    //adiciona a variável "el", logo chamando a função "addEventListener", na qual nomeia o nome "touchstart"
    //e chama outra função chamada "tocounatela", o que com tudo isso, o jogo vai reconhecer o toque do dedo
    el.addEventListener("touchstart", tocounatela, false);

}


function tocounatela(evt) {
    pulo();
}


