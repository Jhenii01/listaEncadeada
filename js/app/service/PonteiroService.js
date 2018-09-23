class PonteiroService{

    constructor(model,corService,codificacaoService){
        this._appModel = model;
        this._corService = corService;
        this._codificacaoService = codificacaoService;
    }

    preencheInputPonteiro(ponteiro) {

        let cor = this._corService.gera_cor();
        $("#" + ponteiro + "-end").val(this._codificacaoService.codificar(this._appModel.ListaEditada[0].end));
        $("#" + ponteiro + "-end").css("background-color", cor);
        this._appModel.Ponteiros.push({ nome: ponteiro, cor: cor });
        this._corService.colorirpuzzle(cor, this._appModel.ListaEditada[0].end);

    }
}