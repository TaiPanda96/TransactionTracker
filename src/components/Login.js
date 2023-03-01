import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ErrorMessageContainer from "./Messages/Error";

export default function LoginComponent() {
    const router = useRouter();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userSession, setSession] = useState('');
    const [userAccessToken, setAccessToken] = useState('');
    const [userRole, setUserRole] = useState('');
    const [isLoggedIn, setLogin] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let payload = {
            username: username,
            password: password
        }
        axios.post(`http://localhost:8080/api/auth/login`, payload, { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
            .then(function (response) {
                return response
            }).then((response) => {
                if (response.data) {
                    setLogin(true);
                    let { _id, accessToken, username, role, email } = response.data;
                    setSession(_id);
                    setAccessToken(accessToken);
                    setUserName(username);
                    setUserRole(role);
                    setEmail(email);
                } else { setLogin(false) }
            })
            .catch(function (error) {
                if (error.message === 'User does not exist') { router.push('/register')} else { 
                    setError({
                        error: error, 
                        message: error.message
                    })
                }
            });
    }
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

                    <form className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Login
                        </h3>
                        <div>
                         { error && <ErrorMessageContainer className = "inline" error={error} message={"Invalid username or password provided"} /> }
                         <br></br>
                            <label className="text-sm items-justify-center text-gray-900 block mb-2 dark:text-gray-300">Username</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </div>

                        <div className="flex items-start">
                        </div>
                        <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => handleSubmit(e)}>
                            Login to your account
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <a href="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create
                                account</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}