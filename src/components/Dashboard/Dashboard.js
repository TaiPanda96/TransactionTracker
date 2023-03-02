import moment from "moment";
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import { Card, Divider } from '@mui/material';
import ChartCard from "./Chart";
import ComparisonChart from "./Barchart";

const DashboardComponent = () => {
    return (
        <div className="flex-grow border-l border-neutral-900 dark:bg-gray-900 max-w-9xl ml-3">
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    < EditNotificationsIcon className="h5 fill-white" />
                </div>
            </div>

            <div className="w-full overflow-hidden rounded-lg shadow-lg dark:bg-gray-800">
                <div class="flex grid-cols-3 gap-3 items-center mt-3 ml-9">
                    <div className="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-5/6 lg:h-5/6">
                        <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700 w-5/6">
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <span className="text-sm">
                                    <a className="no-underline hover:underline text-white" href="#">
                                        Entity Formation
                                    </a>
                                </span>
                            </header>

                            <article className="w-full h-full">
                                <ChartCard/>

                            </article>
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
                    <div className="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-5/6 lg:h-5/6">
                        <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700 w-5/6">
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <span className="text-sm">
                                    <a className="no-underline hover:underline text-white" href="#">
                                        Entity Formation
                                    </a>
                                </span>
                            </header>

                            <article className="w-full h-full">
                                <ComparisonChart/>

                            </article>
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
                    <div className="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-5/6 lg:h-5/6">
                        <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700 w-5/6">
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <span className="text-sm">
                                    <a className="no-underline hover:underline text-white" href="#">
                                        Entity Formation
                                    </a>
                                </span>
                            </header>

                            <article className="w-full h-full">
                                <span className="text-white text-sm flex items-center ml-3">
                                    Hello hello hello hello hello hello 

                                    Hello hello hello hello hello hello 

                                    Hello hello hello hello hello hello 

                                    Hello hello hello hello hello hello 

                                    Hello hello hello hello hello hello 

                                    Hello hello hello hello hello hello 
                                    v
                                </span>

                            </article>
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
            <Divider className="mb-11"/>
            <div className="w-full overflow-hidden rounded-lg shadow-lg dark:bg-gray-800">
                <div class="flex items-center mt-3 ml-9">
                <div className="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-5/6 lg:h-5/6">
                        <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700 w-5/6">
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <span className="text-sm">
                                    <a className="no-underline hover:underline text-white" href="#">
                                        Entity Formation
                                    </a>
                                </span>
                            </header>

                            <article className="w-full h-full">
                                <span className="text-white text-sm flex items-center ml-3">
                                    Hello hello hello hello hello hello 

                                    Hello hello hello hello hello hello 

                                    Hello hello hello hello hello hello 

                                    Hello hello hello hello hello hello 

                                    Hello hello hello hello hello hello 

                                    Hello hello hello hello hello hello 
                                    v
                                </span>
                            </article>
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

            <Divider className="mb-11"/>
            <div className="w-full overflow-hidden rounded-lg shadow-lg dark:bg-gray-800">
                <div class="flex grid-cols-3 gap-3 items-center mt-3 ml-9">
                    <div className="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-5/6 lg:h-5/6">
                        <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700 w-5/6">
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <span className="text-sm">
                                    <a className="no-underline hover:underline text-white" href="#">
                                        Entity Formation
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
                    <div className="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-5/6 lg:h-5/6">
                        <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700 w-5/6">
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <span className="text-sm">
                                    <a className="no-underline hover:underline text-white" href="#">
                                        Entity Formation
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
                    <div className="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-5/6 lg:h-5/6">
                        <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700 w-5/6">
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <span className="text-sm">
                                    <a className="no-underline hover:underline text-white" href="#">
                                        Entity Formation
                                    </a>
                                </span>
                            </header>

                            <Card className="w-full h-full">
                            </Card>

                            <Card className="w-full h-full"></Card>

                            <Card className="w-full h-full"></Card>

                            <Card className="w-full h-full"></Card>

                            <Card className="w-full h-full"></Card>

                            <Card className="w-full h-full"></Card>

                            <Card className="w-full h-full"></Card>
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

            


        </div>
    )
}

export default DashboardComponent