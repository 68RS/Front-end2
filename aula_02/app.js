alert ("Pronto para iniciar o jogo?")

let jogadaUsuario = prompt(
    "Você escolhe 1 = pedra, 2 = papel ou 3 = tesoura?"
);

let jogador = Number (jogadaUsuario);
let jogadaScript = Math.floor(Math.random()*3)+1;
let jogador1 = 0
let jogadaScript1 = 0


console.log(`Jogada usuario: ${jogador}`);
console.log(`Jogada script: ${jogadaScript}`);

var compare = function (converter, jogadaScript) {
   
    if(converter === jogadaScript) {
    
        alert ("Oresultado é um empate!")
    
    }
    
    else if (converter === 1) {

        if(jogadaScript === 3){
            
            return ("Usuário venceu!")
        
        }else {

            alert ("Script venceu!")
        }
    }
    
    else if (converter === 2) {

        if(jogadaScript === 1){
            
            alert ("Usuário venceu!")
        
        }else {

            alert ("Script venceu!")
        }
    }
    
    else if (converter === 3) {

        if(jogadaScript === 1){
            
           alert ("Usuário venceu!")
        
        }else {

            alert ("Script venceu!")
        }
    }
};

    console.log(compare(converter, jogadaScript));
