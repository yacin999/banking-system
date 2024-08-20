import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'
import React from 'react'



const Home = async ({ searchParams : { id, page }}: SearchParamProps) => {

  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  if (!accounts) return;

  const accountsData = accounts?.data
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId

  // const account = await getAccount({ appwriteItemId })


  if (!loggedIn) {
    redirect("/sign-in")
  }
  
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext='Access and manage your account and transactions efficiently.'
          />
          <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance : 123.50}, {currentBalance : 1343.50}]}
      />
    </section>
  )
}

export default Home