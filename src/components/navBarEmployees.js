import { store } from "../state/store.js"

// render the nav from page manager
export function navBarViewEmployees() {
  return `
    <nav>
        <ul>
            <li><a href="#/myTask">My Task</a></li>
            <li><a href="#/profile">Profile</a></li>
            <button id="btnCreateTask">create task</button>
            <button id="btnLogOut">LogOut</button>
        </ul>
    </nav>
    `
}


// This block of code logs the user out
export function navBarLogicEmployees() {
  const btnLogOut = document.querySelector("#btnLogOut")

  if (btnLogOut) {
    btnLogOut.addEventListener('click', () => {
      store.user = null
      localStorage.removeItem('user')
      window.location.hash = "#/login";
    })
  }
}



