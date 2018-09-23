class PonteiroController {

      
    constructor(model,corService,puzzleService,codificacaoService,ponteiroService){
        this._appModel = model;
        this._corService = corService;
        this._puzzleService =  puzzleService;
        this._codificacaoService = codificacaoService;
        this._ponteiroService =  ponteiroService;
        this._endAnt = null;
    }

    exibePonteiro(btn) {

        let ponteiro = $(btn).prev("input").val();
        this._ponteiroService.preencheInputPonteiro(ponteiro);

        $("#" + ponteiro).show();
        $("#btn-show-" + ponteiro).hide();
        this._appModel.PonteirosAtivos.push(ponteiro);
        this.exibeMemoria();
    }

    /**
     * Exibe todos os puzzle que possuem ponteiro que apontam para eles
     */
    exibeMemoria() {

        this._appModel.PonteirosAtivos.forEach(e => {
            let memoria = this._codificacaoService.decodificar($("input[value='" + e + "']").next().val());
            this._puzzleService.showpuzzle(memoria);
            let cor = this._corService.procurarCor(e);
            this._corService.colorirpuzzle(cor, memoria);
        })

    }


    /**
     * Faz a nevegação dos ponteiros pelos nós
     * 
     * @param {*} btn : botão que foi ativado para ir para o próximo nó
     */
    navNext(btn) {
        let endHide = $(btn).prev("input").val().toUpperCase();/*Valor que está no input do ponteiro */
        let endShow = $("#next-" + this._codificacaoService.decodificar(endHide)).val(); /* Valor que está no input do puzzle */

        this._puzzleService.hidepuzzle(this._codificacaoService.decodificar(endHide));
        $(btn).prev("input").val(endShow);

        this.exibeMemoria();

    }

    armazenaEnderecoAnterior(input) {

        this._endAnt = input.value.toUpperCase();
    }

    navegacaoPeloInput(input) {
        let endAtual = input.value.toUpperCase();
        let ponteiro = $(input).prev("input").val();
        if (this._endAnt != endAtual) {
            this._puzzleService.hidepuzzle(this._codificacaoService.decodificar(this._endAnt));
        }
        this.exibeMemoria();
    }
}