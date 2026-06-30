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
