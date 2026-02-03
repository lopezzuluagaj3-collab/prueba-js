import { projectService } from "../services/services.js";

// reload the form
export function registerView() {
    return `
        <div class="auth-container">
            <div class="auth-card">
                <h2>Registro de Eventos</h2>
                <form id="register-form">
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" name="name" required placeholder="Tu nombre completo">
                    </div>

                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" name="email" required placeholder="correo@ejemplo.com">
                    </div>

                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="password" name="password" required placeholder="********">
                    </div>

                    <div class="form-group">
                        <label>Rol</label>
                        <select name="role">
                            <option value="Employees">Employees</option>
                            <option value="Manager">Manager</option>
                        </select>
                    </div>

                    <button type="submit" class="btn-auth">Registrarse</button>
                </form>
            </div>
        </div>
    `;
}

//This function is responsible for capturing user data and validating the data

export async function registerLogic() {
    const form = document.getElementById("register-form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        
        const name = formData.get("name").trim();
        const email = formData.get("email").trim();
        const password = formData.get("password");
        const role = formData.get("role");
        
        if (name.length < 3) {
            alert("Por favor, ingresa un nombre válido (mínimo 3 letras).");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        try {
            // Please verify that the email address is not duplicated.
            const users = await projectService.getUsers();
            const userExists = users.find(u => u.email === email);
            
            if (userExists) {
                alert("Este correo ya está registrado. Intenta con otro.");
                return;
            }
            const newUser = { name, email, password, role };
            await projectService.postUser(newUser);
            
            alert("¡Registro exitoso! Ya puedes iniciar sesión.");
            window.location.hash = "#/login";
            
        } catch (error) {
            console.error("Error en registro:", error);
            alert("Error crítico: No se pudo establecer conexión con el servidor.");
        }
    });
}
