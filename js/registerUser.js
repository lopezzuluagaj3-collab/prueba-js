import { postUser } from "../shared/Http_servis.js";


export async function CreateNewUser() {
    const fullNameInput = document.getElementById("fullName");
    const newEmailInput = document.getElementById("newEmail");
    const newPasswordInput = document.getElementById("newPassword");

    const createUser = {
        id: crypto.randomUUID(),
        name: fullNameInput.value,
        email: newEmailInput.value,
        password: newPasswordInput.value,
        role: "user"
    };

    try {
        const userCreated = await postUser("users", createUser, "No se pudo registrar el usuario");
        console.log("Usuario creado:", userCreated);
        alert("Usuario registrado correctamente");

        // Limpiar inputs
        fullNameInput.value = "";
        newEmailInput.value = "";
        newPasswordInput.value = "";

    } catch (error) {
        console.log(error);
    }
}
