let ponteirosAtivos = ['head'];
var ponteiros = new Array();
var listaOriginal = [
    { dado: '12', next: 'F', end: 'D' },/**Começo em D */
    { dado: '45', next: 'A', end: 'F' },
    { dado: '32', next: 'E', end: 'A' },
    { dado: '28', next: 'C', end: 'E' },
    { dado: '36', next: 'B', end: 'C' },
    { dado: '68', next: 'NULL', end: 'B' },

];

let listaEditada = [];
var endAnt = null;
var random = 0;


function codificar(char) {
    let code = char.charCodeAt(0);
    code += random;
    return String.fromCharCode(code);
}

function decodificar(char) {
    let code = char.charCodeAt(0);
    code -= random;
    return String.fromCharCode(code);
}


function alteraLista(pluzze) {
    let next = decodificar($("#next-" + pluzze).val().toUpperCase());
    let index = listaEditada.findIndex(l => l.end == pluzze);
    listaEditada[index].next = next;

}

/**
 * Exibe todos os pluzze que possuem ponteiro que apontam para eles
 */
function exibeMemoria() {

    ponteirosAtivos.forEach(e => {
        let memoria = decodificar($("input[value='" + e + "']").next().val());
        showPluzze(memoria);
        let cor = procurarCor(e);
        colorirPluzze(cor, memoria);
    })

}

/**
 * Retorna a cor referente ao ponteiro passado por parametro
 * 
 * @param {*} nome : nome do ponteiro que está buscando a cor
 */
function procurarCor(nome) {
    return ponteiros.filter(l => l.nome == nome)[0].cor;
}

/**
 * Esconde o dado e o input que estão dentro do pluzze 
 * 
 * @param {*} endHide : endereço do pluzze que deve ser escondido
 */
function hidePluzze(endHide) {
    endHide = endHide.toUpperCase();
    $("#dado-" + endHide).hide();
    $("#next-" + endHide).hide();
    $("#label-" + endHide).hide();
}

/**
 * Exibe o dado e o input que estão dentro do pluzze
 * 
 * @param {*} endShow : endereço do pluzze que deve ser exbido
 */
function showPluzze(endShow) {
    endShow = endShow.toUpperCase();
    $("#dado-" + endShow).show();
    $("#next-" + endShow).show();
    $("#label-" + endShow).show();

}

function exibePonteiro(btn) {

    let ponteiro = $(btn).prev("input").val();
    preencheInputPonteiro(ponteiro);

    $("#" + ponteiro).show();
    $("#btn-show-" + ponteiro).hide();
    ponteirosAtivos.push(ponteiro);
    exibeMemoria();
}

function preencheInputPonteiro(ponteiro) {

    let cor = gera_cor();
    $("#" + ponteiro + "-end").val(codificar(listaEditada[0].end));
    $("#" + ponteiro + "-end").css("background-color", cor);
    ponteiros.push({ nome: ponteiro, cor: cor });
    colorirPluzze(cor, listaEditada[0].end);

}

/**
 * Faz a nevegação dos ponteiros pelos nós
 * 
 * @param {*} btn : botão que foi ativado para ir para o próximo nó
 */
function navNext(btn) {
    let endHide = $(btn).prev("input").val().toUpperCase();/*Valor que está no input do ponteiro */
    let endShow = $("#next-" + decodificar(endHide)).val(); /* Valor que está no input do pluzze */

    hidePluzze(decodificar(endHide));
    $(btn).prev("input").val(endShow);

    exibeMemoria();

}

/**
 * Função seleciona um cor a partir de array com o auxilio de um random
 * 
 * @return uma cor em hexadecinal
 */
function gera_cor() {
    let resultado;

    do {
        let cor = ['#4dd880', '#fad6ae', '#b1e4d3', '#823e9b', '#ece172', '#8be17e', '#ffc107',
            '#26a993', '#d448a1', '#02f46e'];
        let index = Math.floor(Math.random() * 10);
        resultado = cor[index];

    } while (cores.includes(resultado))
    cores.push(resultado);
    return resultado;
}

function armazenaEnderecoAnterior(input) {

    endAnt = input.value.toUpperCase();
}

function navegacaoPeloInput(input) {
    let endAtual = input.value.toUpperCase();
    let ponteiro = $(input).prev("input").val();
    if (endAnt != endAtual) {
        hidePluzze(decodificar(endAnt));
    }
    exibeMemoria();
}
