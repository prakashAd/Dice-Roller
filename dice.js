let dice_images = ["./images/1.png", "./images/2.png", "./images/3.png", "./images/4.png", "./images/5.png", "./images/6.png"]
let win = ["player1","player2","Draw"]
document.getElementById('dice1').src = dice_images[0]
document.getElementById('dice2').src = dice_images[0]
document.getElementById('result').innerHTML = win[]


const roll_dice1 =() => {

    let r = Math.random() * 5
    r = Math.round(r)
    document.getElementById('dice1').src = dice_images[r]
    let a = Math.random() * 5
    a = Math.round(a)
    document.getElementById('dice2').src = dice_images[a]


    if (r > a){
        document.getElementById('result').innerHTML = win[0]
    }
    else if(r<a){
        document.getElementById('result').innerHTML = win[1]

    }
    else{
        document.getElementById('result').innerHTML = win[2]
    }
}

