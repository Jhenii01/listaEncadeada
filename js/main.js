var list = [
    { dado: '12', next: 'F', end: 'D' },/**Começo em D */
    { dado: '45', next: 'A', end: 'F' },
    { dado: '32', next: 'E', end: 'A' },
    { dado: '28', next: 'C', end: 'E' },
    { dado: '36', next: 'B', end: 'C' },
    { dado: '68', next: 'NULL', end: 'B' },

];

var ponteiros = new Array();
var cores = new Array();

function onLoad() {

    (function () {
        var imported = document.createElement('script');
        imported.src = 'btn-AdicionarPonteiro.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    });

    posicionarLista();
    $("#head-dado").val(list[0].dado);
    $("#head-next").val(list[0].next);

    let cor = gera_cor();
    $(".input-head").css("background-color", cor);
    colorirPluzze(cor,list[0].end);
}

function posicionarLista() {
    list.forEach(e => {
        $("#dado-" + e.end).text(e.dado);
        $("#next-" + e.end).text(e.next);
        $("#pluzze-" + e.end).hide();
    });

    $("#pluzze-" + list[0].end).show();

}

function colorirPluzze(cor, end) {

    $("#dado-" + end).css("background-color", cor);
    $("#next-" + end).css("background-color", cor);
}

function onClick() {
    var ponteiro = add(list[0].dado, list[0].next);
    ponteiros.push(ponteiro);
    colorirPluzze(ponteiro[0].cor, list[0].end);
}

