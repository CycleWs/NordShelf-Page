const toggle = document.getElementById("toggleTheme");

function setTheme(isLight) {
  document.body.classList.toggle("light-mode", isLight);
  localStorage.setItem("theme", isLight ? "light" : "dark");
  toggle.checked = isLight;
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") === "light";
  setTheme(savedTheme);
});

toggle.addEventListener("change", () => {
  setTheme(toggle.checked);
});