const botoesCutir = document.querySeletorAll(".curtir");
botoesCutir.forEach(function (botaoCurtir){
    let curtir = false;
    botaoCurtir.addEventListeer("click", curtir);
function curtir(){
    const contador = botaoCurtir.querySeletor("span");
    if(curiu === false){  
        contador.textContent++;
        curiu = true;
} else{
    contador.textContent--;
    curtiu = false;

}
}
});
