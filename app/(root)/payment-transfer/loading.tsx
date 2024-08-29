import { HeaderBoxSkeleton } from '@/components/Skeletons'
import React from 'react'


const PaymentTransferLoading = () => {
  return (
    <section className='payment-transfer'>
        <HeaderBoxSkeleton/>

        <section className='size-full pt-5'>
            {/* <PaymentTransferFormSkeleton/> */}
        </section>
    </section>
  )
}

export default PaymentTransferLoading