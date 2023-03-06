import { useState, useEffect } from "react";
import profilepic from "../../assets/profilepic.jpeg"
import { useRouter } from "next/router";
import CardComponent from "../Cards";
import Image from 'next/image'
import PersonIcon from '@mui/icons-material/Person';

const BorrowerProfileComponent = ({ borrowerObj = {} }) => {
    return (
        <div className="w-full rounded-lg shadow-lg dark:bg-gray-800 mb-4">
            <div class="flex grid-cols-3 gap-3 items-center ml-9 w-full h-full">
                <div className="md:w-1/2 lg:w-5/6 lg:h-5/6 justify-center ">
                    <article className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-700 w-5/6 mb-3 content flex py-2">
                        <div class=" ml-3 h-5/6 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                            <Image
                                src={profilepic}
                                width={600}
                                height={1200}
                            />
                        </div>
                        <div class="border-l border-spacing-3 border-white ml-3 dark:bg-gray-700 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <div class="grid grid-rows-4 grid-flow-col gap-11 space-between-x-2">
                                    <div class="row-span-3 ml-3">
                                        <div>
                                            <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Username</label>

                                        </div>
                                    </div>
                                    <div class="row-span-3 ml-3">
                                        <div>
                                            <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Joined</label>

                                        </div>
                                    </div>
                                </div>
                            </header>

                            
                            <div className="flex items-center justify-center">
                            </div>
                            <div className="flex items-center justify-center">
                                <svg class="h-10 w-10" viewBox="0 0 24 24">
                                </svg>
                            </div>
                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            </footer>
                        </div>
                    </article>
                    <h3 className="text-sm text-white font-semibold">Recent Events</h3>
                    <article className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-700 w-5/6 mt-2 mb-3">
                        <div class="grid grid-rows-4 grid-flow-col gap-4 space-between-x-2">
                            <div class="row-span-3">
                                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <span className="text-sm">

                                    </span>
                                </label>
                            </div>
                            <div class="row-span-3">
                                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <span className="text-sm">

                                    </span>
                                </label>
                            </div>
                            <div class="row-span-3">
                                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <span className="text-sm">

                                    </span>
                                </label>
                            </div>
                        </div>
                    </article>
                    <h3 className="text-sm text-white font-semibold">Upcoming Compliance</h3>
                    <article className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-700 w-5/6 mt-2 mb-3">
                        <div class="grid grid-rows-4 grid-flow-col gap-4 space-between-x-2">
                            <div class="row-span-3">
                                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <span className="text-sm">

                                    </span>
                                </label>
                            </div>
                            <div class="row-span-3">
                                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <span className="text-sm">

                                    </span>
                                </label>
                            </div>
                            <div class="row-span-3">
                                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <span className="text-sm">

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