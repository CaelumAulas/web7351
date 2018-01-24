function fechaSubMenu() {
    document.querySelector(".item-com-submenu").classList.remove("selecionado")
}
function mostraSubMenu() {
    document.querySelector(".item-com-submenu").classList.add("selecionado")
}
document
    .querySelector(".item-com-submenu")
    .addEventListener("focusout", fechaSubMenu)

document
    .querySelector(".item-com-submenu")
    .addEventListener("focusin", mostraSubMenu)