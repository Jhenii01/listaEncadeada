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
    listaEditada = listaOriginal;
    random = Math.floor(Math.random() * 20);

    posicionarLista();
    
    preencheInputPonteiro("head");
    
    nomePonteiro.forEach(e => {
        $("#"+e).hide();        
    });
    $("#head").show();
    $("#btn-show-head").hide();

}

/**
 * Função posiciona todos os pluzze na tela
 */
function posicionarLista() {
    listaEditada.forEach(e => {
        $("#dado-" + e.end).text(e.dado);
        $("#label-"+e.end).text(codificar(e.end));        
        if(e.end != "B"){
            $("#next-" + e.end).val(codificar(e.next));
        }else{
            $("#next-" + e.end).val(e.next);
        }
        hidePluzze(e.end);
    });

    showPluzze(listaEditada[0].end);

}


/*Coloca cor no pluzze */
/**
 * Preenche o pluzze com a cor passada por parametro
 * 
 * @param {*} cor : cor que será usada no preenchimento
 * @param {*} end : endereço do pluzze que será preenchido
 */
function colorirPluzze(cor, end) {
    end = end.toUpperCase();
    $("#dado-" + end).css("background-color", cor);
    $("#next-" + end).css("background-color", cor);
}
