import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { states } from "./States";
import ErrorMessageContainer from './Messages/Error'
import MessageContainer from './Messages/NoData';
import EditIcon from '@mui/icons-material/Edit';

export default function ProfileComponent() {
    const router                      = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const [data, setData]             = useState(null);
    const [isLoading, setLoading]     = useState(false);
    const [error, setError]           = useState(null);
    const [user,setUser]              = useState();
    const [username, setUserName]     = useState();
    const [role, setUserRole]         = useState();
    const [email, setEmail]           = useState();

    useEffect(() => {
        setAuthorized(sessionStorage.getItem("authenticated"));
        setLoading(true);
        const user = setUser(sessionStorage.getItem("userSession"));
        setUserName(sessionStorage.getItem("username"));
        setUserRole(sessionStorage.getItem("role"));
        setEmail(sessionStorage.getItem("email"));
        fetch(`http://localhost:8080/api/auth/get?id=${user}`, {
            headers: {
                'Content-Type': 'application/json',
                "authorization": sessionStorage.getItem("accessToken") || '',
            }
        })
            .then(
                (data) => data.json()
            ).then(
                (data) => {
                    if (data && data['error']) {
                        let { name, message, expiredAt } = data['error'];
                        if (name === 'TokenExpiredError') {
                            router.push('/')
                        }
                    } else {
                        setData(data);
                        setLoading(false)
                    }
                }
            ).catch((err) => {
                setError(err)
                setLoading(false)
            })
    }, []);


    if (isLoading) return <div>loading...</div>
    if (error) return <div className='items-center'> <ErrorMessageContainer error={error} message={error.message} /> </div>
    if (!data) return <div>no data</div>
    if (!authorized) { router.push('/') }

    return (
        <div className="flex-grow border-l border-r border-neutral-800 max-w-4xl sm:ml-[70px] xl:ml-[25px]">
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-indigo-900 border-b border-gray-700">
                <h6 className="justify-center">Your Organization</h6>
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    <EditIcon className="h6 fill-white" />
                </div>
            </div>
            <br></br>

            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-indigo-900 border-b border-gray-700">
                <h6 className="justify-center">Borrower</h6>
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    <EditIcon className="h6 fill-white" />
                </div>
            </div>
            <br></br>
            <form className="items-center dark:bg-gray-900">
                <div class="flex flex-wrap -mx-3 mb-5">
                    <div class="w-full md:w-1/2 px-6 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide no-wrap text-white text-xs font-bold mb-2 mt-5" for="grid-first-name">
                            Name
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={username || ''}>
                        </input>
                    </div>
                    <div class="w-full md:w-1/2 px-6">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2 mt-5" for="grid-last-name">
                            Profile Type
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={role}>
                        </input>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-6">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-3" for="grid-password">
                            Email
                        </label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="true" placeholder={email || ''}>
                        </input>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-5">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="true" type="text" placeholder={data.customerCity || ''}>
                        </input>
                    </div>
                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
                            State
                        </label>
                        <div class="relative">
                            <select class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="true" id="grid-state" placeholder='New York'>
                                {Object.values(states).map((state) => {
                                    return (
                                        <option>{state}</option>
                                    )
                                })}
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
                            Address
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="true" id="grid-zip" type="text" placeholder={''}>
                        </input>
                    </div>
                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="true" id="grid-zip" type="text" placeholder={''}>
                        </input>
                    </div>
                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-8">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
                            Industry
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="true" id="grid-zip" type="text" placeholder={''}>
                        </input>
                    </div>

                </div>
            </form>
            <br></br>
        </div>
    )

}


export const getBorrowerProfile = async (req,res) => {
    return null;
}


