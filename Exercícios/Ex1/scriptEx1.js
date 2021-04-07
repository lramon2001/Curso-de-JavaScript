function carregar(){
    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('imagem')
    var dia = new Date();
    var hora=dia.getHours();
    var minutos=dia.getMinutes();
    var saudacao=window.document.getElementById('saudacao')
    msg.innerHTML=`São ${hora} horas e ${minutos} minutos`
  hora=4


    if(hora>=6 && hora<=12){
         saudacao.innerHTML="Você não pode mudar o seu passado mas pode estragar o seu futuro"
         img.innerHTML='<img src="bomdia.png">'
         document.body.style.background='#e2cd9f'
         
    }
    else if(hora>12 && hora<=18){
        saudacao.innerHTML="Você é mais fraco do que pensa !!!"
        img.innerHTML='<img src="boatarde.png">'
        document.body.style.background='#b9846f'
    }
    else if(hora>18 && hora<=23){
        saudacao.innerHTML="Nenhum obstáculo é grande para quem desiste !!!"
        img.scr='<img src="boanoite.png">'
        document.body.style.background='#2c2f33'
    }
    else{
        saudacao.innerHTML="O recomeço é a oportunidade de um novo fracasso !!!"
        img.scr='<img src="boamadrugada.png">'
        document.body.style.background='#000000'
    }
}