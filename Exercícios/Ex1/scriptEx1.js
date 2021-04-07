function carregar(){
    var msg=window.document.getElementById('msg')
    var dia = new Date();
    var fotografia= window.document.getElementById('fotografia')
    var hora=dia.getHours();
    var minutos=dia.getMinutes();
    var saudacao=window.document.getElementById('saudacao')
    msg.innerHTML=`São ${hora} horas e ${minutos} minutos`
    var img=document.createElement('img')
    img.setAttribute('id','foto')
    
    


    if(hora>=6 && hora<=12){
         saudacao.innerHTML="Você não pode mudar o seu passado mas pode estragar o seu futuro"
       
         document.body.style.background='#e2cd9f'
         img.setAttribute('src','bomdia.png')
    }
    else if(hora>12 && hora<=18){
        saudacao.innerHTML="Você é mais fraco do que pensa !!!"
       
        document.body.style.background='#b9846f'
        img.setAttribute('src','boatarde.png')
    }
    else if(hora>18 && hora<=23){
        saudacao.innerHTML="Nenhum obstáculo é grande para quem desiste !!!"
        img.setAttribute('src','boanoite.png')
        document.body.style.background='#2c2f33'
    }
    else{
        saudacao.innerHTML="O recomeço é a oportunidade de um novo fracasso !!!"
        img.setAttribute('src','boamadrugada.png')
        document.body.style.background='#000000'
    }
    fotografia.appendChild(img)

}