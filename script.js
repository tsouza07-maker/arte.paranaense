const botoesCutir = document.querySeletorAll(".curtir");
botoesCutir.forEach(function(botaoCurtir){
    let curtir = false;
    botaoCurtir.addEventListeer("click", curtir);
function curtir(){
    const contador = botaoCurtir.querySeletor("span");
    if(curtir === false){  
        contador.textContent++;
        curtir = true;
} else{
    contador.textContent--;
    curtir = false;

}
}
});
