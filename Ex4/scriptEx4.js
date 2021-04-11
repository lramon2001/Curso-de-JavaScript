function tabuada(){
  var num=window.document.getElementById("textNumber")
  var resposta=window.document.getElementById("text")
  var select=window.document.getElementById("select")
  if(num.value.length==0){
    resposta.innerHTML="Digite um número"
  }
  else{
    select.innerHTML=""
    for(var contador=0;contador<11;contador++){
      var item=window.document.createElement('option')
      item.text=`${contador}x ${num.value}= ${contador*Number(num.value)}`
      select.appendChild(item)
    }
    
  }
  

}
