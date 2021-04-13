var res=window.document.getElementById("resposta")
var n=window.document.getElementById("campoN")
var lista=[]
var s=window.document.getElementById("select")
function verifica(num){
    if(num>0 && num<100){
        return true;
    }
    else{
        return false
    }
}
function naLista(num){
    if(lista.indexOf(Number(num))!=-1){
        return true;
    }
    else{
        return false;
    }
}



function adiciona(){
   
if(verifica(n.value)&&!naLista(n.value)){
   var item=window.document.createElement('option')
   item.text=n.value
   lista.push(Number(n.value))
   s.appendChild(item)
}



}
function finalizar(){
    if(lista.length==0){
        res.innerHTML=`Adicione números`
    }
    else{
        var qtd=lista.length
        res.innerHTML=`No total, temos ${qtd} números na lista<br>`
        lista.sort()
        res.innerHTML+=`O menor valor é ${lista[0]}<br>`
        res.innerHTML+=`O maior valor é ${lista[lista.length-1]}<br>`
        let soma=0

         for(let valor in lista){
             soma+=lista[valor]
         }
        res.innerHTML+=`A soma de todos os valores é  ${soma}<br>`
        res.innerHTML+=`A média de todos os valores é  ${soma/qtd}<br>`
    }

}