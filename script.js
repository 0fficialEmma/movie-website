
// Banner slider
var swiper = new Swiper('.latest-movies',{
    effect:'coverflow',
    grapCursor: true,
    autoplay: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow:{
        rotate: 20,
        stretch: 0,
        depth:200,
        modifier:1,
        slideShows: true,
    },
    loop: true,
})
// Continue watching slider

var swiper2 = new Swiper('.continue__watching-list',{
    slidesPerView: 6,
    breakpoints: {
        200:{
            slidesPerView: 1.5,
        },
        400:{
            slidesPerView: 1.5,
        },
        600:{
            slidesPerView: 3,
        },
        1100:{
            slidesPerView: 5,
        },
    },
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
// Mobile menu
var nav_toggle = document.querySelector(".nav_toggle");
var nav_menu = document.querySelector(".nav_menu");
var nav_items = document.querySelectorAll(".nav_item");

nav_toggle.addEventListener('click',function (){
    nav_menu.classList.toggle('open');
    nav_toggle.classList.toggle('open');
});

nav_items.forEach( item => {
    item.addEventListener('click',function(){
        nav_menu.classList.remove('open');
        nav_toggle.classList.remove('open');
    })
})
// Scroll animation
const sr = ScrollReveal({
    distance: '60px',
    duration: 1800,
    reset: true,
});
sr.reveal(`.latest-movies, .continue__watching-list`,{
    origin: 'top',
    interval: 100
})
sr.reveal(`.description-container`,{
    origin:'left'
})
sr.reveal(`.details`,{
    origin:'right',
    interval:100
})
sr.reveal(`.footer, .continue__watching-list`,{
    origin:'bottom',
    interval:100
})
// Trailers (I only added 2 correct trailers & repeated the oppenheimer for the other movies 😅)
var trailers = {
    0:{
        videoURL:"onward2.mp4"
    },
    1:{
        videoURL:"oppenheimer2.mp4"
    },
    2:{
        videoURL:"looper.mp4"
    },
    3:{
        videoURL:"small-foot.mp4"
    },
    4:{
        videoURL:"free-guy.mp4"
    },
    5:{
        videoURL:"barbie.mp4"
    },
    6:{
        videoURL:"it.mp4"
    },
    7:{
        videoURL:"world-war-z"
    }
}

// Show trailer overlay video of the current movie
var overlay = document.querySelector(".overlay");
var videoContainer = document.querySelector("#movie-trailer");
var showTrailer = (index) => {
    videoContainer.innerHTML = `
    <video controls autoplay id="video">
    <source src="assets/${trailers[index].videoURL}" type="video/mp4">
    </video>
    `
    overlay.classList.add("show");
}
// Close trailer overlay
var closeTrailer = () => {
    var video = document.querySelector("#video");
    video.pause(); // pause video when close overlay 
    overlay.classList.remove("show");
}
