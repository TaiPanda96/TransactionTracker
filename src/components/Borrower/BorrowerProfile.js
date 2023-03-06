import moment from 'moment';
import Citi from "../../assets/Citi.svg";
import Image from 'next/image';

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CardComponent from "../Cards";
import PersonIcon from '@mui/icons-material/Person';
import { SvgIcon } from "@mui/material";

const BorrowerProfileComponent = ({ borrowerObj = {} }) => {
    return (
        <div className="w-full rounded-lg shadow-lg dark:bg-gray-800 mb-4">
            <div class="flex grid-cols-3 gap-3 items-center ml-9 w-full h-full">
                <div className="md:w-1/2 lg:w-5/6 lg:h-5/6 justify-center ">
                    <article className=" dark:border-gray-700 border-l border-r border-b border-t overflow-hidden rounded-lg shadow-lg dark:bg-gray-700 w-5/6 mb-3 content flex py-2">
                        <div class=" dark:bg-gray-200 ml-3 h-5/6 lg:h-auto lg:w-48 flex-none items-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                            <Image
                                src={Citi}
                                width={600}
                                height={1200}
                            />
                        </div>
                        <div class="border-l dark:border-gray-600 border-spacing-3 border-white ml-3 dark:bg-gray-700 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <div class="grid grid-rows-4 grid-flow-col gap-11 space-between-x-2">
                                    <div class="row-span-3">
                                        <div>
                                            <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                                                Organization: Citi Group 
                                            </label>

                                        </div>
                                    </div>
                                </div>
                                <span className="text-sm font-semibold text-white">{ borrowerObj ? borrowerObj.username : ''}</span>
                            </header>

                            <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <div class="row-span-3">
                                        <div>
                                            <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                                                Joined: { moment().format('YYYY-MM-DD') }
                                            </label>

                                        </div>
                                    </div>
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
                    <h3 className="text-sm text-white font-semibold">Financials</h3>
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