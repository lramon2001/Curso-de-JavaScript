function run(){

    var start=document.getElementById("txts")
    var end=document.getElementById("txte")
    var pass=document.getElementById("txtp")
    var answer=document.getElementById("saida")

    var contador
    if(end.value>start.value){
        for(contador=Number(start.value);contador<=Number(end.value);contador+=Number(pass.value)){
            answer.innerHTML+= contador+" <br>"
        }
    }
    else if(start.value>end.value){
        for(contador=Number(start.value);contador>=Number(end.value);contador-=Number(pass.value)){
            answer.innerHTML+= contador+" <br>"
        }
    }
  
    
}