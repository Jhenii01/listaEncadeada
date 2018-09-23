class PuzzleController {

    constructor(model, corService, puzzleService, codificacaoService, ponteiroService) {
        this._appModel = model;
        this._corservice = corService;
        this._puzzleService = puzzleService;
        this._codificacaoService = codificacaoService;
        this._ponteiroService = ponteiroService;
    }

    /**
     * Função inicial que faz o carregamento inical das informações
     */
    onLoad() {

        this._appModel.random = Math.floor(Math.random() * 20);

        this.posicionarLista();

        this._ponteiroService.preencheInputPonteiro("head");
        this._appModel.NomePonteiro.forEach(e => {
            $("#" + e).hide();
        });
        $("#head").show();
        $("#btn-show-head").hide();

    }

    /**
     * Função posiciona todos os puzzle na tela
     */
    posicionarLista() {
        this._appModel.ListaEditada.forEach(e => {
            $("#dado-" + e.end).text(e.dado);
            $("#label-" + e.end).text(this._codificacaoService.codificar(e.end));
            if (e.end != "B") {
                $("#next-" + e.end).val(this._codificacaoService.codificar(e.next));
            } else {
                $("#next-" + e.end).val(e.next);
            }
            this._puzzleService.hidepuzzle(e.end);
        });

        this._puzzleService.showpuzzle(this._appModel.ListaEditada[0].end);

    }

    alteraLista(puzzle) {
        let next = this._codificacaoService.decodificar($("#next-" + puzzle).val().toUpperCase());
        let index = this._appModel.ListaEditada.findIndex(l => l.end == puzzle);
        this._appModel.ListaEditada[index].next = next;
    }

    confereResultado() {
        let tam = this._appModel.ListaEditada.length;
        this._appModel.ListaEditada.reverse();
        let correto = true;
        for (var i = 0; i < tam; i++) {
            if (this._appModel.ListaEditada[i].next != this._appModel.ListaOriginal[tam - i - 1].next)
                correto =  false;
        }

        if(!correto){
            alert("Tente novamente");
        }else{
            alert("Parabens está correto");
        }

    }




}
