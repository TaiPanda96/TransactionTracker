import axios from "axios";
import { useState } from "react";
import Searchrow from "../Search/Searchrow";


const Search = () => {
    const [options, setOptions] = useState('');
    const getSearchResults      = async (search) => {
        try {
            let query = await axios.get(`http://localhost:8080/api/search/get-user?search=${search}`, {
                headers: {
                    'Content-Type': "application/json",
                    "authorization": sessionStorage.getItem("accessToken") || "",
                }
            });
            if (query) {
                let { data } = query;
                return data;
            }
        } catch (err) {
            console.log(err)
        }

    }
    const handleSearch = async (e) => {
        if (e.target.value) {
            let data = await getSearchResults(e.target.value) || [];
            setOptions(data)
        }
    }
    return (
        <div className="w-full overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 mb-4">
            <form className="w-3/6 overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 mb-9 mt-11 ml-8">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input
                        onChange={(e) => handleSearch(e)}
                        type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search username or email" required>
                    </input>
                </div>
            </form>
            <div class="flex grid-cols-3 gap-3 items-center ml-9 w-full h-full">
                <div className="w-full h-full md:w-1/2 lg:w-5/6 lg:h-5/6 justify-center">
                    <article className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-700 w-5/6 mt-2">
                        <div class="grid grid-rows-4 grid-flow-col gap-4 space-between-x-2">
                            <div class="row-span-3">
                                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <span className="text-sm text-white font-semibold">
                                        Username
                                    </span>
                                </label>
                            </div>
                            <div class="row-span-3">
                                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <span className="text-sm  text-white font-semibold">
                                        Email
                                    </span>
                                </label>
                            </div>
                            <div class="row-span-3">
                                <label className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <span className="text-sm text-white font-semibold">
                                        Joined
                                    </span>
                                </label>
                            </div>
                        </div>
                    </article>
                    {Array.isArray(options) && options.length > 0 && options.map(e => {
                        return (<Searchrow _id= {e._id} accessToken ={e.accessToken} username={e.username} email={e.email} joined={e.joined}>
                        </Searchrow>)
                    })}
                </div>



            </div>
        </div>
    )

}

export default Search;