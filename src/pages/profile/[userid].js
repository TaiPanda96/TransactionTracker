
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BorrowerSidebar from '../../components/Borrower/BorrowerDrawer';
import BorrowerProfileComponent from '@/components/Borrower/BorrowerProfile';

import BorrowerWidget  from "@/components/Borrower/BorrowerWidget"

const ProfileDetails = () => {
    const router = useRouter();
    const [borrower, setBorrowerProfile] = useState({});
    const [error, setError] = useState('');
    useEffect(() => {
        if (!sessionStorage.getItem("authenticated")) { router.push('/') }
        if (!sessionStorage.getItem("borrowerToken") || !sessionStorage.getItem("borrower")) { router.push('/search')}
        fetch(`http://localhost:8080/api/auth/get?id=${sessionStorage.getItem("borrower")}`, {
            headers: {
                'Content-Type': 'application/json',
                "authorization": sessionStorage.getItem("borrowerToken") || '',
            }
        }).then((res) => res.json()).then((res) => setBorrowerProfile(res)).catch(error => setError(error))
    }, []);
    return (
        <>
        <div className="bg-neutral-900 w-full h-full flex max-w-[2400px] mx-auto">
          <BorrowerSidebar/>
          <BorrowerProfileComponent borrowerObj={borrower}/>
          <BorrowerWidget/>
        </div>
      </>
    )



}

export default ProfileDetails