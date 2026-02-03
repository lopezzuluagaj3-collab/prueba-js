Project Documentation: Task Management System

Introduction
This project consists of a Single Page Application (SPA) web application designed for task management. The system allows for seamless interaction between users with Employee and Manager roles, dynamically managing tasks through a modular, component-based architecture and a custom router.
## English

### Description
An efficient tool for task assignment and tracking. Managers can create, edit, and delete tasks, while employees can view their pending duties and mark them as completed in real-time.

### descrition more tecni

How does the code work? (Technical Explanation)

The project is built using the Single Page Application (SPA) pattern, which means the page never fully reloads; only the content of the main container changes.

### Technologies Used
- **JavaScript (ES6+):** Modules, Async/Await, Fetch API.
- **HTML5 & CSS3:** Custom variables and Flexbox/Grid.


Setup & Run

control + alt + t 
git clone https://github.com/lopezzuluagaj3-collab/prueba-js.git


2) Start JSON Server (API)
Bash

install node: https://nodejs.org/es/download

control + alt + t 
npm install -g json-server

npx json-server --watch db.json --port 3000

API:

http://localhost:3000/users
http://localhost:3000/tasks

3) Start Open Live Server
