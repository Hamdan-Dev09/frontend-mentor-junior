const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const menu_cross = document.querySelector('.cross-menu');

burger.addEventListener('click', function(){
    nav.classList.toggle('nav-active');
    overlay();
});

// Bookmark
const links = document.querySelectorAll('a');
links.forEach(link =>{
    link.addEventListener('click', function(e){
        e.preventDefault();
    })
})



const bookmark = document.getElementById('toggle');
const span = document.querySelector('.bookmark span');

bookmark.addEventListener('change', function(e){
    const {checked} = e.target;
    if(checked){
        span.innerHTML = "Bookmarked";
    }else{
        span.innerHTML = "Bookmark";
    }
})


// Overlay
function overlay(){
    document.querySelector('body').classList.toggle('overlay-active');
}

