class AppModel {

    constructor() {
        this.nomePonteiro = ['head', 'p', 's', 'r'];
        this.ponteirosAtivos = ['head'];
        this.ponteiros = new Array();
        this.listaOriginal = [
            { dado: '12', next: 'F', end: 'D' },/**Começo em D */
            { dado: '45', next: 'A', end: 'F' },
            { dado: '32', next: 'E', end: 'A' },
            { dado: '28', next: 'C', end: 'E' },
            { dado: '36', next: 'B', end: 'C' },
            { dado: '68', next: 'NULL', end: 'B' },

        ];

        this.listaEditada = [
            { dado: '12', next: 'F', end: 'D' },/**Começo em D */
            { dado: '45', next: 'A', end: 'F' },
            { dado: '32', next: 'E', end: 'A' },
            { dado: '28', next: 'C', end: 'E' },
            { dado: '36', next: 'B', end: 'C' },
            { dado: '68', next: 'NULL', end: 'B' },

        ];
        this.random = 0;
        this.cores = new Array();
    }

    get ListaEditada(){
        return this.listaEditada;
    }

    get NomePonteiro(){
        return this.nomePonteiro;
    }

    get PonteirosAtivos(){
        return this.ponteirosAtivos;
    }

    get Ponteiros(){
        return this.ponteiros;
    }

    get ListaOriginal(){
        return this.listaOriginal;
    }

    get Random(){
        return this.random;
    }

    get Cores(){
        return this.cores;
    }
    
}
