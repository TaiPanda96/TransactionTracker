import React from 'react'
import ErrorMessageContainer from './Message/Error';
import { useState, useEffect } from 'react'
import moment from 'moment';


export default function Widget() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8080/api/transactions/get-transaction?customerId=63eaca8559ef868d14301442&transactionDate=2023-02-18')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }, []);

    if (isLoading) return <div>loading...</div>
    if (error) return <div className='items-center'> <ErrorMessageContainer error={error} message={error.message} /> </div>
    if (!data) return <div>no data</div>
    return (
        <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Ledger Updates</h5>
                <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                </a>
            </div>

            {data.map((info) => {
                let { data } = info;
                return (<div class="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li class="py-3 sm:py-4">
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                {data.facilityName}: {info.data.assetClass}
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400 items-end">
                                    Amount Paid: ${Math.floor(data.amount)}
                                </p>
                                <p class="text-sm font-semi-bold text-gray-500 truncate dark:text-gray-400 items-end">
                                    Term: {Math.floor(data.term)} months
                                </p>
                                <p class="text-sm text-white font-bold truncate dark:text-gray-400 items-end">
                                    Date: {moment(data.transactionDate).format('YYYY-MM-DD')}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>)
            })}
        </div>
    )
}


