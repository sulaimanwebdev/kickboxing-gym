import {useState} from 'react'
import Header from '../user-components/Header'
import CalendarNoButton from '../user-components/Calendar-No-Button'
import CalendarWithButton from '../user-components/Calendar-With-Button'


const Dashboard = () => {
   const [noBooking, setnoBooking] = useState(false);
   const [cancelConfirm, setcancelConfirm] = useState(false);

  return (
    <>
      <Header noBooking={noBooking} type="dashboard"/>
      {
        cancelConfirm === false
        ?
        <div className='p-5'>
     
        <div className='bg-white p-5'>
          <div className='w-full text-[#434343] border-b border-[#F0F0F0] pb-4 mb-6'>田中太郎さん　の予約状況</div>
          {
        noBooking === true
        ?
          <div className='text-[#F5222D] mt-6'>現在仮登録なため、ご予約ができません。<br/>オーナーが許可する次第、正式に登録が完了いたします。</div>
          :
          <div>
            <div className='text-[#8C8C8C] text-sm mb-1.5'>会員タイプ</div>
            <div className='text-[#141414] font-bold text-[24px]'>週三会員</div>
            <div className="flex gap-12 mt-6">
                <div>
                  <div className='text-[#8C8C8C] text-sm mb-1.5'>今月の残りの予約可能回数</div>
                  <div className='text-[#141414] font-bold text-[24px]'>2回</div>
                </div>

                <div>
                  <div className='text-[#8C8C8C] text-sm mb-1.5'>回数券</div>
                  <div className='text-[#141414] font-bold text-[24px]'>0回</div>
                </div>
            </div>

            <div className="mt-6">
              <div>
              <div className='text-[#8C8C8C] text-sm mb-1.5'>次のレッスンは</div>
              <div className="flex sm:items-center flex-col sm:flex-row gap-5 sm:gap-10">
              <div className='text-[#141414] font-bold text-[24px]'>12月24日 (土)　18:00 - 19:30</div>
              <button className="px-7 w-fit sm:w-auto bg-white py-2.5 border-2 border-[#2F54EB] text-[#2F54EB] rounded-[4px]">予約をキャンセル</button>
              </div>
              </div>


              <div className='mt-6'>
              <div className='text-[#8C8C8C] text-sm mb-1.5'>次のレッスンは</div>
              <div className="flex sm:items-center flex-col sm:flex-row gap-5 sm:gap-10">
              <div className='text-[#141414] font-bold text-[24px]'>12月24日 (土)　18:00 - 19:30</div>
              <button className="px-7 w-fit sm:w-auto bg-white py-2.5 border-2 border-[#2F54EB] text-[#2F54EB] rounded-[4px]">予約をキャンセル</button>
              </div>
              </div>


              <div className='mt-6'>
              <div className='text-[#8C8C8C] text-sm mb-1.5'>次のレッスンは</div>
              <div className="flex sm:items-center flex-col sm:flex-row gap-5 sm:gap-10">
              <div className='text-[#141414] font-bold text-[24px]'>12月24日 (土)　18:00 - 19:30</div>
              <button className="px-7 w-fit sm:w-auto bg-white py-2.5 border-2 border-[#2F54EB] text-[#2F54EB] rounded-[4px]">予約をキャンセル</button>
              </div>
              </div>


            </div>

          
          </div>
          
          }
        </div>

        
          {
            noBooking === true
            ?
            null
            :
            <div className="bg-white p-5 mt-5">
              <div className='w-full text-[#434343] border-b border-[#F0F0F0] pb-4 mb-6'>本日　2022年12月21日(水)　の空き状況</div>
              <div className='text-[#F5222D] mt-6'>レッスンをキャンセルまた完了しない時は、新しいレッスンを予約できません。</div>

             <div className='grid grid-cols-1 3sm:grid-cols-3 2sm:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 w-full mt-5'>
             <CalendarNoButton/>
             <CalendarNoButton/>
             <CalendarWithButton setcancelConfirm={setcancelConfirm}/>
             <CalendarWithButton setcancelConfirm={setcancelConfirm}/>
             <CalendarWithButton setcancelConfirm={setcancelConfirm}/>
             <CalendarNoButton/>


 
             </div>


            </div>
          }
      
      </div>

      :

      <div className='p-5'>
        <button onClick={()=> {setcancelConfirm(false)}} className='flex items-center text-[#2F54EB] gap-2 flex-row-reverse mb-6'>戻る<svg width="10" height="15" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8987 1.98424V0.927406C6.8987 0.835805 6.79343 0.785219 6.72233 0.841273L0.559053 5.65514C0.506687 5.69586 0.464315 5.74801 0.435168 5.8076C0.406021 5.86719 0.390869 5.93265 0.390869 5.99899C0.390869 6.06532 0.406021 6.13079 0.435168 6.19038C0.464315 6.24997 0.506687 6.30211 0.559053 6.34284L6.72233 11.1567C6.7948 11.2128 6.8987 11.1622 6.8987 11.0706V10.0137C6.8987 9.94674 6.86726 9.88248 6.8153 9.84147L1.89343 5.99967L6.8153 2.15651C6.86726 2.11549 6.8987 2.05123 6.8987 1.98424V1.98424Z" fill="#2F54EB"/></svg></button>
      <div className='bg-white p-5'>
      <div className='w-full text-[#434343] border-b border-[#F0F0F0] pb-4 mb-6'>予約のキャンセル</div>
              <div className='text-[#434343] mt-6'>下記のご予約をキャンセルしてもよろしいですか？</div> 

              <div className='mt-10'>
              <div className='text-[#8C8C8C] text-sm mb-1'>日時</div>
              <div className="flex items-center gap-5 sm:gap-10">
              <div className='text-[#141414] font-bold text-[24px]'>12月24日 (土)　18:00 - 19:30</div>
              </div>
              </div>

              <div className='text-[#F5222D] mt-5'>当日中のキャンセルは一回分の予約を消費されます。</div>

              <div className="flex items-center flex-wrap gap-3 mt-6">
                <button onClick={()=> {setcancelConfirm(false)}} className='text-[#2F54EB] px-5 py-1.5 border-2 border-[#2F54EB]'>いいえ</button>
                <button className='text-white px-5 py-1.5 border-2 border-[#2F54EB] bg-[#2F54EB]'>予約をキャンセル</button>
              </div>

      </div>
      </div>
      }
    </>
  )
}

export default Dashboard