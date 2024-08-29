import { BankCardSkeleton } from '@/components/Skeletons'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <section className='my-banks'>
        <div className='flex flex-col gap-3'>
            <div className='w-[200px] h-[35px] bg-skeleton rounded-xl'/>
            <div className='w-[250px] h-6 bg-skeleton rounded-xl'/>
        </div>

        <div className=''>
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
    </section>
  )
}

export default loading