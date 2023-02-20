import React from 'react'

const CalendarNoButton = (props) => {
  return (
    <>
    <div className='min-h-[143px] text-center p-3 border border-[#ADC6FF]'>
      <div className='text-[#141414]'>19:30</div>
      <div className="flex items-center justify-center gap-2"><input type="radio" /><div className='font-bold text-[20px] text-[#141414] mt-1'>満員</div></div>
      <button onClick={()=> {props.setconfirmation(true)}} className="w-full bg-white py-1 border-2 border-[#2F54EB] text-[#2F54EB] rounded-[4px] mx-auto mt-6">予約</button>
    </div>
    </>
  )
}

export default CalendarNoButton