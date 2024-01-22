// for displying the score
score = 0
cross = true

// following code is for to play music at collegen
audioGo = new Audio('gameOver.mp3')
BackgroudSound = new Audio('NewBackGroundSound.mp3')


document.onkeydown = function (e) {
    // BackgroudSound.play()

    console.log("key code is =", e.key)

    if (e.key == 'ArrowUp') {
        dino = document.querySelector('.dino');
        dino.classList.add('animatedDino');
        setTimeout(() => {
            dino.classList.remove('animatedDino')
        }, 900);
    }
    if (e.key == 'ArrowRight') {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = dinox + 112 + "px"
    }
    if (e.key == 'ArrowLeft') {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = dinox - 112 + "px"
    }
}

setInterval(() => {
    // the following code for the background music of game
    // BackgroudSound.play()
    // here is the end of background music code

    dino = document.querySelector('.dino')
    gameOver = document.querySelector('.gameOver')
    obsticle = document.querySelector('.obsticleAni')

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))

    ox = parseInt(window.getComputedStyle(obsticle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obsticle, null).getPropertyValue('top'))

    // these following code is for detecting the collegen of two object 
    // but still can't work to find some error are occure

    // for calculating the  x and y value 
    // dx = 100 & ox = 100 = 0
    // dy = 582 &  oy = 582 = 0

    offsetX = Math.abs(dx - ox)
    offsetY = Math.abs(dy - oy)



    // following code is for collapsing two object with each
    // other after the colligion the two object are stuck at perticular point
    if (offsetX < 90 && offsetY < 100) {
        gameOver.style.visibility = 'visible'
        obsticle.classList.remove('obsticleAni')
        // following code is for play music at game over

        // following code for back colligen 
        // audioGo.play()
        // here is the end 


    }
    // here colligen code is end






    // calling the the function to update the score
    if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000);


        // setout function for animation
        setTimeout(() => {
            animationDuration = parseFloat(window.getComputedStyle(obsticle, null).getPropertyValue('animation-duration'))
            newDuration = animationDuration + 0.4
            obsticle.style.animationDurationi = newDuration + 's'
        }, 500);
    }



}, 100);

// following code is for updating the score 
function updateScore(score) {
    scoreCont.innerHTML = "Your score is : " + score
}