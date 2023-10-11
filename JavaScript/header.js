function homeLogo(){
    if (window.scrollY > 40){
        document.getElementById('logoHome').style.top='-37px'
        document.getElementById('logoHomeH1').style.fontSize='35px'
        document.getElementById('logoHomeH3').style.fontSize='21px'
        document.getElementById('logoHomeH3').style.height='21px'
        document.getElementById('btnSideMenu').style.left='50px'
        document.getElementById('btnSideMenu').style.top='24px'
    } else {
        document.getElementById('logoHome').style.top='0px'
        document.getElementById('logoHomeH1').style.fontSize='40px'
        document.getElementById('logoHomeH3').style.fontSize='25px'
        document.getElementById('logoHomeH3').style.height='30px'
        document.getElementById('btnSideMenu').style.left='160px'
        document.getElementById('btnSideMenu').style.top='45px'
    }
}
document.addEventListener('scroll', homeLogo)

function openMenu(){
    if (window.scrollY > 40){
        
    }
}