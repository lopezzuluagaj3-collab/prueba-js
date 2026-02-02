import { main } from "../src/services/element.js";
import { loginHTML } from "../src/pages/login.js";
import { registerHTML } from "../src/pages/register.js"
import { render, renderTaskUser } from "../src/services/render.js";
import { CreateNewUser } from "../js/registerUser.js";
import { loginUser } from "../js/loginUser.js";


render(loginHTML);

main.addEventListener('click', (e) => {
    if(e.target.id === "btnRegister"){
        e.preventDefault();
        render(registerHTML)
    };
    if(e.target.id === "btnLogin"){
        e.preventDefault();
        render(loginHTML)
    }
})

main.addEventListener("submit", async (e) => {
    if (e.target.id === "form-register") {
        e.preventDefault();


        const newPassword = document.getElementById("newPassword");
        const confirmPassword = document.getElementById("confirmNewPassword");
        

        if (confirmPassword.value !== newPassword.value) {
            newPassword.value = ""
            confirmPassword.value = ""
            return alert("Tu contraseña no coincide");
        }
        await CreateNewUser(); 
    }
});

main.addEventListener('submit', async (e) =>{
    if (e.target.id == "formLogin"){
        e.preventDefault();

        loginUser()
    }
})

window.addEventListener("pageshow", () => {
    sessionStorage.clear()
});


document.getElementById('openModal').addEventListener('click', () => {
    document.getElementById('modal').showModal();
});
 document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('modal').close();
});
