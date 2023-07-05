import React from 'react'
import Dashboard from '../../components/dashboard_comp/Dashboard'
import Buytoken from '../../components/dashboard_comp/BuyToken'
import { useRouter } from 'next/router'
export default function buyToken() {
    const router = useRouter()

    React.useEffect(() => {
        if (router.pathname === "/dashboard/buyToken") {
            document.body.style.backgroundColor = "#fff"
        }else{
            // document.body.style.backgroundColor = "#fff"
        }
      
    }, [router])
    

    return (
        <>
            <Dashboard />
            <Buytoken />
        </>
    )
}
