const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('bnt-avancar');
const setaVoltar = document.getElementById('bnt-voltar');
let imagemAtual = 0;

setaAvancar.addEventListener('click', function () {

    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens) {return;}

    imagemAtual++;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');

})

setaVoltar.addEventListener('click' , function() {
    
    if(imagemAtual === 0) {return }
    
    imagemAtual--;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');

})