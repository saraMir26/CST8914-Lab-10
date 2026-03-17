# Lab 10: Accessible JavaScript – Focus Management



##  Project Files

-  [Focus HTML File](./focus.html)
-  [JavaScript File](./menufunction.js)

---

## 📌 Overview

This lab focuses on improving accessibility using JavaScript by implementing proper keyboard interaction and focus management.

The goal is to ensure that keyboard-only users can navigate a menu using arrow keys and interact with it effectively.

---

##  Accessibility Features Implemented

###  Roving Tabindex Technique
- Only one menu item has `tabindex="0"`
- All other items have `tabindex="-1"`
- Focus moves dynamically using JavaScript

###  Keyboard Support
- `Enter` or `ArrowDown` → Opens menu
- `ArrowDown` / `ArrowUp` → Navigate menu items
- `Enter` → Select menu item
- `Escape` → Close menu and return focus

###  Focus Management
- Focus moves to the first menu item when menu opens
- Focus returns to the button when menu closes
- Focus is programmatically controlled using `.focus()`

###  ARIA Attributes
- `aria-haspopup="true"` indicates a menu
- `aria-controls` links button to menu
- `aria-expanded` dynamically updates menu state

---

##  Testing Instructions

1. Use `Tab` to focus the **Pizza Menu** button  
2. Press `Enter` or `ArrowDown` to open the menu  
3. Use `ArrowUp` and `ArrowDown` to navigate  
4. Press `Enter` to select an item  
5. Press `Escape` to close the menu  

---
