import { navBarViewManager, navBarLogicManager } from "../components/navBarManager.js";
import { navBarViewEmployees, navBarLogicEmployees } from "../components/navBarEmployees.js";

// Take the main container and reload all the page content into the div
const main = document.querySelector("#main")

export function render(view) { 
    const hash = window.location.hash || '#/login';
    main.innerHTML = "";

    const user = JSON.parse(localStorage.getItem('user'))

    if (hash === '#/login' || hash == '#/register') {
        main.innerHTML = `<section>${view}</section>`;
    } else {
        main.innerHTML = `
        ${user.role == "Employees" ? navBarViewEmployees() : navBarViewManager()}
        <section>${view}</section>`;
        user.role == "Employees" ? navBarLogicEmployees() : navBarLogicManager()
    }
}