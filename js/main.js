var cores = new Array();

var endAnt = null;

/**
 * Função inicial que faz o carregamento inical das informações
 */
function onLoad() {

    (function () {
        var imported = document.createElement('script');
        imported.src = 'btn-AdicionarPonteiro.js';
        document.getElementsByTagName('head')[0].appendChild(script);
        
    });

    posicionarLista();
    $("#head-end").val(list[0].end);

    let cor = gera_cor();
    $(".input-head").css("background-color", cor);

    ponteiros.push({ nome: "head", cor: cor }); 
       
    colorirPluzze(cor, list[0].end);
}

/**
 * Função posiciona todos os pluzze na tela
 */
function posicionarLista() {
    list.forEach(e => {
        $("#dado-" + e.end).text(e.dado);
        $("#next-" + e.end).val(e.next);
        hide(e.end);
    });

    show(list[0].end);

}

/**
 * Função controla a adição do poteiro e o prenchimento de cor do mesmo 
 */
function onClick() {
    let ponteiro = add(list[0].end);
    if(ponteiro != null){
        ponteiros.push(ponteiro);
        colorirPluzze(ponteiro.cor, list[0].end);
    }
}

/*Coloca cor no pluzze */
/**
 * Preenche o pluzze com a cor passada por parametro
 * 
 * @param {*} cor : cor que será usada no preenchimento
 * @param {*} end : endereço do pluzze que será preenchido
 */
function colorirPluzze(cor, end) {

    $("#dado-" + end).css("background-color", cor);
    $("#next-" + end).css("background-color", cor);
}

/**
 * Retorna a cor referente ao ponteiro passado por parametro
 * 
 * @param {*} nome : nome do ponteiro que está buscando a cor
 */
function procurarCor(nome){
    return ponteiros.filter(l=> l.nome == nome)[0].cor;
}


$(document).ready(function () {

    $("#head").click(function () {
        let enderecoPluzze = navHead();
        
        var nome = $( this ).prev("input").prev("input").val();

        let cor = procurarCor(nome);
        colorirPluzze(cor, enderecoPluzze);
    })

    $("#head-end").focusin(function () {
        endAnt = $(".input-head").val().toUpperCase();
    });

    $("#head-end").focusout(function () {
        
        let  endAtual = $(".input-head").val().toUpperCase();
        
        if(endAnt != endAtual){
            $("#pluzze-" + endAtual).show();
            $("#pluzze-" + endAnt).hide();
        }

    });
});