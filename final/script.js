// Navbar Background

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}
else{
navbar.classList.remove("scrolled");
}

});

// Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){
topBtn.classList.add("show");
}
else{
topBtn.classList.remove("show");
}

});

// Fade Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{
threshold:0.2
});

document.querySelectorAll(".fade-up").forEach(el => {
observer.observe(el);
});

// Mobile Menu Auto Close

document.querySelectorAll('.nav-link').forEach(link => {

link.addEventListener('click', () => {

const navbarCollapse =
document.querySelector('.navbar-collapse');

const bsCollapse =
bootstrap.Collapse.getInstance(navbarCollapse);

if(bsCollapse){
bsCollapse.hide();
}

});

});

// Hero Parallax

window.addEventListener("scroll", () => {

const hero = document.querySelector(".hero");

hero.style.backgroundPositionY =
window.pageYOffset * 0.5 + "px";

});
