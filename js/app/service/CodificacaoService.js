class CodificacaoService{
    
    constructor(model){
        this._appModel = model;
    }

    codificar(char) {
        let code = char.charCodeAt(0);
        code += this._appModel.Random;
        return String.fromCharCode(code);
    }
    
    decodificar(char) {
        let code = char.charCodeAt(0);
        code -= this._appModel.Random;
        return String.fromCharCode(code);
    }
}
