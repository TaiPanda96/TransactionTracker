export default async function getCustomer(accessToken) {
    const response = await fetch(`http://localhost:8080/api/auth/get?id=63fd0227a82c13a57bd3f654`, {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', Authorization: accessToken }
    });
    const data = await response.json()
    return JSON.stringify(data);
}

