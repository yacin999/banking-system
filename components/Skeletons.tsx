import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent animate-pulse';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

// export function TableRowSkeleton() {
//   return (
//     <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
//       {/* Customer Name and Image */}
//       <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
//         <div className="flex items-center gap-3">
//           <div className="h-8 w-8 rounded-full bg-gray-100"></div>
//           <div className="h-6 w-24 rounded bg-gray-100"></div>
//         </div>
//       </td>
//       {/* Email */}
//       <td className="whitespace-nowrap px-3 py-3">
//         <div className="h-6 w-32 rounded bg-gray-100"></div>
//       </td>
//       {/* Amount */}
//       <td className="whitespace-nowrap px-3 py-3">
//         <div className="h-6 w-16 rounded bg-gray-100"></div>
//       </td>
//       {/* Date */}
//       <td className="whitespace-nowrap px-3 py-3">
//         <div className="h-6 w-16 rounded bg-gray-100"></div>
//       </td>
//       {/* Status */}
//       <td className="whitespace-nowrap px-3 py-3">
//         <div className="h-6 w-16 rounded bg-gray-100"></div>
//       </td>
//       {/* Actions */}
//       <td className="whitespace-nowrap py-3 pl-6 pr-3">
//         <div className="flex justify-end gap-3">
//           <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
//           <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
//         </div>
//       </td>
//     </tr>
//   );
// }

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


















export const HeaderBoxSkeleton = () => {
   return (
        <div
        className={`header-box ${shimmer} relative overflow-hidden rounded-xl p-2 shadow-sm`}
        >
            <div className="h-6 w-[240px] rounded-md bg-gray-200 mb-3" />
            <div className="h-5 w-[470px] rounded-md bg-gray-200 text-sm font-medium" />
        </div>
   )
}

export const TotalBalanceBoxSkeleton = () => {
    return (
        <div
        className={`total-balance ${shimmer} relative overflow-hidden rounded-xl p-2 shadow-sm`}
        >
            <div className="w-[120px] h-[120px] rounded-full bg-gray-200"/>
            
            <div className="flex flex-col gap-6">
                <div className="h-4 w-[160px] bg-gray-200"/>
                <div className="flex flex-col gap-2">
                    <div className="h-3 w-[155px] rounded-md bg-gray-200"/>
                    <div className="h-6 w-[120px] rounded-md bg-gray-200"/>
                </div>
            </div>
        </div>
    )
}


function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-24 rounded bg-gray-100"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6">
          <div className="h-[38px] w-[80px] rounded-full bg-gray-100"></div>
      </td>
    </tr>
  );
}

export const TransactionsTableSkeleton = () => {
    return (
      // <Table>
      // <TableHeader className='bg-[#F9F8FB]'>
      //     <TableRow>
      //         <TableHead className="px-2">Transaction</TableHead>
      //         <TableHead className="px-2">Amount</TableHead>
      //         <TableHead className="px-2">Status</TableHead>
      //         <TableHead className="px-2">Date</TableHead>
      //         <TableHead className="px-2 max-md:hidden">Channel</TableHead>
      //         <TableHead className="px-2 max-2xl:hidden">Category</TableHead>
      //     </TableRow>
      // </TableHeader>
      // <TableBody>
      //     {["transactions"].map((t) => {

      //         return (
      //             <TableRow key={t.id} className={`!hover:bg-none !border-b-default`}>
      //                 <TableCell className='max-w-[250px] pl-2 pr-10'>
      //                     <div className='flex items-center gap-3'>
      //                         <h1 className='text-14 truncate font-semibold text-[#344054]'>{removeSpecialCharacters(t.name)}</h1>
      //                     </div>
      //                 </TableCell>

      //                 <TableCell className={`pl-2 pr-10 font-semibold ${isDebit || amount[0] === '-' ? "text-[#F04438]" : "text-[#039855]"}`}>
      //                     {isDebit ? `-${amount}` : isCredit ? amount : amount }
      //                 </TableCell>

      //                 <TableCell className='pl-2 pr-10'>
      //                     <CategoryBadge category={status}/>
      //                 </TableCell>

      //                 <TableCell className='min-w-32 pl-2 pr-10'>
      //                     {formatDateTime(new Date(t.date)).dateTime}
      //                 </TableCell>
                      
      //                 <TableCell className='pl-2 pr-10 capitalize min-w-24'>
      //                     {t.paymentChannel}
      //                 </TableCell>

      //                 <TableCell className='max-2xl:hidden pl-2 pr-10'>
      //                     <CategoryBadge category={t.category}/>
      //                 </TableCell>
      //             </TableRow>
      //         )
      //     })}
      // </TableBody>
      // </Table>



      <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Transaction
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Channel
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Category
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
}

export const RecentTransactionsSkeleton = ()=> {
    return (
        <section className="recent-transactions">
            <header className="flex items-center justify-between">
                <div className="h-6 w-[240px] rounded-md bg-skeleton mb-3"/>
                <div className="w-[87px] h-[42px] rounded-lg bg-skeleton"/>
            </header>

            <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center h-[38px] border-b-[2px] border-bg-skeleton">
                  <div className="h-5 w-[100px] rounded-md bg-skeleton"/>
                </div>

                <div className="flex justify-center items-center h-[38px] border-b-[2px] border-bg-skeleton">
                  <div className="h-5 w-[100px] rounded-md bg-skeleton"/>
                </div>

                 <div className="flex justify-center items-center h-[38px] border-b-[2px] border-bg-skeleton">
                  <div className="h-5 w-[100px] rounded-md bg-skeleton"/>
                </div>
                
                 <div className="flex justify-center items-center h-[38px] border-b-[2px] border-bg-skeleton">
                  <div className="h-5 w-[100px] rounded-md bg-skeleton"/>
                </div>
            </div>

            <div className="gap-[18px] flex p-4 border bg-gray-100">
                <div className="w-5 h-5 rounded-full bg-skeleton"/>

                <div className="flex w-full flex-1 flex-col justify-center gap-1">
                  <div className="flex flex-1 items-center justify-between gap-2 overflow-hidden">
                    <div className="w-[100px] h-6 bg-skeleton"/>
                    <div className="w-[77px] h-6 rounded-full bg-skeleton"/>
                  </div>

                  <div className="w-[80px] h-6 bg-skeleton"/>
                </div>
            </div>

            <TransactionsTableSkeleton/>
        </section>
    )
}

export default async function DashboardSkeleton() {
    
    return (
      <main className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBoxSkeleton/>
            <TotalBalanceBoxSkeleton/>
          </header>

          <RecentTransactionsSkeleton/>
        </div>
        <div className="right-sidebar">
          <RevenueChartSkeleton />
          <LatestInvoicesSkeleton />
        </div>
      </main>
    );
}
  