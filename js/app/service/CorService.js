class CorService{
    constructor(model){
        this._appModel = model;
        this._cores = [];
    }
    /**
     * Retorna a cor referente ao ponteiro passado por parametro
     * 
     * @param {*} nome : nome do ponteiro que está buscando a cor
     */
    procurarCor(nome) {
        return this._appModel.Ponteiros.filter(l => l.nome == nome)[0].cor;
    }
    
    /**
     * Preenche o puzzle com a cor passada por parametro
     * 
     * @param {*} cor : cor que será usada no preenchimento
     * @param {*} end : endereço do puzzle que será preenchido
     */
    colorirpuzzle(cor, end) {
        end = end.toUpperCase();
        $("#dado-" + end).css("background-color", cor);
        $("#next-" + end).css("background-color", cor);
    }
    
    /**
     * Função seleciona um cor a partir de array com o auxilio de um random
     * 
     * @return uma cor em hexadecinal
     */
    gera_cor() {
        let resultado;
    
        do {
            let cor = ['#4dd880', '#fad6ae', '#b1e4d3', '#823e9b', '#ece172', '#ffc107',
                '#26a993', '#d448a1', '#02f46e'];
            let index = Math.floor(Math.random() * 9);
            resultado = cor[index];
    
        } while (this._cores.includes(resultado))
        this._cores.push(resultado);
        return resultado;
    }

}
