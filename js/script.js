var sorteados = sorteio();
var output = document.querySelector("#output");
var msg = "";

msg += "<p>numeros sorteados: </p>"
msg += "<p>"+ sorteados.join(", ")+"</p>"

var meusNumeros = [4, 50, 36, 41, 8, 10];

for(var i = 0; i < meusNumeros.length; i++){
    msg += "<p>"+meusNumeros[i]+": ";
    //ifelse ternario
    msg += (sorteados.indexOf(meusNumeros[i]) === -1 ) ? "errou" : "acertou"
    msg += "</p>"
}

output.innerHTML = msg;

function sorteio(){
    var sorteados = [];

    function sortear(){
        return Math.floor(Math.random()*60)
    }

    while(sorteados.length < 6){
        var sorteado = sortear();
        if(sorteados.indexOf(sorteado) === -1){
            sorteados[sorteados.length] = sorteado;
            }
        }
        return sorteados
}
console.log(sorteados)


