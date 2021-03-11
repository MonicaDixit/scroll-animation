let boxes = document.querySelectorAll(".box");
checkboxinview();
document.addEventListener("scroll", checkboxinview);

function checkboxinview() {
  // the thing to note here is that we are trying to see if the element is closer to the
  // bottom and then we add the show class with does the translateX back to 0
  let triggerBottom = (window.innerHeight / 5) * 4;
  for (let box of boxes) {
    let boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  }
}
