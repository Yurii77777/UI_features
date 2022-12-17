"use strict";

const menuToggle = document.querySelectorAll(".toggle");
const menu = document.querySelectorAll(".menu");
const menuItems = document.querySelectorAll("li");

const handleActiveClass = (options) => {
    const { e, nodes = [] } = options;
    e.stopPropagation();

    for (let i = 0; i < nodes.length; i++) {
        const nodeItem = nodes[i];
        nodeItem[0].classList.contains("active")
            ? nodeItem[0].classList.remove("active")
            : nodeItem[0].classList.add("active");
    }

    if (!menu[0].classList.contains("active")) {
        for (let i = 0; i < menuItems.length; i++) {
            const menuItem = menuItems[i];

            menuItem.classList.contains("active") &&
                menuItem.classList.remove("active");
        }
    }
};

menuToggle[0].addEventListener("click", (e) =>
    handleActiveClass({ e, nodes: [menuToggle, menu] })
);

const handleActiveMenuItem = (options) => {
    const { e, menuItems } = options;
    e.stopPropagation();

    const userClick = e.target.parentNode;
    const menuItemsArray = Array.from(menuItems);

    if (menuItemsArray.indexOf(userClick) !== -1) {
        for (let i = 0; i < menuItemsArray.length; i++) {
            const menuItem = menuItemsArray[i];
            menuItem.classList.contains("active") &&
                menuItem.classList.remove("active");
        }

        userClick.classList.add("active");
    }
};

menuItems.forEach((item) => {
    item.addEventListener("click", (e) =>
        handleActiveMenuItem({ e, menuItems })
    );
});
