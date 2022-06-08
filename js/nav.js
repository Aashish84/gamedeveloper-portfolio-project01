// toggle the icon shape and responsive navbar
const icon = document.querySelector(".icon");
icon.addEventListener("click", function () {
  //responsive nav toggle
  const navigator = document.querySelector(".nav-container");
  navigator.classList.toggle("nav-display-toggle");

  // icon x toggle
  const b1 = document.querySelector("#b-1");
  b1.classList.toggle("x");
  const b2 = document.querySelector("#b-2");
  b2.classList.toggle("y");
  const b3 = document.querySelector("#b-3");
  b3.classList.toggle("z");
});

const wrapper = document.querySelector(".wrapper");
const heroHeight = document.querySelector(".hero-container").offsetHeight;
wrapper.addEventListener("scroll", function () {
  const wrapperHeight = wrapper.scrollTop;
  if (wrapperHeight > heroHeight - 0.1) {
    document.querySelector(".header-container").classList.add("fixed-nav");
  } else {
    document.querySelector(".header-container").classList.remove("fixed-nav");
  }
});
