import {useState} from 'react'
import Header from '../user-components/Header'
import CalendarNoButton from '../user-components/Calendar-No-Button'
import CalendarWithButton from '../user-components/Calendar-With-Button'
import {Link} from 'react-router-dom'

const Calendar = () => {
   const [confirmation, setconfirmation] = useState(false);
   const [week, setweek] = useState(1);
   const [finish, setfinish] = useState(false);

  return (
    <>
      {
        finish === false
        ?
        <>
<Header type="calendar"/>
      <div className='p-5'>
      {
        confirmation === false ?
        <div className='bg-white p-5'>
        <div className="flex items-center justify-between w-full mb-16 3sm:mb-6">
          <button onClick={()=> {setweek(1)}} className='flex items-center text-[#2F54EB] gap-2 flex-row-reverse'>先週<svg width="10" height="15" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8987 1.98424V0.927406C6.8987 0.835805 6.79343 0.785219 6.72233 0.841273L0.559053 5.65514C0.506687 5.69586 0.464315 5.74801 0.435168 5.8076C0.406021 5.86719 0.390869 5.93265 0.390869 5.99899C0.390869 6.06532 0.406021 6.13079 0.435168 6.19038C0.464315 6.24997 0.506687 6.30211 0.559053 6.34284L6.72233 11.1567C6.7948 11.2128 6.8987 11.1622 6.8987 11.0706V10.0137C6.8987 9.94674 6.86726 9.88248 6.8153 9.84147L1.89343 5.99967L6.8153 2.15651C6.86726 2.11549 6.8987 2.05123 6.8987 1.98424V1.98424Z" fill="#2F54EB"/></svg></button>
          <div className='4sm:text-[18px] text-[#434343] -mb-20 3sm:mb-0'>12月19日〜12月25日</div>
          <button onClick={()=> {setweek(2)}} className='flex items-center text-[#2F54EB] gap-2'>次週<svg width="10" height="15" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.45949 6.55692L0.535291 0.367666C0.514585 0.351365 0.489701 0.341234 0.463496 0.338438C0.437292 0.335641 0.41083 0.340292 0.38715 0.351857C0.36347 0.363422 0.343532 0.381431 0.329626 0.403816C0.31572 0.426202 0.308409 0.452056 0.308534 0.478409V1.8372C0.308534 1.92333 0.348964 2.00595 0.415761 2.05868L6.74387 6.99989L0.415761 11.9411C0.347206 11.9938 0.308534 12.0765 0.308534 12.1626V13.5214C0.308534 13.6392 0.443885 13.7042 0.535291 13.6321L8.45949 7.44286C8.52684 7.39033 8.58132 7.32312 8.6188 7.24636C8.65627 7.1696 8.67575 7.08531 8.67575 6.99989C8.67575 6.91448 8.65627 6.83018 8.6188 6.75342C8.58132 6.67666 8.52684 6.60946 8.45949 6.55692Z" fill="#2F54EB"/></svg></button>
        </div>

        {
            week === 1
            ?
            <>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-7 w-full mt-7'>
          <div className='hidden sm:flex items-center justify-center text-[#434343]'>19(月)</div>
          <div className='hidden sm:flex items-center justify-center text-[#434343]'>20(火)</div>
          <div className='flex items-center justify-center text-[#434343] pt-2 border-t-2 border-[#2F54EB] w-[40%] mx-auto sm:w-full'>21(水)</div>
          <div className='hidden sm:flex items-center justify-center text-[#434343]'>22(木)</div>
          <div className='hidden sm:flex items-center justify-center text-[#434343]'>23(金)</div>
          <div className='hidden sm:flex items-center justify-center text-[#434343]'>24(土)</div>
          <div className='hidden sm:flex items-center justify-center text-[#F5222D]'>25(日)</div>
        </div>

        <div className='grid grid-cols-1 3sm:grid-cols-2 4sm:grid-cols-3 4md:grid-cols-4 3md:grid-cols-5 3lg:grid-cols-7 w-full mt-3'>
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((data,index)=>{
          return (
                <>
                <CalendarWithButton key={index} setconfirmation={setconfirmation}/>
                <CalendarNoButton key={index}/>
                </>
             )
        })}

        </div>
            </>

            :

            <>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-7 w-full mt-7'>
          <div className='hidden sm:flex items-center justify-center text-[#434343]'>26(月)</div>
          <div className='hidden sm:flex items-center justify-center text-[#434343]'>27(火)</div>
          <div className='flex items-center justify-center text-[#434343] pt-2 border-t-2 border-[#2F54EB] w-[40%] mx-auto sm:w-full'>28(水)</div>
          <div className='hidden sm:flex items-center justify-center text-[#434343]'>29(木)</div>
          <div className='hidden sm:flex items-center justify-center text-[#434343]'>30(金)</div>
          <div className='hidden sm:flex items-center justify-center text-[#434343]'>31(土)</div>
          <div className='hidden sm:flex items-center justify-center text-[#F5222D]'>1(日)</div>
        </div>

        <div className='grid grid-cols-1 3sm:grid-cols-2 4sm:grid-cols-3 4md:grid-cols-4 3md:grid-cols-5 3lg:grid-cols-7 w-full mt-3'>
        {[1,2,3,4].map((data,index)=>{
          return (
                <>
                <CalendarWithButton key={index} setconfirmation={setconfirmation}/>
                <CalendarNoButton key={index}/>
                </>
             )
        })}

        </div>
            </>
        }

      </div>

      :
      <>
      <button onClick={()=> {setconfirmation(false)}} className='flex items-center text-[#2F54EB] gap-2 flex-row-reverse mb-6'>戻る<svg width="10" height="15" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8987 1.98424V0.927406C6.8987 0.835805 6.79343 0.785219 6.72233 0.841273L0.559053 5.65514C0.506687 5.69586 0.464315 5.74801 0.435168 5.8076C0.406021 5.86719 0.390869 5.93265 0.390869 5.99899C0.390869 6.06532 0.406021 6.13079 0.435168 6.19038C0.464315 6.24997 0.506687 6.30211 0.559053 6.34284L6.72233 11.1567C6.7948 11.2128 6.8987 11.1622 6.8987 11.0706V10.0137C6.8987 9.94674 6.86726 9.88248 6.8153 9.84147L1.89343 5.99967L6.8153 2.15651C6.86726 2.11549 6.8987 2.05123 6.8987 1.98424V1.98424Z" fill="#2F54EB"/></svg></button>
    <div className='bg-white p-5'>
    <div className='w-full text-[#434343] border-b border-[#F0F0F0] pb-4 mb-6'>予約の確認</div>
            <div className='text-[#434343] mt-6'>下記のご予約を確定してもよろしいですか</div> 

            <div className='mt-10'>
            <div className='text-[#8C8C8C] text-sm mb-1'>日時</div>
            <div className="flex items-center gap-5 sm:gap-10">
            <div className='text-[#141414] font-bold text-[24px]'>12月24日 (土)　18:00 - 19:30</div>
            </div>
            </div>


            <div className="flex items-center flex-wrap gap-3 mt-6">
              <button onClick={()=> {setconfirmation(false)}} className='text-[#2F54EB] px-5 py-1.5 border-2 border-[#2F54EB]'>いいえ</button>
              <button onClick={()=> {setfinish(true)}} className='text-white px-5 py-1.5 border-2 border-[#2F54EB] bg-[#2F54EB]'>予約をキャンセル</button>
            </div>

    </div>
    </>
      }
      </div>
        </>
        :
        <>
     <div className="min-h-[calc(100vh-150px)] max-w-[300px] text-center flex items-center justify-center flex-col mx-auto mb-24">
          <div>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" className='mx-auto mb-5' xmlns="http://www.w3.org/2000/svg"><path d="M35 0C15.6719 0 0 15.6719 0 35C0 54.3281 15.6719 70 35 70C54.3281 70 70 54.3281 70 35C70 15.6719 54.3281 0 35 0ZM50.1172 23.5703L33.6641 46.3828C33.4341 46.7038 33.131 46.9653 32.7797 47.1457C32.4285 47.3261 32.0394 47.4203 31.6445 47.4203C31.2497 47.4203 30.8605 47.3261 30.5093 47.1457C30.1581 46.9653 29.855 46.7038 29.625 46.3828L19.8828 32.8828C19.5859 32.4688 19.8828 31.8906 20.3906 31.8906H24.0547C24.8516 31.8906 25.6094 32.2734 26.0781 32.9297L31.6406 40.6484L43.9219 23.6172C44.3906 22.9687 45.1406 22.5781 45.9453 22.5781H49.6094C50.1172 22.5781 50.4141 23.1562 50.1172 23.5703Z" fill="#52C41A"/></svg>
            <div className='text-[#141414]'>予約が完了いたしました</div>
          </div>

          <button onClick={()=>{
            setconfirmation(false)
            setfinish(false)
          }} className="w-full max-w-[150px] flex items-center justify-center mx-auto bg-white py-2.5 mt-16 border border-[#2F54EB] text-[#2F54EB] rounded-[2px]">マイページへ</button>

        </div>


        <div className="absolute bottom-3 left-0 w-full flex items-center justify-center flex-col gap-2 px-5">
        <div className="flex gap-6">
            <Link to="/" className='text-[#2F54EB]'>ホームページ</Link>
            <Link to="/" className='text-[#2F54EB]'>お問い合せ</Link>
        </div>

        <div className='text-center text-[#434343]'>Copyright (C) DTS KICKBOXING GYM 2022 All Rights Reserved</div>
      </div>
        </>
      }
    </>
  )
}

export default Calendar