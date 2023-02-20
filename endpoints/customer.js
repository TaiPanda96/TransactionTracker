export default async function getCustomer() {
    const response = await fetch(`http://localhost:8080/api/customers/auth-get?customerId=63eaca8559ef868d14301442`, {
        headers: { 'Accept': 'application/json'}
    });
    const data = await response.json()
    return JSON.stringify(data);
}