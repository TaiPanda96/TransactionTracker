import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import ErrorMessageContainer from './Error'
import axios from 'axios';
import { HiArrowsExpand, HiArrowCircleUp } from 'react-icons/hi'

export default function SmartContractComponent({ }) {
    const [open, setOpen] = useState(false);
    const [authorized, setAuthorized] = useState(false);
    const [contractOpen, setEditContractOpen] = useState(true);
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router  = useRouter();
    const headers = ['contractId', 'email', 'contractType', 'triggerOn']

    // Form Submission for Smart Contract
    const [contractType, setContractType] = useState(null);
    const [eSign, setEsign] = useState(null);
    const [triggerSteps, setTriggerSteps] = useState(null);
    const [executionSteps, setExecutionSteps] = useState(null);
    const [description, setDescription] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let payload = {
            contractType: contractType, 
            eSign: eSign,
            triggerSteps: [triggerSteps],
            executionSteps: [executionSteps]
        }
        axios.post(`http://localhost:8080/api/contracts/post-contract/${profile[0].customerId}`, payload)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    useEffect(() => {
        setLoading(true)
        const loggedInUser = sessionStorage.getItem("authenticated");
        const accessToken  = sessionStorage.getItem("accessToken");
        if (loggedInUser) { setAuthorized(true)}
        fetch('http://localhost:8080/api/contracts/get-contracts', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            }
        })
            .then(
                (data) => data.json()
            ).then(
                (data) => {
                    setData(data);
                    setLoading(false)
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
                <h6 className="justify-center">Active Contracts</h6>
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    <HiArrowCircleUp className="h2 fill-white" onClick={() => setOpen(!open)} />
                </div>
            </div>
            {open && <form className="items-center dark:bg-gray-875">
                <div className="flex flex-wrap -mx-3 mb-5">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-6">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-3 ml-5 mt-6" for="grid-password">
                                Currently Active Smart Contracts for {sessionStorage.getItem("username")}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                    <div class="flex justify-center overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="sm:ml-[70px] xl:ml-[55px]">
                            <table className='border-separate border border-slate-500'>
                                <thead class="border-b">
                                    <tr> {headers.map((heading) =>
                                        <th scope="col" className="text-sm justify-end font-large text-white px-8 py-3">
                                            {heading}
                                        </th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row) => {
                                        return (
                                            <tr class="dark:bg-gray-900 border-b">
                                                {headers.map((heading) =>
                                                    heading === 'triggerOn' && row[heading] ?
                                                        <td className="text-sm text-white font-light px-4 py-4 whitespace
                                                ">
                                                            {row['triggerOn']['description']}
                                                        </td> :
                                                        <td className="text-sm text-white font-light px-4 py-4 whitespace
                                                ">
                                                            {row[heading]}
                                                        </td>)
                                                }
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </form>}
            <br></br>
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-indigo-900 border-b border-gray-700">
                <h6 className="justify-center">Add Smart Contract</h6>
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    <EditIcon className="h2 fill-white" onClick={() => setEditContractOpen(!contractOpen)} />
                </div>
            </div>
            {contractOpen && <form className="items-center dark:bg-gray-900">
                <div class="flex flex-wrap -mx-3 mb-5">
                    <div class="w-full md:w-1/2 px-6 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide no-wrap text-white text-xs font-bold mb-2 mt-5" for="grid-first-name">
                            Contract Type
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            value={contractType}
                            onChange={(e) => setContractType(e.target.value)}>
                        </input>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-5">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                            Description
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="true" type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >
                        </input>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-5">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                            Trigger Steps
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="true" type="text"
                            value={triggerSteps}
                            onChange={(e) => setTriggerSteps(e.target.value)}
                        >
                        </input>

                    </div>
                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-5">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                            Execution Steps
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="true" type="text"
                            value={executionSteps}
                            onChange={(e) => setExecutionSteps(e.target.value)}
                        >
                        </input>
                    </div>
                    <div class="w-full md:w-1/3 px-3">
                        <label className='relative inline-flex items-center mr-5 cursor-pointer'>
                            <input class="sr-only peer bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" type="checkbox"
                                value={eSign}
                                onSelect={() => setEsign(true)}
                            >
                            </input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">eSign</span>
                        </label>
                    </div>
                    <div className="w-full px-8 mb-6 md:mb-5 xl:ml-[705px]">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white  sm:text-sm font-bold py-2 px-7 mb-11 rounded-full"
                            onClick= {() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>

                </div>

            </form>}
        </div>
    )
}