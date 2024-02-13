import React from 'react'
import Table from '../Table'
import VendorTable from './VendorTable'

const AllVendorRequest = () => {
   return (
      <div className="mx-auto md:px-0 w-full z-10">
         <div className='p-8 md:p-10 rounded-md box-shadow border border-[#F1F1F4] max-w-7xl w-full mx-auto'>
            <div className="mb-5">
               <h3 className="text-textColor text-[17px] font-semibold">Vendor Request</h3>
               <p className="text-[#99a1b7] font-medium">All vendor request</p>
            </div>
            <VendorTable />
         </div>
      </div>
   )
}

export default AllVendorRequest