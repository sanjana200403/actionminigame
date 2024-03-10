score=0
cross = true
audio = new Audio('walk.wav')
audiogo = new Audio('food.wav')
setTimeout(()=>{
audio.play()
},1000)
document.onkeydown = function(e){
    console.log("press code" , e.keyCode)
    if(e.keyCode==38){
        dino = document.querySelector('.dino')
        dino.classList.add('animateDino')
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },1000)
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino')
        dinox =parseInt(  window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left = dinox+112+"px"
       
        
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino')
        dinox =parseInt(  window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left = (dinox-112)+"px"
       
        
    }
}

setInterval(()=>{
    dino = document.querySelector('.dino')
    gameOver =document.querySelector('.gameOver')
    obsticle = document.querySelector('.obstacle')
    dx =parseInt(  window.getComputedStyle(dino,null).getPropertyValue('left'))
    dy =parseInt(  window.getComputedStyle(dino,null).getPropertyValue('top'))
    ox =parseInt(  window.getComputedStyle(obsticle,null).getPropertyValue('left'))
    oy= parseInt( window.getComputedStyle(obsticle,null).getPropertyValue('top'))
   
    
    offsetX = Math.abs(dx-ox)
    offsetY = Math.abs(dy-oy)
    console.log(offsetX,offsetY)
    if(offsetX<180 && offsetY<70){
        gameOver.style.visibility ='visible'
        obsticle.classList.remove('obstacleAni')
        audiogo.play()
        setTimeout(()=>{
            audiogo.pause()
            audio.pause()
        },1000)

    }
    else if (offsetX<133 &&  cross){
        score+=1
        updateStore(score)
        cross=false
        setTimeout(()=>{
            cross= true
        },1000)
       
        
        setTimeout(()=>{
            aniDur = parseFloat( window.getComputedStyle(obsticle,null).getPropertyValue('animation-duration'))
            newDur = aniDur-0.1
            obsticle.style.animatiomDuration = newDur+ 's'
            console.log("jhiulh"+ newDur)

        },500)
      
        
    }


},10)
function updateStore(score){
    scoreCont.innerHTML ="your score:" + score

}