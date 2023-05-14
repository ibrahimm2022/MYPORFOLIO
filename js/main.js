let links = document.querySelectorAll(".link"),
  toggle = document.querySelector(".toggle"),
  menu = document.querySelector(".links"),
  more = document.querySelector(".read-more"),
  currentSlide;

links.forEach((link) => {
  link.onclick = function (e) {
    check();
    this.classList.add("active");
    currentSlide = parseInt(this.dataset.index);
    slider(currentSlide);
  };
});

toggle.onclick = function () {
  this.classList.toggle("close");
  menu.classList.toggle("active");
};

// Slider

more.onclick = () => {
  check();
  links[1].classList.add("active");
  currentSlide = 1;
  slider(currentSlide);
};

let sliderContainer = document.querySelector(".slider-container"),
  item = document.querySelectorAll(".slide"),
  size = sliderContainer.firstElementChild.offsetWidth;

window.onresize = () => {
  size = sliderContainer.firstElementChild.offsetWidth;
  slider(currentSlide);
};

function slider(value) {
  sliderContainer.style.transform = `translatex(-${value * size}px)`;
}
function check() {
  links.forEach((link) => {
    link.classList.remove("active");
  });
}

// Slide Skills
let slidecont = document.querySelector(".slide-skcontainer"),
  slideSkills = document.querySelector(".slide-skills");

let div = document.createElement("div");
div.className = "slide-skcontainer";
div.innerHTML = slidecont.innerHTML;
slideSkills.append(div);

let slideAnimate = document.querySelectorAll(".slide-skcontainer");

slideAnimate.forEach((slide) => {
  slide.style.animation = "10s animate infinite linear";

  slideSkills.onmouseenter = (e) => {
    slideAnimate.forEach((s) => (s.style.animationPlayState = " paused"));
  };
  slideSkills.onmouseleave = (e) => {
    slideAnimate.forEach((s) => (s.style.animationPlayState = "running"));
  };
});
