import { useRouter } from "next/router";
import { useState } from "react";
const Searchrow = ( { _id, username, accessToken, email, joined }) => {
    const router = useRouter();
    const handleRedirect = (e) => {
        // Set New Borrower Sessions
        if (typeof accessToken === 'string') {
            sessionStorage.setItem("borrowerToken",accessToken)
        } 
        if (typeof accessToken === 'string') {
            sessionStorage.setItem("borrower", _id );
        }

        return router.push(`profile/${sessionStorage.getItem("borrower")}`);
    }
    return (
        <article className="overflow-hidden rounded-lg shadow-lg dark:bg-blue-800 w-5/6 mt-2 mb-3">
        <div class="grid grid-rows-4 grid-flow-col gap-4 space-between-x-2">
            <div class="row-span-3">
                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                <span className="text-sm">
                    <a className="no-underline hover:underline mt-3 text-white" onClick={(e) => handleRedirect(e.target.value)}>
                        { username }
                    </a>
                    </span>
                    </label>
            </div>
            <div class="row-span-3">
                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                <span className="text-sm">
                    <a className="no-underline hover:underline text-white">
                    { email }
                    </a>
                    </span>
                </label>
            </div>
            <div class="row-span-3">
                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                <span className="text-sm">
                    <a className="no-underline hover:underline text-white">
                    { joined }
                    </a>
                    </span>
                </label>
            </div>
        </div>
    </article>)
}

export default Searchrow