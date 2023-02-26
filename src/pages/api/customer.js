export default async function getCustomer() {
    const response = await fetch(`http://localhost:8080/api/auth/get?id=63fa9aaaee468767315a76e8`, {
        headers: { 'Accept': 'application/json' }
    });
    const data = await response.json()
    return JSON.stringify(data);
}

