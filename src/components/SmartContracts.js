import moment from 'moment';
import { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import ErrorMessageContainer from './Error'
import { HiArrowsExpand, HiArrowCircleUp } from 'react-icons/hi'

export default function SmartContractComponent({ customerProfile = [] }) {
    const [open, setOpen] = useState(false);
    const [contractOpen, setEditContractOpen] = useState(true);
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let profile = JSON.parse(customerProfile);
    const headers = [
        'contractId', 'customerEmail', 'contractType', 'trigger',
    ]

    const handleSmartContractSubmission = async () => {

    }

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8080/api/contracts/get-contracts/63eaca8559ef868d14301442')
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
                                Currently Active Smart Contracts for {profile[0].customerName}
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
                                                    heading === 'trigger' && row[heading] ?
                                                        <td className="text-sm text-white font-light px-4 py-4 whitespace
                                                ">
                                                            {row[heading]['description']}
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
                <h6 className="justify-center">Active Contracts</h6>
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    <EditIcon className="h2 fill-white" onClick={() => setEditContractOpen(!contractOpen)} />
                </div>
            </div>
                {contractOpen && <form className="items-center dark:bg-gray-900">
                    <div class="flex flex-wrap -mx-3 mb-5">
                        <div class="w-full md:w-1/2 px-6 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide no-wrap text-white text-xs font-bold mb-2 mt-5" for="grid-first-name">
                                Name
                            </label>
                            <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={data[0].customerName}>
                            </input>
                        </div>
                        <div class="w-full md:w-1/2 px-6">
                            <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2 mt-5" for="grid-last-name">
                                Ticker
                            </label>
                            <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={data[0].orgLabel}>
                            </input>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-6">
                            <label class="block uppercase tracking-wide text-white text-xs font-bold mb-3" for="grid-password">
                                Email
                            </label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="true" placeholder={data[0].customerEmail}>
                            </input>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/3 px-6 mb-6 md:mb-5">
                            <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                                City
                            </label>
                            <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="true" type="text" placeholder={data[0].customerCity}>
                            </input>
                        </div>
                        <div class="w-full md:w-1/3 px-6 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
                                Address
                            </label>
                            <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="true" id="grid-zip" type="text" placeholder={data[0].customerAddress}>
                            </input>
                        </div>
                        <div class="w-full md:w-1/3 px-6 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
                                Zip
                            </label>
                            <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="true" id="grid-zip" type="text" placeholder={data[0].customerZip}>
                            </input>
                        </div>
                        <div class="w-full md:w-1/3 px-6 mb-6 md:mb-8">
                            <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
                                Industry
                            </label>
                            <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="true" id="grid-zip" type="text" placeholder={data[0].customerIndustry}>
                            </input>
                        </div>
                    </div>
                </form>}
            </div>
    )
}