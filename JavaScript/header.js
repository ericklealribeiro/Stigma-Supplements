function homeLogo(){
    if (window.scrollY > 40){
        document.getElementById('header').style.backgroundColor='#111111'
        document.getElementById('logoHome').style.top='-82px'
        document.getElementById('logoHomeH1').style.fontSize='35px'
        document.getElementById('logoHomeH3').style.fontSize='21px'
        document.getElementById('logoHomeH3').style.height='21px'
        document.getElementById('menuIcon').style.left='50px'
        document.getElementById('menuIcon').style.top='24px'
        document.getElementById('perfilHome').style.right='110px'
        document.getElementById('perfilHome').style.top='18px'
        document.getElementById('bagIcon').style.top='18px'
    } else {
        document.getElementById('header').style.backgroundColor='#232323'
        document.getElementById('logoHome').style.top='-50px'
        document.getElementById('logoHomeH1').style.fontSize='40px'
        document.getElementById('logoHomeH3').style.fontSize='25px'
        document.getElementById('logoHomeH3').style.height='30px'
        document.getElementById('menuIcon').style.left='160px'
        document.getElementById('menuIcon').style.top='45px'
        document.getElementById('perfilHome').style.right='160px'
        document.getElementById('perfilHome').style.top='45px'
        document.getElementById('bagIcon').style.top='45px'
    }
}
document.addEventListener('scroll', homeLogo)