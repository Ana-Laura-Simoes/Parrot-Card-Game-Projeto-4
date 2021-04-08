//variaveis globais
let qtd=0;
let virada=0;
let jogadas=0;
let acertos=0;
let carta1;
let carta2;
let i=[2];
const array = [qtd];
const parrots = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif',
'metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif']

QuantasCartas();


function QuantasCartas(){
    let i=0;
     while(qtd%2==1 || qtd<3 || qtd>14){
        qtd=parseInt(prompt("Com quantas cartas deseja jogar?"));
         }
    AdicionarCartas();
        }

function AdicionarCartas(){
    for(let i=j=0;i<qtd-1;i=i+2,j++){
        array[i]=array[i+1]=`<li class="classe${i}">
        <div class="carta" onclick="virar(this)"><img src="imagens/${parrots[j]}" class="verso esconder"/><img src="imagens/front.png" class="frente" /></div>
        </li>`;
    }
    //embaralha as cartas
    array.sort(comparador);
    //imprime as cartas
    for(let i=0;i<qtd;i++){
    let elemento = document.querySelector(".lista");
    elemento.innerHTML=elemento.innerHTML+array[i];                     
}
}

function comparador() { 
    return Math.random() - 0.5; 
}

function virar(carta){
        jogadas++;
        //se  tem 1/nenhuma carta virada
        if(virada<=2){
            //se a mesma carta nao esta sendo clicada 2 vezes
            if( !carta.classList.contains(".estouvirada")){
                carta.classList.add('.estouVirada');
                carta.querySelector(".frente").classList.add('esconder');
                carta.querySelector(".verso").classList.remove('esconder');
                carta1=(carta.Parentnode);
                virada++;
                if (virada===2) {
                    carta2=(carta.Parentnode);
                    ehIgual(carta1,carta2);// carta.setAttribute("onclick","#")
                }

        }

        

        
    }
}

function ehIgual(carta1,carta2){
    if((carta1.innerHTML)===(carta2.innerHTML)){
        virada=0;
        console.log("acertou");
    }

    else{
        setTimeout('desvirar(carta1)', 1000);
        setTimeout('desvirar(carta2)', 1000);
    }

}

function desvirar(carta){
    carta.classList.remove('.estouVirada');
    carta.querySelector(".frente").classList.remove('esconder');
    carta.querySelector(".verso").classList.add('esconder');
    virada--;   
}
