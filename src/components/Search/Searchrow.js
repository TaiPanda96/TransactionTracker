import moment from "moment";

const Searchrow = ( { username, email, role, joined }) => {
    return (
        <article className="overflow-hidden rounded-lg shadow-lg dark:bg-blue-800 w-5/6 mt-2 mb-3">
        <div class="grid grid-rows-4 grid-flow-col gap-4 space-between-x-2">
            <div class="row-span-3">
                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                <span className="text-sm">
                    <a className="no-underline hover:underline mt-3 text-white" href="#">
                        { username }
                    </a>
                    </span>
                    </label>
            </div>
            <div class="row-span-3">
                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                <span className="text-sm">
                    <a className="no-underline hover:underline text-white" href="#">
                    { role }
                    </a>
                    </span>
                    </label>
            </div>
            <div class="row-span-3">
                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                <span className="text-sm">
                    <a className="no-underline hover:underline text-white" href="#">
                    { email }
                    </a>
                    </span>
                </label>
            </div>
            <div class="row-span-3">
                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                <span className="text-sm">
                    <a className="no-underline hover:underline text-white" href="#">
                    { joined }
                    </a>
                    </span>
                </label>
            </div>
        </div>
        </article>)
}

export default Searchrow