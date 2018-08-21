var list = [
    { dado: '12', next: 'D' },
    { dado: '45', next: 'F' },
    { dado: '32', next: 'A' },
    { dado: '28', next: 'E' },
    { dado: '36', next: 'C' },
    { dado: '68', next: 'B' },

];
console.log(list);

function onLoad() {

    (function () {
        var imported = document.createElement('script');
        imported.src = 'btn-AdicionarPonteiro.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    })
    $("#head-dado").val(list[0].dado);
    $("#head-next").val(list[0].next);
}

function onClick(){
    add(list[0].dado,list[0].next);
}

