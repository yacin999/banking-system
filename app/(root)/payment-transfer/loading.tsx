import { HeaderBoxSkeleton, PaymentTransferFormSkeleton } from '@/components/Skeletons'
import React from 'react'


const PaymentTransferLoading = () => {
  return (
    <section className='payment-transfer'>
        <div className='flex w-full flex-col items-start justify-between gap-8 md:flex-row'>
          <HeaderBoxSkeleton/>
        </div>

        <section className='size-full pt-5'>
            <PaymentTransferFormSkeleton/>
        </section>
    </section>
  )
}

export default PaymentTransferLoading