import React from 'react'

const OrderInfo = () => {
    return (
        <div className='flex flex-col gap-[32px]'>

            <span className='text-[32px] font-[600] text-[#303031]'>
                Orders
            </span>

            <div className="flex flex-col gap-[16px] w-full">

                <div className="flex items-center w-full px-[24px] py-[16px]">

                    <span className='text-[#737791] font-[500] w-full'>
                        Date
                    </span>

                    <span className='text-[#737791] font-[500] w-full'>
                        Quantity
                    </span>

                    <span className='text-[#737791] font-[500] w-full'>
                        Discount
                    </span>

                    <span className='text-[#737791] font-[500] w-full'>
                        Price
                    </span>

                </div>

                <div className="flex items-center px-[24px] py-[16px] bg-[#FFF] rounded-[8px] shadow-[0_4px_20px_-0px_rgba(0,0,0,0.05)]">

                    <span className='text-[#303031] font-[500] w-full'>
                        02/07/2022
                    </span>

                    <span className='text-[#303031] font-[500] w-full'>
                        02
                    </span>

                    <span className='text-[#303031] font-[500] w-full'>
                        10%
                    </span>

                    <span className='text-[#303031] font-[500] w-full'>
                        $380
                    </span>

                </div>

            </div>

        </div>
    )
}

export default OrderInfo;