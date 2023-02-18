import { useState, useEffect } from 'react';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import ErrorMessageContainer from '../components/Message/Error'
import { Typography } from '@mui/material';
const states = {
    AL: 'Alabama',
    AK: 'Alaska',
    AZ: 'Arizona',
    AR: 'Arkansas',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DE: 'Delaware',
    FL: 'Florida',
    GA: 'Georgia',
    HI: 'Hawaii',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    IA: 'Iowa',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Louisiana',
    ME: 'Maine',
    MD: 'Maryland',
    MA: 'Massachusetts',
    MI: 'Michigan',
    MN: 'Minnesota',
    MS: 'Mississippi',
    MO: 'Missouri',
    MT: 'Montana',
    NE: 'Nebraska',
    NV: 'Nevada',
    NH: 'New Hampshire',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NY: 'New York',
    NC: 'North Carolina',
    ND: 'North Dakota',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregon',
    PA: 'Pennsylvania',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VT: 'Vermont',
    VA: 'Virginia',
    WA: 'Washington',
    WV: 'West Virginia',
    WI: 'Wisconsin',
    WY: 'Wyoming',
}
export default function ProfileComponent() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8080/api/customers/auth-get?customerId=63eaca8559ef868d14301442')
            .then(
                (data) => data.json()
            ).then(
                (data) => {
                    setData(data);
                    setLoading(false)
                }
            ).catch((err) => {
                setError(err)
                setLoading(false)
            })
    }, []);

    if (isLoading) return <div>loading...</div>
    if (error) return <div className='items-center'> <ErrorMessageContainer error={error} message={error.message} /> </div>
    if (!data) return <div>no data</div>
    return (
        <div className="flex-grow border-l border-neutral-800 max-w-4xl sm:ml-[70px] xl:ml-[55px]">
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-indigo-900 border-b border-gray-700">
            <h6 className="justify-center">Customer Profile</h6>
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    <EditNotificationsIcon className="h6 fill-white" />
                </div>
            </div>
            <br></br>
            <form className="items-center bg-neutral-800">
                <div class="flex flex-wrap -mx-3 mb-5">
                    <div class="w-full md:w-1/2 px-6 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide no-wrap text-white text-xs font-bold mb-2 mt-5" for="grid-first-name">
                            First Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-white border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                        </input>
                       
                    </div>
                    <div class="w-full md:w-1/2 px-6">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2 mt-5" for="grid-last-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
                        </input>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-6">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
                        </input>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-5">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
                        </input>
                    </div>
                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
                            State
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                {Object.values(states).map((state) => {
                                    return (
                                        <option>{state}</option>
                                    )
                                }) }
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-6 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
                        </input>
                    </div>

                </div>
            </form>
        </div>
    )
}


