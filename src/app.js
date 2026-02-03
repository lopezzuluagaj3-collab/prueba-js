import {router} from "./router/router.js"

// Event listeners to detect changes in the URL
window.addEventListener("hashchange", router);
window.addEventListener("load", router);