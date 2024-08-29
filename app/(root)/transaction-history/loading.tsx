import { HeaderBoxSkeleton, TransactionsTableSkeleton } from '@/components/Skeletons'
import React from 'react'



const TransactionHistoryLoading = () => {
  return (
    <div className='flex max-h-screen w-full flex-col gap-8 overflow-y-scroll p-8 xl:py-12'>
        <div className='transactions-header'>
            <HeaderBoxSkeleton/>
        </div>

        <div className='space-y-6'>
            <div className='flex flex-col justify-between gap-4 rounded-lg border-y bg-gray-300 px-4 py-5 md:flex-row'>
                <div className='flex flex-col gap-2'>
                    <div className='w-[140px] h-[22px] rounded-xl bg-skeleton'/>
                    <div className='w-[280px] h-[20px] rounded-xl bg-skeleton'/>
                    <div className='w-[210px] h-[24px] rounded-xl bg-skeleton'/>
                </div>

                <div className='transactions-account-balance'>
                    <div className='w-[106px] h-5 rounded-xl bg-skeleton'/>
                    <div className='w-[90px] h-[30px] rounded-xl bg-skeleton'/>
                </div>
            </div>

            <TransactionsTableSkeleton/>
        </div>
    </div>
  )
}

export default TransactionHistoryLoading