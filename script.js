let menu = document.querySelector('#menu-btn');
let nav = document.querySelector('header nav');
let navLink = document.querySelectorAll('header nav a');
let sections =document.querySelectorAll('section')
let header =document.getElementById('header')
let scrollBtn =document.getElementById('scroll-btn')

menu.onclick = () => {
    menu.classList.toggle('fa-close');
    nav.classList.toggle('open');
};

window.ontouchmove = () => {
    menu.classList.remove('fa-close');
    nav.classList.remove('open');
};

navLink.forEach((link) => link.addEventListener('click', closeNav ,ListActive));

function closeNav() {
    navLink.forEach((link) =>
    menu.classList.remove('fa-close'),
    nav.classList.remove('open'));
};

function ListActive() {
    navLink.forEach((link) =>
    link.classList.remove('header-active'));
    this.classList.add('header-active');
};


window.onscroll= () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop -60;
        let Height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + Height){
            navLink.forEach(links => {
                links.classList.remove('header-active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('header-active');
            });
        };
    });
};
window.addEventListener('scroll', scrolling )

function scrolling(){
    if(scrollY >= 900){
        scrollBtn.style.display = 'block';
    }else{
        scrollBtn.style.display = 'none';
    }
    if(scrollY > 0){
        header.style.background = "#2d3f51"
    }else{
        header.style.background = "none"
    }
}


scrollBtn.onclick = function scrolltop(){
    scroll(0,0)
}

let box = document.querySelectorAll('.box')
let list = document.querySelectorAll('#list')

for( let i = 0; i < list.length; i++ ){
    list[i].addEventListener('click', listshow );
};

function listshow(){
for( let k = 0; k < list.length; k++ ){
    list[k].classList.remove('work-active');
    this.classList.add('work-active');
    }

let listdata = this.getAttribute('data-show');

for( let k = 0; k < box.length; k++ ){
    box[k].classList.add('hide');
    
if(box[k].getAttribute('data-act') == listdata || listdata == ("all")){
    box[k].classList.remove('hide');
}
}
}






