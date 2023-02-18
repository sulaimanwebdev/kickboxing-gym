import {useState} from 'react'
import Header from '../components/Header'

const Dashboard = () => {
   const [noBooking, setnoBooking] = useState(false);

  return (
    <>
      <Header noBooking={noBooking} type="dashboard"/>
      <div className='p-5'>
      {
        noBooking === true
        ?
        <div className='bg-white p-5'>
          <div className='w-full text-[#434343] border-b border-[#F0F0F0] pb-4'>田中太郎さん　の予約状況</div>
          <div className='text-[#F5222D] mt-6'>現在仮登録なため、ご予約ができません。<br/>オーナーが許可する次第、正式に登録が完了いたします。</div>
        </div>
        :
        <div className='bg-white p-5'>

        </div>
      }
      </div>
    </>
  )
}

export default Dashboard