// target element
// target the input element (popup-menu)
const input = document.getElementById("action__input_1");
// target the switch element (dark-mode-switch)
const darkModeToggle = document.getElementById("dark__mode__toggle");
// target the switch element (checkbox checked style)
const checkbox = document.querySelector(".main__table")

// event handler
// click handler (popup-menu)
const toggleMenu = (event) => {
  // target the menu element
  const menu = document.getElementById("action__menu_1");
  menu.classList.toggle("hidden");
};
// toggle handler (dark-mode-switch)
const darkModeToggleHandler = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};
// toggle handler (add the checked class to the row)
const selectTable = (event) => {
  const target = event.target
  const parent = target.closest(".table__row")
  parent.classList.toggle("checked")
}

// bind the event
input.addEventListener("click", toggleMenu);
darkModeToggle.addEventListener("change", darkModeToggleHandler);
checkbox.addEventListener("change", selectTable)