let links = document.querySelectorAll(".link"),
  toggle = document.querySelector(".toggle"),
  menu = document.querySelector(".links"),
  currentSlide;

links.forEach((link) => {
  link.onclick = function (e) {
    links.forEach((link) => {
      link.classList.remove("active");
    });
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

let sliderContainer = document.querySelector(".slider-container"),
  item = document.querySelectorAll(".slide"),
  size = sliderContainer.firstElementChild.offsetWidth;

window.onresize = () => {
  size = sliderContainer.firstElementChild.offsetWidth;
};

function slider(value) {
  sliderContainer.style.transform = `translatex(-${value * size}px)`;
}
