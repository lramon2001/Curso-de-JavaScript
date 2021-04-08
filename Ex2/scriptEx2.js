function verificar(){
    var data = new Date()
    var ano =data.getFullYear()
    var anoNasc= document.getElementById('inputAno')
    var sexo= document.getElementsByName('sexoRadius')
    var resposta=document.getElementById('res')
    var genero=""
    if(sexo[0].checked){
        genero="Homem"
        resposta.innerHTML="Homem"
    }
    else if(sexo[1].checked){
        genero="Mulher"
        resposta.innerHTML="Mulher"
    }
    
    
}