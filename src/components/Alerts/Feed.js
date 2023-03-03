// Import Hero Icons
import moment from 'moment'
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';


const AlertFeedComponent = ({ notificationData = [] }) => {
    return (
        <div className="w-full sm:ml-[5px] border-gray-500 bg-gray mt-3 space-y-8">
            {Array.isArray(notificationData) && notificationData.length > 0 && notificationData.map((article) => {
                const { title, upcoming, reviewDate } = article;
                return (
                    <div className="flex items-justify-center">
                        <article className=" w-full overflow-hidden rounded-lg shadow-lg dark:bg-slate-800 mr-3">
                            <header className="flex items-center justify-between leading-tight p-2 md:p-5 mt-1 mb-10">
                                <span className="text-sm">
                                    <a className="no-underline hover:underline text-white" href="#">
                                        <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">{title}</span>
                                    </a>
                                </span>
                                <br></br>
                                <span className="text-sm inline">
                                    <a className="no-underline hover:underline text-white" href="#">
                                    </a>
                                </span>
                                <label className="text-white text-sm inline ml-12">
                                    Due: {moment(reviewDate, 'YYYY-MM-DD').format('YYYY-MM-DD hh:mm')} {upcoming && <PriorityHighIcon className="fill-white" />}
                                </label>
                            </header>
                            <div class="grid grid-cols-4 gap-4 ml-5 mb-3 mt-3">
                                <div>
                                    <article className="overflow-hidden rounded-lg shadow-lg bg-orange-800 w-5/6">
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <span className="text-sm">
                                                <a className="no-underline hover:underline text-white" href="#">
                                                    Qtrly Balance Sheet
                                                </a>
                                            </span>
                                        </header>
                                        <div className="flex items-center justify-center">
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <svg class="h-10 w-10" viewBox="0 0 24 24">
                                            </svg>
                                        </div>
                                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                            <a className="flex items-center no-underline hover:underline text-white" href="#">
                                                <p className="ml-2 text-sm">
                                                    View
                                                </p>
                                            </a>
                                            <a className="no-underline text-white hover:text-red-dark" href="#">
                                                <span className="hidden">Like</span>
                                                <i className="fa fa-heart"></i>
                                            </a>
                                        </footer>
                                    </article>
                                </div>
                                <div>
                                    <article className="overflow-hidden rounded-lg shadow-lg bg-blue-800 w-5/6">
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <span className="text-sm">
                                                <a className="no-underline hover:underline text-white" href="#">
                                                    Qtrly Income Statement
                                                </a>
                                            </span>
                                        </header>
                                        
                                        <div className="flex items-center justify-center">
                                            <svg class="h-10 w-10" viewBox="0 0 24 24">
                                            </svg>
                                        </div>
                                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                            <a className="flex items-center no-underline hover:underline text-white" href="#">
                                                <p className="ml-2 text-sm">
                                                    View
                                                </p>
                                            </a>
                                            <a className="no-underline text-white hover:text-red-dark" href="#">
                                                <span className="hidden">Like</span>
                                                <i className="fa fa-heart"></i>
                                            </a>
                                        </footer>
                                    </article>
                                </div>
                                <div>
                                <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700 w-5/6">
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <span className="text-sm">
                                                <a className="no-underline hover:underline text-white" href="#">
                                                    eSign: Loan Agreement
                                                </a>
                                            </span>
                                        </header>
                                        <div className="flex items-center justify-center">
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <svg class="h-10 w-10" viewBox="0 0 24 24">
                                            </svg>
                                        </div>
                                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                            <a className="flex items-center no-underline hover:underline text-white" href="#">
                                                <p className="ml-2 text-sm">
                                                    View
                                                </p>
                                            </a>
                                            <a className="no-underline text-white hover:text-red-dark" href="#">
                                                <span className="hidden">Like</span>
                                                <i className="fa fa-heart"></i>
                                            </a>
                                        </footer>
                                    </article>
                                </div>
                            </div>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a className="flex items-center no-underline hover:underline text-white" href="#">
                                    <p className="text-sm inline-flex mr-10">
                                        View
                                    </p>
                                </a>
                            </footer>
                        </article>
                    </div>
                )
            })}
        </div>
    )
}

export default function LedgerAlertComponent() {
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        if (!sessionStorage.getItem("authenticated")) { router.push('/') }
        const accessToken = sessionStorage.getItem("accessToken");
        setUsername(sessionStorage.getItem("username"))
        setRole(sessionStorage.getItem("role") || '');
        fetch('http://localhost:8080/api/notifications/risk-notifications', {
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
    return (
        <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[70px] xl:ml-[5px]">
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    < EditNotificationsIcon className="h5 fill-white" />
                </div>
            </div>
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
                <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">Repayment Alert</span>
                <span class="bg-purple-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Risk Review</span>
            </div>
            <AlertFeedComponent notificationData={data} />
        </div>
    );
}

