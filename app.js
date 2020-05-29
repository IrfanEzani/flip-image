const frontSide = document.getElementsByClassName('flip-box-inner')
const backSide = document.getElementsByClassName('flip-box-back')

function flipLeft() {
    for (let i = 0; i < frontSide.length; i++) { 
        console.log('hi')
        frontSide[i].style.transform = "rotateY(180deg)";
        setTimeout(() => {
            frontSide[i].style.transform = "";
        },1000)
    }
}

function flipRight() {
    for (let i = 0; i < frontSide.length; i++) { 
        console.log('hi')
        frontSide[i].style.transform = "rotateY(-180deg)";
        setTimeout(() => {
            frontSide[i].style.transform = "";
        },1000)
    }
}
function flipUp() {
    for (let i = 0; i < frontSide.length; i++) { 
        console.log('hi')
        frontSide[i].style.transform = "rotateX(180deg)";
        setTimeout(() => {
            frontSide[i].style.transform = "";
        },1000)
    }
}
function flipBottom() {
    for (let i = 0; i < frontSide.length; i++) { 
        console.log('hi')
        frontSide[i].style.transform = "rotateX(-180deg)";
        setTimeout(() => {
            frontSide[i].style.transform = "";
        },1000)
    }
}