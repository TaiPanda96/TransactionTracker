// Import Hero Icons
import { useState, useEffect } from 'react';
import ErrorMessageContainer from '../Messages/Error'
import moment from 'moment';

const OriginationComponents = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError]     = useState('');
    const [facilities, setData] = useState('');
    const [headers, setHeaders] = useState('');
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8080/api/auth/get-facility`, {
            headers: {
                'Content-Type': 'application/json',
                "authorization": sessionStorage.getItem("accessToken") || '',
            }
        }).then((data) => data.json()).then((data) => {
            if (data && data['error']) {
                let { name, message, expiredAt } = data['error'];
                if (name === 'TokenExpiredError') {
                    router.push('/')
                }
            } else {
                setData(data);
                setLoading(false)
                setHeaders(Object.keys(data[0] || []) || [])
            }
        }).catch((err) => {
            setError(err)
            setLoading(false)
        });
    }, []);
    if (error) {
        return (<div className='flex items-center'> <ErrorMessageContainer error={error} message={error.message} /> </div>)
    } else if (isLoading) {
        return (<div className='flex items-center'> Loading data... </div>)
    } else {
        return (<div className='flex items-center'>{Array.isArray(facilities) && facilities.length > 2 && <table class="table-fixed">
            <thead>
                <tr>
                    {headers.map((heading) =>
                        <th scope="col" className="text-sm justify-end font-large text-white px-8 py-3">
                            {heading}
                        </th>)}
                </tr>
            </thead>
            <tbody>
                {facilities.map((row) => {
                    return (
                        <tr class="dark:bg-gray-900 border-b">
                            {headers.map((heading) => { return (
                                heading === 'addedDate' ? <td className="text-sm text-white font-light px-4 py-4 whitespace">{moment(row[heading]).format('YYYY-MM-DD HH:MM:SS')}</td> :
                            <td className="text-sm text-white font-light px-4 py-4 whitespace">{row[heading]}</td>
                            ) } )}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        } </div>)
    }

}

export default OriginationComponents