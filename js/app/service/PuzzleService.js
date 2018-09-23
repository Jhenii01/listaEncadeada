class PuzzleService{

    /**
     * Esconde o dado e o input que estão dentro do puzzle 
     * 
     * @param {*} endHide : endereço do puzzle que deve ser escondido
     */
    hidepuzzle(endHide) {
        endHide = endHide.toUpperCase();
        $("#dado-" + endHide).hide();
        $("#next-" + endHide).hide();
        $("#label-" + endHide).hide();
    }

    /**
     * Exibe o dado e o input que estão dentro do puzzle
     * 
     * @param {*} endShow : endereço do puzzle que deve ser exbido
     */
    showpuzzle(endShow) {
        endShow = endShow.toUpperCase();
        $("#dado-" + endShow).show();
        $("#next-" + endShow).show();
        $("#label-" + endShow).show();

    }

    
}