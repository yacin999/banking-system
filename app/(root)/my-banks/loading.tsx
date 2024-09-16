import { BankCardSkeleton, HeaderBoxSkeleton } from '@/components/Skeletons'
import React from 'react'

type Props = {}


const loading = (props: Props) => {
  return (
    <section className='flex'>
      <div className='my-banks'>
        <div className='flex w-full flex-col items-start justify-between gap-8 md:flex-row'>
          <HeaderBoxSkeleton/>
        </div>
        <div className='space-y-4'>
            <div className='w-[100px] h-[22px] bg-skeleton rounded-xl mb-4'/>

            <div className='flex flex-wrap gap-6'>
                <BankCardSkeleton/>
                <BankCardSkeleton/>
                <BankCardSkeleton/>
                <BankCardSkeleton/>
                <BankCardSkeleton/>
                <BankCardSkeleton/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default loading