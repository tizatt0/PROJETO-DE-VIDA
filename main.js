const botoes = document.querySelectorAll(".botao");
const abasConteudo = document.querySelectorAll(".aba-conteudo");

// 1. ALTERNAR ABAS AO CLICAR
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function() {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            abasConteudo[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        abasConteudo[i].classList.add("ativo");
    }
}

// 2. CONFIGURAÇÃO DOS CRONÔMETROS
// Datas futuras para os cronômetros funcionarem perfeitamente na tela
const tempoObjetivo1 = new Date("2026-10-05T00:00:00");
const tempoObjetivo2 = new Date("2026-12-05T00:00:00");
const tempoObjetivo3 = new Date("2026-12-30T00:00:00");
const tempoObjetivo4 = new Date("2027-02-01T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

// Função que calcula a diferença de tempo e devolve um array com [dias, horas, minutos, segundos]
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
   
    if (tempoFinal > 0) {
        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(segundos / 60);
        let horas = Math.floor(minutos / 60);
        let dias = Math.floor(horas / 24);

        segundos %= 60;
        minutos %= 60;
        horas %= 24;

        return [dias, horas, minutos, segundos];
    } else {
        // Se o tempo já passou ou zerou, retorna tudo zerado
        return;
    }
}

// Função que distribui cada unidade de tempo na sua respectiva div do HTML
function atualizaCronometro() {
    for (let i = 0; i < tempos.length; i++) {
        const valoresTempo = calculaTempo(tempos[i]);
       
        // Correção: acessando o índice exato do array para cada ID do HTML
        document.getElementById(`dias${i}`).textContent = valoresTempo[0];
        document.getElementById(`horas${i}`).textContent = valoresTempo[1];
        document.getElementById(`min${i}`).textContent = valoresTempo[2];
        document.getElementById(`seg${i}`).textContent = valoresTempo[3];
    }
}

// Faz o cronômetro rodar a cada 1 segundo automaticamente
setInterval(atualizaCronometro, 1000);

// Executa uma vez logo no início para carregar os dados sem o atraso de 1 segundo
atualizaCronometro();
