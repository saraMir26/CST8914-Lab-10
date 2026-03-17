const menuButton = document.getElementById("menubutton1");
const menu = document.getElementById("menu1");
const items = Array.from(menu.querySelectorAll("[role='menuitem']"));
const output = document.getElementById("action_output");

let currentIndex = 0;

// -----------------------------
// Set focus (roving tabindex)
// -----------------------------
function setFocus(index) {
  items.forEach((item, i) => {
    item.setAttribute("tabindex", i === index ? "0" : "-1");
  });

  items[index].focus();
}

// -----------------------------
// Open menu
// -----------------------------
function openMenu() {
  menu.style.display = "block";
  menuButton.setAttribute("aria-expanded", "true");
  currentIndex = 0;
  setFocus(currentIndex);
}

// -----------------------------
// Close menu
// -----------------------------
function closeMenu() {
  menu.style.display = "none";
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.focus();
}

// -----------------------------
// Mouse click
// -----------------------------
menuButton.addEventListener("click", () => {
  const isOpen = menu.style.display === "block";
  isOpen ? closeMenu() : openMenu();
});

// -----------------------------
// Keyboard on button
// -----------------------------
menuButton.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
    e.preventDefault();
    openMenu();
  }
});

// -----------------------------
// Keyboard inside menu
// -----------------------------
items.forEach((item) => {
  item.addEventListener("keydown", (e) => {

    if (e.key === "ArrowDown") {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % items.length;
      setFocus(currentIndex);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      setFocus(currentIndex);
    }

    if (e.key === "Enter") {
      e.preventDefault();
      output.value = items[currentIndex].textContent;
      closeMenu();
    }

    if (e.key === "Escape") {
      e.preventDefault();
      closeMenu();
    }

  });
});