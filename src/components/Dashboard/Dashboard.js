import moment from "moment";
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import { Card, Divider } from '@mui/material';
import InterestChartCard from "./Chart";
import ComparisonChart from "./Barchart";
import TransactionsChart from "./TransactionsOverTime";
import DoughnutChart from "./Piechart";

const DashboardComponent = () => {
    return (
        <div className="flex-grow border-l border-neutral-900 dark:bg-gray-900 max-w-9xl ml-3">
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    < EditNotificationsIcon className="h5 fill-white" />
                </div>
            </div>

            <div className="w-full overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 mb-4">
                <h3 className="text-white font-semi-bold mt-8 ml-5 mb-5">Operational View</h3>
                <div class="flex grid-cols-3 gap-3 items-center ml-9">
                    <div className="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-5/6 lg:h-5/6">
                        <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700 w-5/6">
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <span className="text-sm">
                                    <a className="no-underline hover:underline text-white" href="#">
                                        Transaction Count By Facility
                                    </a>
                                </span>
                            </header>
                            <div className="flex items-center justify-center">
                                <ComparisonChart />
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
                        <Divider className="mb-3 mt-5" />
                        <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700 w-5/6">
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <span className="text-sm">
                                    <a className="no-underline hover:underline text-white" href="#">
                                        Transaction Count By Facility
                                    </a>
                                </span>
                            </header>

                            <div className="flex items-center justify-center">
                                <InterestChartCard />
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
                    <div className="px-2 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-5/6">
                        <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700 w-5/6 my-11">
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <span className="text-sm">
                                    <a className="no-underline hover:underline text-white" href="#">
                                        Asset Distribution
                                    </a>
                                </span>
                            </header>
                            <div className="flex items-center justify-center">
                                <TransactionsChart />
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
            </div>
            <div className="w-full overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 mb-4">
                <div className="flex flex-wrap space-x-11 -mx-1 lg:-mx-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-5/6 ">
                    <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700 ml-11">
                        <a href="#">
                        </a>
                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <span className="text-sm">
                                <a className="no-underline hover:underline text-white" href="#">
                                    Asset Distribution
                                </a>
                            </span>
                        </header>
                        <br></br>
                        <div className="flex items-center justify-center">
                            <DoughnutChart/>
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
        </div>
    )
}

export default DashboardComponent