//variaveis globais
let qtd=0;
let virada=0;
let jogadas=0;
let acertos=0;
const c=[2];
const i=[2];
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
        array[i]=array[i+1]=`<li class="par${i}">
        <div class="carta abaixada" onclick="virar(this,${i})"><img src="imagens/${parrots[j]}" class="verso esconder"/><img src="imagens/front.png" class="frente" /></div>
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

function virar(carta,par){
    console.log(virada);
        jogadas++;
        if(virada<2){
        if(carta.classList.contains("abaixada")){
            
            i[virada]=par;
            c[virada]=carta;
            console.log(c[virada]);
            carta.classList.add('estouVirada');
            carta.classList.remove('abaixada');
            carta.querySelector(".frente").classList.add('esconder');
            carta.querySelector(".verso").classList.remove('esconder');
            virada++;
            
        }
        if(virada===2){
            if(Number(i[0])===Number(i[1])){
                console.log(i[0],i[1]);
                acertos++;
                /*c[0].setAttribute("onclick","#");
                c[1].setAttribute("onclick","#");*/
            }
            else {
            setTimeout('desvirar(c[0])',1000);
            setTimeout('desvirar(c[1])', 1000);
            }
            virada=0;
        }
    }
fim();
}

function desvirar(carta){
    carta.classList.remove('estouVirada');
    carta.classList.add('abaixada');
    carta.querySelector(".frente").classList.remove('esconder');
    carta.querySelector(".verso").classList.add('esconder');


}
function fim(){
    console.log("acertos:"+acertos);
    if (acertos===(qtd/2)) alert(`Você ganhou em ${jogadas} jogadas!`);
}

