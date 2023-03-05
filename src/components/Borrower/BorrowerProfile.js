import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CardComponent from "../Cards";

const BorrowerProfileComponent = ({ borrowerObj = {} }) => {
    return (
        <div className="w-full rounded-lg shadow-lg dark:bg-gray-800 mb-4">
            <div class="flex grid-cols-3 gap-3 items-center ml-9 w-full h-full">
                <div className="md:w-1/2 lg:w-5/6 lg:h-5/6 justify-center">
                    <article className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-700 w-5/6 mt-2 mb-3">
                        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-500 dark:bg-gray-700 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div class="mb-8">
                                <p class="text-sm text-gray-600 flex items-center">
                                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    Members only
                                </p>
                                <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                                <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                            </div>

                        </div>
                    </article>
                    <h3 className="text-sm text-white font-semibold">Active Events</h3>
                    <article className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-700 w-5/6 mt-2 mb-3">
                        <div class="grid grid-rows-4 grid-flow-col gap-4 space-between-x-2">
                            <div class="row-span-3">
                                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <span className="text-sm">
                                        <a className="no-underline hover:underline mt-3 text-white" onClick={(e) => handleRedirect(e.target.value)}>
                                            Username
                                        </a>
                                    </span>
                                </label>
                            </div>
                            <div class="row-span-3">
                                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <span className="text-sm">
                                        <a className="no-underline hover:underline text-white">
                                            Username
                                        </a>
                                    </span>
                                </label>
                            </div>
                            <div class="row-span-3">
                                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <span className="text-sm">
                                        <a className="no-underline hover:underline text-white">
                                            Username
                                        </a>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default BorrowerProfileComponent