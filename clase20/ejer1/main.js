const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function cambiaTema(ev) {
  if (ev.target.checked) {
    document.documentElement.setAttribute("tema", "light");
    console.log("blanco");
} else {
    document.documentElement.setAttribute("tema", "dark");
    console.log("negro");
  }
}
colorSwitch.addEventListener("change", cambiaTema);
