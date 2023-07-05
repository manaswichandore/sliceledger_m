import React from 'react'
import Dashboard from '../../components/dashboard_comp/Dashboard'
import MainDash from '../../components/dashboard_comp/MainDash'
import { useRouter } from 'next/router'

const staking = () => {
  const router = useRouter()

  React.useEffect(() => {
      if (router.pathname === "/dashboard/staking") {
          document.body.style.backgroundColor = "#fff"
      }else{
          // document.body.style.backgroundColor = "#fff"
      }
    
  }, [router])
  return (
    <>
        <Dashboard />
        <MainDash />
    </>
  )
}

export default staking