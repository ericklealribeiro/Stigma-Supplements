function openMenu(){
    document.getElementById('sideMenu').style.left='0px'
    if (window.scrollY > 40){
        document.getElementById('menuIcon').style.left='460px'
        document.getElementById('menuIcon').style.opacity='0'
        document.getElementById('menuIcon').style.zIndex='0'
        document.getElementById('menuIcon2').style.zIndex='2'
        document.getElementById('menuIcon2').style.left='460px'
        document.getElementById('menuIcon2').style.top='-12px'
        document.getElementById('menuIcon2').style.opacity='1'
    } else {
        document.getElementById('menuIcon').style.left='460px'
        document.getElementById('menuIcon').style.opacity='0'
        document.getElementById('menuIcon').style.zIndex='0'
        document.getElementById('menuIcon2').style.zIndex='2'
        document.getElementById('menuIcon2').style.left='460px'
        document.getElementById('menuIcon2').style.top='-12px'
        document.getElementById('menuIcon2').style.opacity='1'
    }
}

function closeMenu(){
    document.getElementById('sideMenu').style.left='-460px'
    document.getElementById('menuIcon').style.left='160px'
    document.getElementById('menuIcon').style.opacity='1'
    document.getElementById('menuIcon').style.zIndex='2'
    document.getElementById('menuIcon2').style.zIndex='0'
    document.getElementById('menuIcon2').style.left='160px'
    document.getElementById('menuIcon2').style.top='6px'
    document.getElementById('menuIcon2').style.opacity='0'
}
