import { main } from "./element.js";
import { containerUser } from "./element.js";
import { getUser } from "../../shared/Http_servis.js";

export function render(view){
    main.innerHTML = ""
    main.insertAdjacentHTML("afterbegin", view)
}

export async function renderTaskUser (){
    const renderUser = await getUser("users", "No se pudieron obtener los usuarios")
    const renderTask = await getUser("tasks", "No se pudieron obtener los usuarios")

    if (renderUser.email == renderTask.created){
        
        renderTask.forEach(task =>{
            const card = document.createElement('div')

            containerUser.innerHTML = ""
            card.innerHTML = `
                    <ul>
                        <li>
                            ${task.created}
                        </li>
                        <li>
                            ${task.nameCreated}
                        </li>
                        <li>
                            ${task.createTask}
                        </li>
                        <li>
                            ${task.descriptionTaks}
                        </li>
                    </ul>
            `;

            return containerUser.appendChild(card);
        })
    }else{
            containerUser.innerHTML = ""
        }

}

