import moment from "moment";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export const Card = ( { notification }) => {
    return ( 
    <div classNameName="container my-12 mx-auto px-4 md:px-12 dark:bg-gray-875">
        <h5 className="mb-4 mt-5 text-white font-semibold">Currently Signed Agreements</h5> 
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
            { Array.isArray(notification) && notification.length > 0 && notification.map((article) => {
                const { title, upcoming, reviewDate } = article;
                <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700">
                    <a href="#"></a>
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <span className="text-sm">
                                <a className="no-underline hover:underline text-white" href="#">
                                    {title}
                                </a>
                            </span>
                            { upcoming ? <AccessTimeFilledIcon className="inline fill-white"></AccessTimeFilledIcon> : <PriorityHighIcon className="inline fill-white"/>}
                            <span className="text-sm">
                                <a className="no-underline hover:underline text-white" href="#">
                                    {title}
                                </a>
                            </span>

                            <p className="text-white text-sm">
                                { moment(reviewDate, 'YYYY-MM-DD').format('YYYY-MM-DD hh:mm')}
                            </p>
                    </header>

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
            })}
        </div>
    
    </div> )
}

const CardComponent = () => {
    return (
        <div classNameName="container my-12 mx-auto px-4 md:px-12 dark:bg-gray-875">
            <h5 className="mb-4 mt-5 text-white font-semibold">Currently Signed Agreements</h5>
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700">
                        <a href="#">
                        </a>
                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <span className="text-sm">
                                <a className="no-underline hover:underline text-white" href="#">
                                    Entity Formation
                                </a>
                            </span>
                            <p className="text-white text-sm">
                                { moment().format('YYYY-MM-DD hh:mm')}
                            </p>
                        </header>

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
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700">

                        <a href="#">
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <span className="text-sm">
                                <a className="no-underline hover:underline text-white" href="#">
                                    Loan Agreement
                                </a>
                            </span>
                            <p className="text-white text-sm">
                            { moment().format('YYYY-MM-DD hh:mm')}
                            </p>
                        </header>

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
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700">

                        <a href="#">
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <span className="text-sm">
                                <a className="no-underline hover:underline text-white" href="#">
                                    Covenants
                                </a>
                            </span>
                            <p className="text-white text-sm">
                            { moment().format('YYYY-MM-DD hh:mm')}
                            </p>
                        </header>

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
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700">

                        <a href="#">
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <span className="text-sm">
                                <a className="no-underline hover:underline text-white" href="#">
                                    Financial Statements
                                </a>
                            </span>
                            <p className="text-white text-sm">
                            { moment().format('YYYY-MM-DD hh:mm')}
                            </p>
                        </header>

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
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg bg-gray-700">

                        <a href="#">
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <span className="text-sm">
                                <a className="no-underline hover:underline text-white" href="#">
                                    Management Structure
                                </a>
                            </span>
                            <p className="text-white text-sm">
                            { moment().format('YYYY-MM-DD hh:mm')}
                            </p>
                        </header>

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

export default CardComponent