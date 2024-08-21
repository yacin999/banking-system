import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from '@/lib/utils'
  

type Props = {}

const TransactionsTable = ({ transactions }: TransactionTableProps ) => {
  return (
    <Table>
        <TableHeader className='bg-[#F9F8FB]'>
            <TableRow>
                <TableHead className="px-2">Transaction</TableHead>
                <TableHead className="px-2">Amount</TableHead>
                <TableHead className="px-2">Status</TableHead>
                <TableHead className="px-2">Date</TableHead>
                <TableHead className="px-2 max-md:hidden">Channel</TableHead>
                <TableHead className="px-2 max-md:hidden">Category</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {transactions.map((t : Transaction) => {
                const status = getTransactionStatus(new Date(t.date))
                const amount = formatAmount(t.amount)

                const isDebit = t.type === "debit"
                const isCredit = t.type === "credit"

                return (
                    <TableRow key={t.id} className={`${isDebit || amount[0] === '-' ? 'bg-[#FFFBFA]' : 'bg-[#F6FEF9]'} !hover:bg-none !border-b-default`}>
                        <TableCell className='max-w-[250px] pl-2 pr-10'>
                            <div className='flex items-center gap-3'>
                                <h1 className='text-14 truncate font-semibold text-[#344054]'>{removeSpecialCharacters(t.name)}</h1>
                            </div>
                        </TableCell>

                        <TableCell className={`pl-2 pr-10 font-semibold ${isDebit || amount[0] === '-' ? "text-[#F04438]" : "text-[#039855]"}`}>
                            {isDebit ? `-${amount}` : isCredit ? amount : amount }
                        </TableCell>

                        <TableCell className=''>
                            {status}
                        </TableCell>

                        <TableCell>
                            {formatDateTime(new Date(t.date)).dateTime}
                        </TableCell>
                        
                        <TableCell>
                            {t.paymentChannel}
                        </TableCell>

                        <TableCell>
                            {t.category}
                        </TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    </Table>

  )
}

export default TransactionsTable