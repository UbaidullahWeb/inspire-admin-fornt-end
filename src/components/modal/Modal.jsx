import React from 'react'

const Modal = () => {
    return (
        <div className="fixed flex p-[20px] bg-[#FFF] w-[800px] shadow-[0_4px_20px_1000px_rgba(0,0,0,0.6)] rounded-[10px] flex-col gap-[24px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">

            <div className="flex items-center justify-between">

                <span className='text-[#303031] font-[500] text-[28px]'>
                    Edit Product
                </span>

                <span className='text-[#303031] text-[24px] cursor-pointer'>
                    X
                </span>

            </div>

        </div>
    )
}

export default Modal;