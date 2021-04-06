QuantasCartas();

function QuantasCartas(){
    let i=0;
    let cartas;
     while(!i){
         cartas=parseInt(prompt("Com quantas cartas deseja jogar?"));
         if(cartas%2===0){
             if(cartas>3 && cartas<15){
                 i=1;
             }else i=0;
         }
         else i=0;
     }
}


