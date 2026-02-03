import { projectService } from "../services/services.js";
import { store } from "../state/store.js";

// render the login
export function loginView() {
    return `
        <div class="auth-container">
            <div class="auth-card">
                <h2>TASK</h2>
                <p>Ingresa para gestionar tus tareas</p>
                
                <div class="form-group">
                    <label>Correo Electrónico</label>
                    <input type="email" id="login-email" placeholder="ejemplo@correo.com">
                </div>

                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" id="login-password" placeholder="********">
                </div>

                <button id="btn-login" class="btn-auth">Iniciar Sesión</button>
                
                <p class="auth-footer">
                    ¿No tienes cuenta? <a href="#/register">Regístrate aquí</a>
                </p>
            </div>
        </div>
    `;
}

// validates if the entered data matches

export async function loginLogic() {
    const btnLogin = document.getElementById("btn-login");

    btnLogin.addEventListener("click", async () => {
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        // Simple validation: that there are no empty fields
        if (email === "" || password === "") {
            alert("Por favor, completa todos los campos");
            return;
        }

        try {
            const users = await projectService.getUsers();
            
            const userFound = users.find(u => u.email === email && u.password === password);

            if (userFound) {
                store.user = userFound;
                localStorage.setItem("user", JSON.stringify(userFound));

                alert("¡Hola de nuevo, " + userFound.name + "!");

                // redirection depending on the user's role
                if (userFound.role === "Manager") {
                    window.location.hash = "#/dashboard"; 
                } else {
                    window.location.hash = "#/myTask"; 
                }
            } else {
                alert("Correo o contraseña incorrectos. Inténtalo de nuevo.");
            }
        } catch (error) {
            console.error("Error en el login:", error);
            alert("No se pudo conectar con el servidor.");
        }
    });
}
