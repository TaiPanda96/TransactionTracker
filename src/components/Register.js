import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ErrorMessageContainer from "./Messages/Error";
import { HiArrowsExpand, HiArrowCircleUp } from 'react-icons/hi'

export default function RegisterComponent() {
    const router = useRouter();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userSession, setSession] = useState('');
    const [userAccessToken, setAccessToken] = useState('');
    const [userRole, setUserRole] = useState('');
    const [isLoggedIn, setLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [optional, setOptional] = useState(false);

    // Optional Fields
    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerCity, setCustomerCity] = useState('');
    const [customerZip, setCustomerZip] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let payload = optional ? {
            username: username,
            password: password,
            email: email,
            role: 'borrower',
            customerName, customerAddress, customerCity, customerZip
        } : {
            username: username,
            password: password,
            email: email,
            role: 'borrower'
        }
        axios.post(`http://localhost:8080/api/auth/register`, payload, { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
            .then(function (response) {
                return response
            }).then((response) => {
                if (response.data) {
                    let { _id, accessToken, username, role, email } = response.data;
                    if (!_id || !accessToken) { return (<ErrorMessageContainer error={"User session expired"} message={"Please login again, looks like your session has expired"} />) }
                    setLogin(true);
                    setSession(_id);
                    setAccessToken(accessToken);
                    setUserName(username);
                    setUserRole(role);
                    setEmail(email);
                } else { setLogin(false) }
            })
            .catch(function (error) {
                setError(error)
            });
    }

    if (error) { return <div className='items-center'> <ErrorMessageContainer error={error} message={error.message} /> </div> }

    if (isLoggedIn && userRole) {
        sessionStorage.setItem("authenticated", true);
        sessionStorage.setItem("userSession", userSession);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("accessToken", userAccessToken);
        sessionStorage.setItem("role", userRole);
        sessionStorage.setItem("email", email);
        router.push("/profile");
    } else {
        return (
            <div className="flex w-screen justify-center items-center">
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 w-screen">
                    <form className="space-y-8">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Register
                        </h3>
                        <div>
                            <label className="text-sm items-justify-center text-gray-900 block mb-2 dark:text-gray-300">Username</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Password</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Email</label>
                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center">
                                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Optional</label>
                                <HiArrowCircleUp className="ml-4 mb-2 text-white fill-white" onClick={() => setOptional(!optional)}>
                                </HiArrowCircleUp>
                            </div>
                            {optional && <div>
                                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Profile Type</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    value={userRole} onChange={(e) => setUserRole(e.target.value)}></input>
                            </div>}

                            {optional && <div>
                                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Organization Name</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    value={customerName} onChange={(e) => setCustomerName(e.target.value)}></input>
                            </div>}

                            {optional && <div>
                                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Address</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)}></input>
                            </div>}

                            {optional && <div>
                                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">City</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    value={customerCity} onChange={(e) => setCustomerCity(e.target.value)}></input>
                            </div>}

                            {optional && <div>
                                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Zip</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    value={customerZip} onChange={(e) => setCustomerZip(e.target.value)}></input>
                            </div>}
                        </div>


                        <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => handleSubmit(e)}>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}