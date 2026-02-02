import { authGuard } from "../src/services/guard.js";

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        sessionStorage.clear();
        location.replace("../index.html");
    });
}

window.addEventListener("pageshow", () => {
    const user = sessionStorage.getItem("user");

    if (!user) {
        location.replace("../index.html");
    }
});
