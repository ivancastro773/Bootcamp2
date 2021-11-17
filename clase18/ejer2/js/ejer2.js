const acc = document.querySelectorAll(".accordion");
const line = document.querySelector(".line");
let i=0;
let len = acc.length;
for (; i < len; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.classList.toggle("line");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}