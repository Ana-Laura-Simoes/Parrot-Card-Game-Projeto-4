//Código satuado de comentários pois a programadora se perde no próprio código :)


//variaveis globais
let qtd=0;
let virada=0;
let jogadas=0;
let acertos=0;
let  cont=0;
let interval;
const identificador=[2];
const indice=[2];
const CARTASarray = [qtd];
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
        //marcar papagaios iguais com a classe parX
        CARTASarray[i]=CARTASarray[i+1]=`<li class="par${i}">
        <div class="carta estouAbaixada" onclick="virar(this,${i})"><img src="imagens/${parrots[j]}" class="verso esconder"/><img src="imagens/front.png" class="frente" /></div>
        </li>`;
    }
    //embaralha as cartas
    CARTASarray.sort(comparador);
    //imprime as cartas
    for(let i=0;i<qtd;i++){
    let elemento = document.querySelector(".lista");
    elemento.innerHTML=elemento.innerHTML+CARTASarray[i];                     
}
}


function comparador() { 
    return Math.random() - 0.5; 
}
//Ao clicar na carta
function virar(carta,par){
    if(jogadas===0){
       interval =setInterval(relogioStart, 1000);
    }
    console.log(virada);
        jogadas++;
        //Garante que só duas cartas podem ser abertas por vez
        if(virada<2){
        //impede que o usuário selecione uma carta já aberta    
        if(carta.classList.contains("estouAbaixada")){
            indice[virada]=par;
            identificador[virada]=carta;
        //virando a carta    
            carta.classList.add('estouVirada');
            carta.classList.remove('estouAbaixada');
            carta.querySelector(".frente").classList.add('esconder');
            carta.querySelector(".verso").classList.remove('esconder');
            virada++;
            
        }
        // Se duas cartas foram abertas, conferir se são iguais
        if(virada===2){
        ehIgual();
        //zerando contador de cartas abertas
        virada=0;
        }
    }
  //conferir se todos os pares de cartas já foram descobertos  
    fim();
}
//confere se duas cartas são iguais
function ehIgual(){
    if(Number(indice[0])===Number(indice[1])){
        acertos++;
        //cartas iguais não são fechadas;


        /*c[0].setAttribute("onclick","#");
        c[1].setAttribute("onclick","#");*/
    }
    else {
     //cartas diferentes são fechadas novamente   
    setTimeout(desvirar,1000,identificador[0]);
    setTimeout(desvirar,1000,identificador[1]);
    }
}

function desvirar(carta){
    carta.classList.remove('estouVirada');
    carta.classList.add('estouAbaixada');
    carta.querySelector(".frente").classList.remove('esconder');
    carta.querySelector(".verso").classList.add('esconder');
}
function fim(){
    //console.log("acertos:"+acertos);
    if (acertos===(qtd/2)) {
        relogioStop();
        alert(`Você ganhou em ${jogadas} jogadas e ${cont} segundos!`);}
}

function relogioStart(){
    cont++;
    let contador=document.querySelector(".contador");
    contador.innerHTML=`${cont} s`;
   
}
function relogioStop(){
    clearInterval(interval);
}

