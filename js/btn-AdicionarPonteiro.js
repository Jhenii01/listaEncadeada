function add(dado, next) {
    var numeroPonteiro = $("#qtd-ponteiro").val();

    numeroPonteiro++;

    if (numeroPonteiro < 5) {
        $("#qtd-ponteiro").val(numeroPonteiro);
        $("#area-ponteiro")
            .append('<div class="celula">' +
                '<label>' + numeroPonteiro + '</label>' +
                '<div class="row celula-display" >' +
                '<div class="row" >' +
                '<input class="col-md-2 float-left display input-' + numeroPonteiro + '" value="' + dado + '" />' +
                '<input class="col-md-2 float-left display input-' + numeroPonteiro + '" value="' + next + '" />' +
                '</div>' +
                '<div class="row">' +
                '<a href="#" class="btn-navegacao" id="btn-before-' + numeroPonteiro + '">' +
                '<i class="material-icons">' +
                'navigate_before' +
                '</i>' +
                '</a>' +
                '<a href="#" class="btn-navegacao" id="btn-next-' + numeroPonteiro + '">' +
                '<i class="material-icons">' +
                'navigate_next' +
                '</i>' +
                '</a>' +
                '</div>' +
                '</div>' +
                '</div>');
        let cor = gera_cor();
        $(".input-" + numeroPonteiro).css("background-color", cor);
        return new Array({ number: numeroPonteiro, cor: cor });
    } else {
        alert("Numero máximo de ponteiros atingido");
    }
}

// gera uma cor aleatória em hexadecimal
function gera_cor() {
    let cor;
    
    do {
        let hexadecimais = '0123456789ABCDEF';
        cor = '#';
        // Pega um número aleatório no array acima
        for (let i = 0; i < 6; i++) {
            //E concatena à variável cor
            cor += hexadecimais[Math.floor(Math.random() * 16)];
        }
        
    } while (cores.includes(cor))
    cores.push(cor);
    return cor;
}

$(document).ready(function () {

    $("#btn-next").click(function () {
        var a = $(this).parent("#endereco").siblings().prevObject.prevObject[0].nodeName;
        $("#pluzze-" + a).hide();
        console.log($(this).parent("#next-endereco").siblings()

        );
    })

});