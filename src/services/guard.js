export function authGuard() {
    const user = sessionStorage.getItem("user");


    if (sessionStorage.getItem('user') == ""){
        location.replace("../index.html")
        return 
    }


}


