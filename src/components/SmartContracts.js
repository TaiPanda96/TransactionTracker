import moment from 'moment';
import { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Card } from '@mui/material';

export default function SmartContractComponent() {
    return (
        <div className="flex-grow border-l border-r border-neutral-800 max-w-4xl sm:ml-[70px] xl:ml-[25px]">
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-indigo-900 border-b border-gray-700">
                <h6 className="justify-center">Active Contracts</h6>
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    <EditIcon className="h6 fill-white" />
                </div>
            </div>
            <br></br>
            <form className="items-center dark:bg-gray-900">
                <div class="flex flex-wrap -mx-3 mb-5">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-6">
                            <label class="block uppercase tracking-wide text-white text-xs font-bold mb-3 ml-5 mt-6" for="grid-password">
                                Active Contracts
                            </label>

                            <table>

                            </table>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-5">
                    
                </div>
               

            </form>
            <br></br>
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-indigo-900 border-b border-gray-700">
                    <h6 className="justify-center">Edit Smart Contracts</h6>
                    <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                        <EditIcon className="h6 fill-white" />
                    </div>
                </div>
        </div>
    )
}