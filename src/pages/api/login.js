import axios from "axios";
export default async function login(payload){
    const response = await axios.post(`http://localhost:8080/api/auth/login`, {
        headers: { 'Accept': 'application/json' },
        body: { ...payload}
    });
    const data = await response.json()
    return JSON.stringify(data);
}