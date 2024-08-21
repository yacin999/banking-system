import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


type Props = {}

const RecentTransactions = ({
    accounts,
    transactions = [],
    appwriteItemId,
    page=1
}: RecentTransactionsProps) => {
  return (
    <section className='recent-transactions'>
        <header className='flex items-center justify-between'>
            <h2 className='recent-transactions-label'>Recent transactions</h2>
            <Link href={`/transaction-history/?id=${appwriteItemId}`} className='view-all-btn'>View all</Link>
        </header>
        
        <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className='recent-transactions-tablist'>
          {accounts.map((account : Account)=> (
            <TabsTrigger key={account.id} value={account.appwriteItemId}>{account.name}</TabsTrigger>
          ))}
          
        </TabsList>
        <TabsContent value="account">
          
        </TabsContent>
        
        <TabsContent value="password">
          
        </TabsContent>
      </Tabs>

    </section>
  )
}

export default RecentTransactions