import HeaderBox from '@/components/HeaderBox'
import React from 'react'

type Props = {}

const paymentTransfer = (props: Props) => {
  return (
    <section className='payment-transfer'>
      <HeaderBox
        title='Payment Transfer'
        subtext='Please provide any specific details or notes related to the payment transfers'
      />

      <section className='size-full pt-5'>
        <PaymentTransferForm/>
      </section>
    </section>
  )
}

export default paymentTransfer