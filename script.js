/* =========================================
   Guardo as referências dos elementos HTML em constantes para não 
   precisar ficar buscando no documento toda vez.
   ========================================= */
const telaSelecao = document.getElementById('tela-selecao');
const telaSuspense = document.getElementById('tela-suspense');
const telaResultado = document.getElementById('tela-resultado');

const textoAnimacao = document.getElementById('texto-animacao');
const msgFinal = document.getElementById('mensagem-final');

const imgJogador = document.getElementById('img-jogador');
const imgComputador = document.getElementById('img-computador');

/* =========================================
   ESTADO DA APLICAÇÃO
   Uso 'let' porque esses valores vão mudar a cada rodada.
   ========================================= */
let escolhaJogador = '';
let escolhaComputador = '';

/* =========================================
   FUNÇÃO PRINCIPAL 
   Essa função é chamada direto no HTML 'onclick'.
   Ela inicia todo o fluxo do jogo.
   ========================================= */
function jogar(escolha) {
    escolhaJogador = escolha; // Guardo o que eu cliquei
    
    // Manipulação de Classes CSS
    // Escondo a seleção e mostro o suspense trocando a classe utilitária 'd-none'
    telaSelecao.classList.add('d-none');
    telaSuspense.classList.remove('d-none');
    
    // Chamo a função que controla o tempo da animação
    animarTexto();
}

/* =========================================
   CONTROLE DE TEMPO 
   Uso setTimeout para criar o delay entre as sílabas JO-KEN-PÔ.
   ========================================= */
function animarTexto() {
    textoAnimacao.innerText = "JO"; // Começa imediatamente
    
    // Agenda 'KEN' para daqui a 1 segundo (1000ms)
    setTimeout(() => {
        textoAnimacao.innerText = "KEN";
    }, 1000); 

    // Agenda 'PÔ!' para daqui a 2 segundos
    setTimeout(() => {
        textoAnimacao.innerText = "PÔ!";
    }, 2000); 

    // Agenda o fim da rodada para daqui a 3 segundos
    setTimeout(() => {
        finalizarRodada();
    }, 3000); 
}

/* =========================================
   LÓGICA DO JOGO
   Aqui é onde a decisão de quem ganhou acontece.
   ========================================= */
function finalizarRodada() {
    // 1. IA do Computador (RNG)
    const opcoes = ['pedra', 'papel', 'tesoura'];
    // Math.random gera de 0 a 0.99. Multiplico por 3 e arredondo para baixo para ter 0, 1 ou 2.
    const numeroAleatorio = Math.floor(Math.random() * 3); 
    escolhaComputador = opcoes[numeroAleatorio];

    // 2. Verificação de Vencedor
    let resultado = ''; 

    if (escolhaJogador === escolhaComputador) {
        resultado = 'empate';
    } else if (
        // Todas as condições onde EU ganho
        (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = 'vitoria';
    } else {
        // Se não empatou e eu não ganhei, só posso ter perdido
        resultado = 'derrota';
    }

    // Passo o resultado calculado para a função que atualiza a tela
    mostrarResultado(resultado);
}

/* =========================================
   ATUALIZAÇÃO DE INTERFACE 
   mostra o resultado final ao usuário.
   ========================================= */
function mostrarResultado(resultado) {
    // Troca de telas novamente
    telaSuspense.classList.add('d-none');
    telaResultado.classList.remove('d-none');

    // Injeção de Imagem Dinâmica: (MUITO IMPORTANTE!!!!)
    // Uso Template String (crase) para montar o caminho do arquivo com base na escolha
    // Ex se escolhi 'pedra', vira "img/mao-pedra.png"
    imgJogador.src = `img/mao-${escolhaJogador}.png`;
    imgComputador.src = `img/mao-${escolhaComputador}.png`;

    // Feedback Visual 
    if (resultado === 'vitoria') {
        msgFinal.innerText = "VOCÊ GANHOU! 🎉"; // uso emojis para adicionar "emoção" aos resultados...
        document.body.style.backgroundColor = "#4caf4fa9"; // Verde
    } else if (resultado === 'derrota') {
        msgFinal.innerText = "VOCÊ PERDEU... 😔";
        document.body.style.backgroundColor = "#f44336b9"; // Vermelho
    } else {
        msgFinal.innerText = "EMPATE! 😐";
        document.body.style.backgroundColor = "#9E9E9E"; // Cinza
    }
}

/* =========================================
   RESET DO JOGO
   Restaura o estado inicial para permitir jogar novamente
   ========================================= */
function reiniciarJogo() {
    // Esconde resultado, mostra seleção
    telaResultado.classList.add('d-none');
    telaSelecao.classList.remove('d-none');
    
    // Reseto a cor para a cor original da tela de seleção, a mesma do CSS
    document.body.style.backgroundColor = "#4e8bf372"; 
    
    // Limpa o texto da animação para a próxima vez
    textoAnimacao.innerText = "";
}