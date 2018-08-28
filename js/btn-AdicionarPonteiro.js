let nomePonteiro = ['p','q','r','s','t'];
let nomeUsado =  ['head'];
var ponteiros = new Array();
var list = [
    { dado: '12', next: 'F', end: 'D' },/**Começo em D */
    { dado: '45', next: 'A', end: 'F' },
    { dado: '32', next: 'E', end: 'A' },
    { dado: '28', next: 'C', end: 'E' },
    { dado: '36', next: 'B', end: 'C' },
    { dado: '68', next: 'NULL', end: 'B' },

];


/**
 * Exibe todos os pluzze que possuem ponteiro que apontam para eles
 */
function exibeMemoria(){
    nomeUsado.forEach(e =>{
        var memoria = $( "input[value='"+e+"']" ).next().val();
        let btn =  $( "input[value='"+e+"']" ).next().next();
        let cor = ponteiros.filter(p => p.nome == e)[0].cor;
        colorirPluzze(cor,memoria);
        show(memoria);
    })
    
}

/**
 * Função seleciona um nome para o ponteiro a partir do array global nomePonteiro
 * e adiciona ao array nomeUsado
 * 
 * @return nome para um ponteiro
 */
function escolheNomePonteiro(){
    
    let nome = null;
    do{
        let index = Math.floor(Math.random() * 5);
        nome = nomePonteiro[index];
    }while(nomeUsado.includes(nome));
    
    nomeUsado.push(nome);
    return nome;
}

/**
 * Esconde o dado e o input que estão dentro do pluzze 
 * 
 * @param {*} endHide : endereço do pluzze que deve ser escondido
 */
function hide(endHide){
    $("#dado-"+endHide).hide();
    $("#next-"+endHide).hide();
}

/**
 * Exibe o dado e o input que estão dentro do pluzze
 * 
 * @param {*} endShow : endereço do pluzze que deve ser exbido
 */
function show(endShow){
    $("#dado-"+endShow).show();
    $("#next-"+endShow).show();
}


/**
 * Faz a navegação do ponteiro Head 
 * 
 * @return endereco que deve ser exibido
 */
function navHead(){
    let endHide = $("#head-end").val().toUpperCase(); /*Valor que está no input do ponteiro */
    let endShow = $("#next-"+endHide).val(); /* Valor que está no input do pluzze */
    hide(endHide);
    show(endShow);
    $("#head-end").val(endShow);    
    exibeMemoria();
    return endShow;
}

/**
 * Faz a nevegação dos ponteiros adicionados depois
 * 
 * @param {*} btn : botão que foi ativado para ir para o próximo nó
 */
function navNext(btn){
    let endHide = $( btn ).prev("input").val().toUpperCase();/*Valor que está no input do ponteiro */
    let endShow = $("#next-"+endHide).val(); /* Valor que está no input do pluzze */

    hide(endHide);
    show(endShow);
    $( btn ).prev("input").val(endShow);

    colorirAposNavegacao(btn,endShow);
    exibeMemoria();
    
}

/**
 * Tinge os campos do pluzze após a navegação
 * 
 * @param {*} btn : botão do ponteiro que o usuario selecionou
 * @param {*} enderecoPluzze : endereco do pluzze que deve ser preenchido com cor
 */
function colorirAposNavegacao(btn, enderecoPluzze){
    var nome = $( btn ).prev("input").prev("input").val();
    let cor = procurarCor(nome);
    colorirPluzze(cor, enderecoPluzze);
}

/**
 * Adiciona um ponteiro a tela
 * 
 * @param {*} endereco : endereço em que o ponteiro está apontando
 */
function add(endereco) {
    var numeroPonteiro = $("#qtd-ponteiro").val();
    let nome = escolheNomePonteiro();
    numeroPonteiro++;

    if (numeroPonteiro < 5) {
        $("#qtd-ponteiro").val(numeroPonteiro);
        $("#area-ponteiro")
            .append('<div class="celula">' +
                '<label>' + nome.toUpperCase() + '</label>' +
                '<div class="row celula-display" >' +
                '<input type="hidden" value='+nome+'>'+
                '<input class="col-md-2 float-left display input-' + nome + '" value="' + endereco + '" />' +
                '<a href="#" class="btn-navegacao" onclick="navNext(this)" >' +
                '<i class="material-icons">' +
                'navigate_next' +
                '</i>' +
                '</a>' +
                '</div>' +
                '</div>');
        let cor = gera_cor();
        $(".input-" + nome).css("background-color", cor);
        show(endereco);
        return { nome: nome, cor: cor };
    } else {
        alert("Numero máximo de ponteiros atingido");
        return null;
    }
}

/**
 * Função seleciona um cor a partir de array com o auxilio de um random
 * 
 * @return uma cor em hexadecinal
 */
function gera_cor() {
    let resultado;
    
    do {
    let cor = ['#4dd880','#fad6ae','#b1e4d3','#823e9b','#ece172','#8be17e','#ffc107',
            '#26a993','#d448a1','#02f46e'];
        let index = Math.floor(Math.random() * 10);
        resultado = cor[index];
        
    } while (cores.includes(resultado))
    cores.push(resultado);
    return resultado;
}


/*Menu lateral voce modifica quem aparece 
na imagem vc modifica pra quem aponta

pesquisa qualitativa
*/