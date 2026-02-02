import { getUser } from "../shared/Http_servis.js";
import { renderTaskUser } from "../src/services/render.js";

export async function loginUser() {
    const loginEmail = document.getElementById("email").value;
    const loginPassword = document.getElementById("password").value;

    const users = await getUser("users", "No se pudieron obtener los usuarios");

    // Buscar usuario
    const userFound = users.find(
        user => user.email === loginEmail && user.password === loginPassword
    );

    if (!userFound) {
        return alert("Email o contraseña incorrectos");
    }

    sessionStorage.setItem("user", JSON.stringify(userFound));
    
    if (userFound.role === "admin") {
        location.replace("./templates/dashboard.html");
        renderTaskUser()
    } else {
        location.replace("./templates/users.html");
        renderTaskUser()
    }
}
