import moment from "moment"
export const BorrowerWidget = () => {
    return (
        <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<div class="flex items-center justify-between mb-4">
    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Recent Repayments</h5>
    <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
        View all
    </a>
</div>

    <div class="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Term Loan
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400 items-end">
                        Amount Paid: $1021.21
                    </p>
                    <p class="text-sm font-semi-bold text-gray-500 truncate dark:text-gray-400 items-end">
                        Term: 35
                    </p>
                    <p class="text-sm text-white font-bold truncate dark:text-gray-400 items-end">
                        Date: { moment().format('YYYY-MM-DD HH:MM')}
                    </p>
                </div>
            </li>
        </ul>
    </div>

</div>
    )
}

export default BorrowerWidget