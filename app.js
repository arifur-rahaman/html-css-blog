const menuBar = document.getElementById("menu-bar");
const menu = document.getElementById("menu-icon");

menuBar?.addEventListener("click", () => {
  if (menu?.className === "hidden") {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
