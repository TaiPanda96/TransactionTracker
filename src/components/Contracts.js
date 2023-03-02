import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import ErrorMessageContainer from './Messages/Error'
import axios from 'axios';

import MessageContainer from "./Messages/NoData";
import { HiArrowCircleUp } from 'react-icons/hi'

import OriginationComponents from "../components/Transactions/Table";
import CardComponent from "./Cards";


const headers = ['contractId', 'email', 'contractType', 'description'];

export default function SmartContractComponent({ }) {
    const [username, setUsername] = useState('')
    const [open, setOpen] = useState(false);
    const [contractOpen, setEditContractOpen] = useState(true);
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [role, setRole] = useState();
    const router = useRouter();
    const [viewOpen, setViewOriginations] = useState(true);

    // Form Submission for Smart Contract
    const [contractType, setContractType] = useState(null);
    const [executionSteps, setExecutionSteps] = useState(null);
    const [description, setDescription] = useState(null);
    const [submitted, setSubmission] = useState(false);
    const [eSign, setEsign] = useState(false);
    const [triggerSteps, setTriggerSteps] = useState(null);


    // Form Submission for Repayment Transaction
    const [amount, setAmount] = useState(null);
    const [interest, setInterest] = useState(null);
    const [assetClass, setAssetClass] = useState(null);
    const [principal, setPrincipal] = useState(null);
    const [facilityName, setFacilityName] = useState(null);

    const handleFacilitySubmit = async (e) => {
        e.preventDefault();
        let payload = {
            amount,
            "assetClass": assetClass, 
            "facilityName": facilityName, 
            "interest": interest,
            "principal": principal
        }
        const accessToken = sessionStorage.getItem("accessToken");
        setError(null);
        axios.post(`http://localhost:8080/api/auth/add-facility`, payload, {
            headers: {
            "Content-Type": 'application/json',
            authorization: accessToken
            }
        })
            .then(function (response) {
                if (response.data && !response.data['error']) {
                    setSubmission(true);
                } else if (response.data && response.data['error']) {
                    let { name, message, expiredAt } = response.data;
                    if (name === 'TokenExpiredError' && message === "jwt expired") {
                        router.push('/')
                    }
                } else {
                    setSubmission(false);
                }
            })
            .catch(function (error) {
                setError(error)
            });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let payload = {
            contractType: contractType,
            eSign: eSign,
            triggerSteps: [triggerSteps],
            executionSteps: [executionSteps]
        }
        const accessToken = sessionStorage.getItem("accessToken");
        setError(null);
        axios.post(`http://localhost:8080/api/contracts/post-contract`, payload, {
            headers: "Content-Type",
            Authorization: accessToken
        })
            .then(function (response) {
                if (response.data && !response.data['error']) {
                    setSubmission(true);
                } else if (response.data && response.data['error']) {
                    let { name, message, expiredAt } = response.data;
                    if (name === 'TokenExpiredError' && message === "jwt expired") {
                        router.push('/')
                    }
                } else {
                    setSubmission(false);
                }
            })
            .catch(function (error) {
                setError(error)
            });
    }

    useEffect(() => {
        setLoading(true);
        if (!sessionStorage.getItem("authenticated")) { router.push('/') }
        const accessToken = sessionStorage.getItem("accessToken");
        setUsername(sessionStorage.getItem("username"))
        setRole(sessionStorage.getItem("role") || '');
        fetch('http://localhost:8080/api/contracts/get-contracts', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            }
        }).then((data) => data.json()).then(
            (data) => {
                if (data && data['error']) {
                    let { name, message, expiredAt } = data['error'];
                    if (name === 'TokenExpiredError') {
                        router.push('/');
                    }
                }
                else {
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

    return (
        <div className="flex-grow border-l border-r border-neutral-800 max-w-4xl sm:ml-[70px] xl:ml-[25px]">
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-2 z-50 bg-indigo-900 border-b border-gray-700">
                <h6 className="justify-center"> {role === 'lender' ? 'Active Contracts' : 'Loan Agreements'} </h6>
                <HiArrowCircleUp className="h2 fill-white inline" onClick={() => setOpen(!open)} />
            </div>
            {open && <form className="items-center dark:bg-gray-875">
                <div className="flex flex-wrap -mx-3 mb-5">
                    <div class="flex justify-center overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="sm:ml-[70px]">
                            <CardComponent/>
                        </div>
                    </div>
                </div>
            </form>}
            <br></br>
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-indigo-900 border-b border-gray-700">
                <h6 className="justify-center">Originations</h6>
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    <EditIcon className="h2 fill-white" onClick={() => setViewOriginations(!viewOpen)} />
                </div>
            </div>
            {role === "borrower" && viewOpen && <form className="items-center dark:bg-gray-900">
                    <div class="flex flex-wrap ml-1 -mx-3 mb-5">
                        <div class="w-full ">
                            <OriginationComponents/>
                        </div>

                    </div>
                </form>}

            <br></br>
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-indigo-900 border-b border-gray-700">
                <h6 className="justify-center">{role === "lender" ? "Add Smart Contract" : "Repay My Loan"}</h6>
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    <EditIcon className="h2 fill-white" onClick={() => setEditContractOpen(!contractOpen)} />
                </div>
            </div>

            {submitted && <MessageContainer message={"Created a New Smart Contract!"} />}
            {error && <ErrorMessageContainer className="flex items-center" error={error} message={error.message} />}

            {role === "borrower" && contractOpen && <form className="items-center dark:bg-gray-900">
                <div class="flex flex-wrap -mx-3 mb-5">
                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-3">
                        <label class="block uppercase tracking-wide no-wrap text-white text-xs font-bold mb-2 mt-5" for="grid-first-name">
                            Asset
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            value={assetClass}
                            onChange={(e) => setAssetClass(e.target.value)}>
                        </input>
                    </div>
                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-3">
                        <label class="block uppercase tracking-wide no-wrap text-white text-xs font-bold mb-2 mt-5" for="grid-first-name">
                            Calculated Interest
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}>
                        </input>
                    </div>
                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-3">
                        <label class="block uppercase tracking-wide no-wrap text-white text-xs font-bold mb-2 mt-5" for="grid-first-name">
                            Principal
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            value={principal}
                            onChange={(e) => setPrincipal(e.target.value)}>
                        </input>
                    </div>

                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-3">
                        <label class="block uppercase tracking-wide no-wrap text-white text-xs font-bold mb-2 mt-5" for="grid-first-name">
                            Facility
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            value={facilityName}
                            onChange={(e) => setFacilityName(e.target.value)}>
                        </input>

                        <div className="w-full px-8 mb-6 md:mb-5 xl:ml-[705px]">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white  sm:text-sm font-bold py-2 px-7 mb-8 rounded-full"
                            onClick={(e) => handleFacilitySubmit(e)}
                        >
                            Submit
                        </button>
                    </div>
                    </div>
                </div>
            </form>}
            {role === 'lender' && contractOpen && <form className="items-center dark:bg-gray-900">
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
                            onClick={(e) => handleSubmit(e)}
                        >
                            Submit
                        </button>
                    </div>

                </div>

            </form>}
        </div>
    )
}