


let count = 1;


function homeBtnRight(){
    count++;
    let actualImg = 'img' + count;
    let prevImg = 'img' + (count - 1);
    
    let nextImg = '';
    if (count == 5) {
        nextImg = 'img1';
    } else {
        nextImg = 'img' + (count + 1);
    }

    if (count > 5) {
        count = 1;
        prevImg = 'img5';
        document.getElementById(prevImg).style.left='-1600px'
        document.getElementById(prevImg).style.zIndex='0'
        actualImg = 'img1';
        document.getElementById(actualImg).style.left='0px'
        document.getElementById(actualImg).style.zIndex='2'
        nextImg = 'img2';
        document.getElementById(nextImg).style.left='1600px'
    } else {
        document.getElementById(prevImg).style.left='-1600px'
        document.getElementById(prevImg).style.zIndex='0'
        document.getElementById(actualImg).style.left='0px'
        document.getElementById(actualImg).style.zIndex='2'
        document.getElementById(nextImg).style.left='1600px'
    }
    console.log(count);
}


function homeBtnLeft(){
    count--;
    let actualImg2 = 'img' + count;

    let prevImg2 = '';
    if (count == 1) {
        prevImg2 = 'img5';
    } else {
        prevImg2 = 'img' + (count - 1);
    }

    let nextImg2 = 'img' + (count + 1);
        

    if (count < 1){
        count = 5;
        prevImg2 = 'img4';
        document.getElementById(prevImg2).style.left='-1600px'
        document.getElementById(prevImg2).style.zIndex='0'
        actualImg2 = 'img5';
        document.getElementById(actualImg2).style.left='0px'
        document.getElementById(actualImg2).style.zIndex='2'
        nextImg2 = 'img1';
        document.getElementById(nextImg2).style.left='1600px'
        document.getElementById(nextImg2).style.zIndex='0'
    } else {
        document.getElementById(prevImg2).style.left='-1600px'
        document.getElementById(prevImg2).style.zIndex='0'
        document.getElementById(actualImg2).style.left='0px'
        document.getElementById(actualImg2).style.zIndex='2'
        document.getElementById(nextImg2).style.left='1600px'
        document.getElementById(nextImg2).style.zIndex='0'
    }
    console.log(count)
}