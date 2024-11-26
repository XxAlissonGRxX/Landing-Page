/* 

Quando clicar na seta para avançar temos que esconder todas as imagens e mostrar a proxima imagem!

    A imagem atual começa em 0 porque é a primeira imagem
    Assim que for clicado no avançar eu preciso adicionar +1 no contador de imagens para poder saber que na hora eu vou mostrar a segunda imagem!

    esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe 
        
    mostrar a proxima imagem
        pegar todas as imagens, descobrir qual é a proxima, e colocar a classe
        mostrar nela
        
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

// Quando clicar na seta para avançar temos que esconder todas as imagens e mostrar as proximas imagens!

// Quando clicar na seta para avançar temos que esconder todas as imagens e mostrar a próxima imagem!

setaAvancar.addEventListener('click', function () {
    // testa se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        console.log('não pode avançar mais');
        return;
    }
    /* 
        
        a imagem atual começa em 0 porque é a primeira imagem, assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens para poder saber que agora vou ter que mostrar a segunda imagem.
    
    */
    imagemAtual++;

    /* 
        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar
    */
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    /*
        mostrar a próxima imagem
            pegar todas as imagens, descobrir qual é a próxima e a colocar a chave mostrar nela   
    */

    imagensPainel[imagemAtual].classList.add('mostrar');
})

// Quando clicar na seta para voltar temos que esconder todas as imagens e mostrar a imagem anterior!

setaVoltar.addEventListener('click', function () {

    if (imagemAtual === 0) {
        console.log('não tem mais como voltar')
        return;
    }

    imagemAtual--;

    /* 
        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar
    */
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    /*
        mostrar a imagem anterior
            pegar todas as imagens, descobrir qual é a anterior e a colocar a chave mostrar nela   
    */

    imagensPainel[imagemAtual].classList.add('mostrar');
})

// Função para avançar automaticamente
function avançarImagem() {
    // Incrementar o contador para a próxima imagem
    imagemAtual++;

    // Se chegarmos ao final, voltar para a primeira imagem (índice 0)
    if (imagemAtual >= imagensPainel.length) {
        imagemAtual = 0;
    }

    /* 
        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar
    */
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    /*
        mostrar a próxima imagem
            pegar todas as imagens, descobrir qual é a próxima e a colocar a chave mostrar nela   
    */
    imagensPainel[imagemAtual].classList.add('mostrar');
}

// Intervalo para mudar de imagem a cada 3 segundos (3000ms)
setInterval(avançarImagem, 5000);  // A cada 5 segundos a imagem muda automaticamente