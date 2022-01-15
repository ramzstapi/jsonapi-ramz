const animationRubber = document.querySelector(".animating-rubberBand");
animationRubber.addEventListener("mouseout", function () {
  setTimeout(function () {
    animationRubber.classList.remove(
      "animate__animated",
      "animate__rubberBand"
    );
  }, 1200);
});
animationRubber.addEventListener("mouseover", function () {
  animationRubber.classList.add("animate__animated", "animate__rubberBand");
});
