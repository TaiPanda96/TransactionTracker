// Import Hero Icons
import moment from 'moment'
import Image from 'next/image';
import ImagePlaceHolder from '../../assets/jpmorgan.png'
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';

const AlertFeedComponent = ({ notificationData = [] }) => {
    return (
        <div className="max-w-2xl sm:ml-[5px] xl:ml-[2px] border-gray-500 bg-gray">
            {notificationData.map((post) => {
                const { text, image, url } = post;
                return (
                    <div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug'>
                        <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                            <div class="mb-8">
                                <div class="text-gray-900 font-bold text-xl mb-2">
                                    The investment company JP Morgan will help Ukraine attract private investments for the country’s reconstruction.
                                </div>
                                <div class="relative h-32 w-32 ...">
                                    <span className=" bg-blue-100 text-red-800 text-xs font-medium inline-flex justify-end px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 ">
                                        <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                                        {moment().subtract(15, 'minutes').minute()} min ago
                                    </span>
                                </div>
                                <Image src={image ? image : ImagePlaceHolder}></Image>
                                <br></br>
                                <p class="text-gray-700 text-base">{text}</p>
                                <p class="text-gray-700 text-base">
                                    Building the backbone of digital lending innovation.
                                    Building the backbone of digital lending innovation.
                                    Building the backbone of digital lending innovation.
                                </p>
                                <br />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default function LedgerAlertComponent({ notificationData = []}) {
    return (
        <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[70px] xl:ml-[5px]">
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    < EditNotificationsIcon className="h5 fill-white" />
                </div>
            </div>
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
                <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">Escalation</span>
                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Warning</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Ready to Review</span>
            </div>
            <AlertFeedComponent notificationData={notificationData}/>
        </div>
    );
}

