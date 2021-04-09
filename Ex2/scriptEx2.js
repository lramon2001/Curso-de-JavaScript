function verificar(){
    var data = new Date()
    var ano =data.getFullYear()
    var anoNasc= document.getElementById('inputAno')
    var sexo= document.getElementsByName('sexoRadius')
    var resposta=document.getElementById('res')
    var genero=""
    var idade= ano -Number(anoNasc.value)
    var img=document.createElement('img')
    var fotografia= window.document.getElementById('fotografia')

    img.setAttribute('id','foto')
    resposta.innerHTML=idade
    
    if(anoNasc.value.length==0){
        window.alert("Preencha o campo")
    }
    else if(anoNasc.value>ano){
        window.alert("Informe um valor válido")
    }
    else if(sexo[0].checked){
        genero="masculino"
        if(idade<3){
              resposta.innerHTML=`Detectamos um bebê do gênero ${genero} `
              img.setAttribute('src','joao.png')
              fotografia.appendChild(img)

        }
        else if(idade<5){
            resposta.innerHTML=`Detectamos uma criança do gênero ${genero}`
            img.setAttribute('src','heitor.png')
            fotografia.appendChild(img)
        }
        else if(idade<12){
            resposta.innerHTML=`Detectamos uma criança do gênero ${genero}`
            img.setAttribute('src','vitinho.png')
            fotografia.appendChild(img)
        }
        else if(idade <20){
            resposta.innerHTML= `Detectamos um adolescente do gênero ${genero}`
        }
        else if(idade<60){
            resposta.innerHTML=`Detectamos um adulto do gênero ${genero}`
        }
        else{
            resposta.innerHTML=`Detectamos um idoso do gênero ${genero}`
        }
    }
    else if(sexo[1].checked){
        genero="feminino"
        if(idade<3){
              resposta.innerHTML=`Detectamos um bebê do gênero ${genero} `
        }
        else if(idade<=12){
            resposta.innerHTML=`Detectamos uma criança do gênero ${genero}`
            img.setAttribute('src','dudinha.png')
            fotografia.appendChild(img)
        }
        else if(idade <20){
            resposta.innerHTML= `Detectamos um adolescente do gênero ${genero}`
           
        }
        else if(idade<60){
            resposta.innerHTML=`Detectamos um adulto do gênero ${genero}`
        }
        else{
            resposta.innerHTML=`Detectamos um idoso do gênero ${genero}`
        }
        
    }
    
}