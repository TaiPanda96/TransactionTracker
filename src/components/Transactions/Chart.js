import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState, useEffect} from 'react';

export default function ChartCard() {
    const [assetData, setAssetData] = useState(null);

    return (
        <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[70px] xl:ml-[5px]">
        <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
            <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                < EditNotificationsIcon className="h5 fill-white" />
            </div>
        </div>
        <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
            <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">Requires Attention</span>
            <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Convenant Trigger</span>
            <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Risk Review</span>
        </div>
        <Doughnut notificationData={assetData}/>
    </div>
    )
}

