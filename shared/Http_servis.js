import { url } from "../src/services/element.js"

export async function getUser(derection , errorMessage){
    try{
    const res = await fetch(`${url}/${derection}`, {method: "GET" })

    if(!res.ok){
        throw new Error(`No se ha podido realizar la peticion GET a la url: ${url}`);
    }
    const data = res.json()
    return data
}catch (error){
    alert(errorMessage)
}}



export async function postUser (direction , body, errorMessage){
    try{
        const res = await fetch(`${url}/${direction}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(body)
        })

        if (!res.ok){
            throw new Error(`No se ha podido realizar la peticion GET a la url: ${url}`);
        }

        const data = await res.json()
        return data
    } catch (error){
        alert(errorMessage)
    }
}



export async function putUser( direction , id, body, errorMessage){
    try{
        const res = await fetch(`${url}/${direction}/${id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(body)
        })

        if(!res.ok){
            throw new Error(`No se ha podido realizar la peticion GET a la url: ${url}`);
        }

        const data = await res.json()
        return data
    }catch (error) {
        alert(errorMessage)
}}


export async function deleteUser( direction , id, errorMessage) {
    try {

        const response = await fetch(`${url}/${direction}/${id}`, {method: "DELETE"})

        if (!response.ok) {
            throw new Error(`No se ha podido realizar la peticion DELETE a la url: ${url}`)
        }

        const data = await response.json()
        return data

    } catch (error) {
        alert(errorMessage)
    }

}