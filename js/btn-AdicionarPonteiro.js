

$(document).ready(function () {

    $("#btn-Ponteiro").click(function () {
        var numeroPonteiro = $("#qtd-ponteiro").val();
        numeroPonteiro++;
        if (numeroPonteiro < 5) {
            $("#qtd-ponteiro").val(numeroPonteiro);
            $("#area-ponteiro")
                .append('<div class="celula">' +
                    '<label>' + numeroPonteiro + '</label>' +
                    '<div class="row celula-display">' +
                    '<div class="row">' +
                    '<input class="col-md-2 float-left display" value="10" />' +
                    '<input class="col-md-2 float-left display" value="B" />' +
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
        }else{
            alert("Numero máximo de ponteiros atingido");
        }

    })

    $("#btn-next").click(function (){
        var a = $( this ).parent("#endereco").siblings().prevObject.prevObject[0].nodeName;
        $("#pluzze-"+a).hide();
        console.log( $( this ).parent("#next-endereco").siblings()
        
        );
    })
    
});