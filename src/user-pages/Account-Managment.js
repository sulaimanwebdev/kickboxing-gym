import {useState} from 'react'
import Header from '../user-components/Header'

const AccountManagment = () => {
    const [membership, setmembership] = useState(false)
    const [tab, settab] = useState(1)
    const [addcoupon, setaddcoupon] = useState(true)
    const [showModal, setshowModal] = useState(false)

  return (
    <>
      <Header type="account-managment"/>
        {
            membership === false ?
            <>
     <div className='bg-white p-5 pb-0'>
         <div className='text-[30px] font-bold'>アカウント管理</div>
         <div className="flex gap-7 mt-6 whitespace-nowrap  overflow-x-auto">
            <button onClick={()=> {settab(1)}} className={`pb-2 ${tab === 1 ? "text-[#2F54EB] border-b-2 border-[#2F54EB]" : "text-[#434343]"}`}>ご契約内容</button>
            <button onClick={()=> {settab(2)}} className={`pb-2 ${tab === 2 ? "text-[#2F54EB] border-b-2 border-[#2F54EB]" : "text-[#434343]"}`}>メールアドレスの変更</button>
            <button onClick={()=> {settab(3)}} className={`pb-2 ${tab === 3 ? "text-[#2F54EB] border-b-2 border-[#2F54EB]" : "text-[#434343]"}`}>パスワードの変更</button>
         </div>
      </div>


      <div className="p-5">
          <div className="bg-white p-5">
          {
            tab === 1
            ?
            <>
          <div className="w-full border-b border-[#F0F0F0] pb-4 mb-6">
          <div className='text-[#434343] text-[20px] mb-2.5'>田中太郎さん　のご契約内容</div>
          <div className='text-[#8C8C8C]'>更新日: 2022/12/22</div>
          </div>

          <div className='text-[#8C8C8C] mb-1'>会員タイプ</div>
          <div className='text-[#141414] text-[22px] font-bold'>週三会員</div>

          <div className="flex gap-12 mt-6 mb-7">
            <div>
            <div className='text-[#8C8C8C] mb-1'>今月の残りの予約可能回数</div>
            <div className='text-[#141414] text-[22px] font-bold'>2回</div>
            </div>

            <div>
            <div className='text-[#8C8C8C] mb-1'>回数券</div>
            <div className='text-[#141414] text-[22px] font-bold'>0回</div>
            </div>
          </div>
          <button onClick={()=> {setmembership(true)}} className="px-7 bg-white py-2.5 border-2 border-[#2F54EB] text-[#2F54EB] rounded-[4px]">変更を申請</button>
          </>
          :
          tab === 2
          ?
          <>
           <div className="w-full border-b border-[#F0F0F0] pb-4 mb-6">
          <div className='text-[#434343] text-[20px] mb-2.5'>メールアドレスの変更</div>
          </div>

          <div className='text-[#434343] text-[20px] mb-2.5'>新メールアドレスに確認用のメールを送信いたします。</div>

          <div className='mt-10'>
                <div className='text-[#434343] mb-2'>現在のメールアドレス</div>
                <div className="px-2 py-2 bg-[#D9D9D9] text-[#8C8C8C] max-w-[300px]">taro.tanaka@abc.com</div>
          </div>

          <div className='mt-6'>
                <div className='text-[#434343] mb-2'>新メールアドレス</div>
                <input type="text" placeholder='新メールアドレス' className='max-w-[300px] w-full border border-[#ADC6FF] bg-white placeholder-[#D9D9D9] text-[#141414] rounded-[2px] px-2 py-2 outline-none' />
          </div>

          <div className='mt-6'>
                <div className='text-[#434343] mb-2'>新メールアドレス</div>
                <input type="text" placeholder='新メールアドレス' className='max-w-[300px] w-full border border-[#ADC6FF] bg-white placeholder-[#D9D9D9] text-[#141414] rounded-[2px] px-2 py-2 outline-none' />
          </div>

          <div className="flex items-start 3sm:items-center flex-col 3sm:flex-row gap-6 mt-12">
            <button className='bg-[#D9D9D9] text-[#8C8C8C] px-6 py-2 rounded-[4px]'>変更を保存</button>
            <button className='text-[#2F54EB]'>キャンセル</button>
          </div>
          </>
          :
          tab === 3
          ?
          <>
          <div className="w-full border-b border-[#F0F0F0] pb-4 mb-6">
          <div className='text-[#434343] text-[20px] mb-2.5'>パスワードの変更</div>
          </div>

          <div className='mt-6'>
                <div className='text-[#434343] mb-2'>現在のパスワード</div>
                <input type="text" placeholder='メールアドレス' className='max-w-[300px] w-full border border-[#ADC6FF] bg-white placeholder-[#D9D9D9] text-[#141414] rounded-[2px] px-2 py-2 outline-none' />
          </div>

          <div className='mt-6'>
                <div className='text-[#434343] mb-2'>新パスワード</div>
                <input type="text" placeholder='新パスワード' className='max-w-[300px] w-full border border-[#ADC6FF] bg-white placeholder-[#D9D9D9] text-[#141414] rounded-[2px] px-2 py-2 outline-none' />
          </div>

          <div className='mt-6'>
                <div className='text-[#434343] mb-2'>新パスワード</div>
                <input type="text" placeholder='新パスワード' className='max-w-[300px] w-full border border-[#ADC6FF] bg-white placeholder-[#D9D9D9] text-[#141414] rounded-[2px] px-2 py-2 outline-none' />
          </div>


          <div className="flex items-start 3sm:items-center flex-col 3sm:flex-row gap-6 mt-12">
            <button className='bg-[#D9D9D9] text-[#8C8C8C] px-6 py-2 rounded-[4px]'>変更を保存</button>
            <button className='text-[#2F54EB]'>キャンセル</button>
          </div>
          </>
          :
          null
          }
          
          </div>
        </div>

            </>
      :
      <>
      <div className="p-5">
      <button onClick={()=> {setmembership(false)}} className='flex items-center text-[#2F54EB] gap-2 flex-row-reverse mb-6'>戻る<svg width="10" height="15" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8987 1.98424V0.927406C6.8987 0.835805 6.79343 0.785219 6.72233 0.841273L0.559053 5.65514C0.506687 5.69586 0.464315 5.74801 0.435168 5.8076C0.406021 5.86719 0.390869 5.93265 0.390869 5.99899C0.390869 6.06532 0.406021 6.13079 0.435168 6.19038C0.464315 6.24997 0.506687 6.30211 0.559053 6.34284L6.72233 11.1567C6.7948 11.2128 6.8987 11.1622 6.8987 11.0706V10.0137C6.8987 9.94674 6.86726 9.88248 6.8153 9.84147L1.89343 5.99967L6.8153 2.15651C6.86726 2.11549 6.8987 2.05123 6.8987 1.98424V1.98424Z" fill="#2F54EB"/></svg></button>
      <div className='bg-white p-5'>
      <div className="w-full border-b border-[#F0F0F0] pb-4 mb-6">
          <div className='text-[#434343] text-[20px] mb-2.5'>ご契約内容変更の申請</div>
          </div>

          <div className='text-[#434343] text-[20px] mb-2.5'>ご契約内容の変更や回数券の追加を申請できます。ジムでお支払いを確認、許可される次第、ご契約内容に反映されます。</div>


          <div className='mt-6'>
            <div className='text-[#434343] mb-2'>会員タイプ</div>
            <div className="max-w-[300px] flex items-center gap-3 w-full border border-[#ADC6FF] bg-white text-[#141414] rounded-[2px] px-2 ">
             <input type="text" placeholder='週三会員' className='w-full h-full py-2 placeholder-[#D9D9D9] text-[#141414] outline-none' />
             <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8126 0H10.6407C10.561 0 10.486 0.0390626 10.4391 0.103125L6.00008 6.22188L1.56101 0.103125C1.51414 0.0390626 1.43914 0 1.35945 0H0.187576C0.0860133 0 0.0266383 0.115625 0.0860133 0.198438L5.59539 7.79375C5.79539 8.06875 6.20476 8.06875 6.4032 7.79375L11.9126 0.198438C11.9735 0.115625 11.9141 0 11.8126 0Z" fill="#2F54EB"/></svg></button>
            </div>
          </div>

        

          {
            addcoupon === true
            ?
            <button onClick={()=> {setaddcoupon(false)}} className="flex items-center flex-row-reverse gap-2 text-[#2F54EB] mt-6">
            回数券を追加
            <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" fill="white"/><path d="M12.2344 8.4375H9.5625V5.76562C9.5625 5.68828 9.49922 5.625 9.42188 5.625H8.57812C8.50078 5.625 8.4375 5.68828 8.4375 5.76562V8.4375H5.76562C5.68828 8.4375 5.625 8.50078 5.625 8.57812V9.42188C5.625 9.49922 5.68828 9.5625 5.76562 9.5625H8.4375V12.2344C8.4375 12.3117 8.50078 12.375 8.57812 12.375H9.42188C9.49922 12.375 9.5625 12.3117 9.5625 12.2344V9.5625H12.2344C12.3117 9.5625 12.375 9.49922 12.375 9.42188V8.57812C12.375 8.50078 12.3117 8.4375 12.2344 8.4375Z" fill="#2F54EB"/><path d="M9 1.125C4.65117 1.125 1.125 4.65117 1.125 9C1.125 13.3488 4.65117 16.875 9 16.875C13.3488 16.875 16.875 13.3488 16.875 9C16.875 4.65117 13.3488 1.125 9 1.125ZM9 15.5391C5.38945 15.5391 2.46094 12.6105 2.46094 9C2.46094 5.38945 5.38945 2.46094 9 2.46094C12.6105 2.46094 15.5391 5.38945 15.5391 9C15.5391 12.6105 12.6105 15.5391 9 15.5391Z" fill="#2F54EB"/></svg>
            </button>
          :
          <button onClick={()=> {setaddcoupon(true)}} className="flex items-center flex-row-reverse gap-2 text-[#F5222D] mt-6">
          回数券を削除
          <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" fill="white"/><path d="M12.2344 8.4375H5.76562C5.68828 8.4375 5.625 8.50078 5.625 8.57812V9.42188C5.625 9.49922 5.68828 9.5625 5.76562 9.5625H12.2344C12.3117 9.5625 12.375 9.49922 12.375 9.42188V8.57812C12.375 8.50078 12.3117 8.4375 12.2344 8.4375Z" fill="#F5222D"/><path d="M9 1.125C4.65117 1.125 1.125 4.65117 1.125 9C1.125 13.3488 4.65117 16.875 9 16.875C13.3488 16.875 16.875 13.3488 16.875 9C16.875 4.65117 13.3488 1.125 9 1.125ZM9 15.5391C5.38945 15.5391 2.46094 12.6105 2.46094 9C2.46094 5.38945 5.38945 2.46094 9 2.46094C12.6105 2.46094 15.5391 5.38945 15.5391 9C15.5391 12.6105 12.6105 15.5391 9 15.5391Z" fill="#F5222D"/></svg>
          </button>
          }

          {
            addcoupon === false
            ?
            <div className="p-5 bg-[#F0F5FF] w-fit mt-6">
               <div className='text-[#434343] mb-2'>枚数</div>
               <input type="number" placeholder='1' className='outline-[#ADC6FF] bg-white px-2 py-1.5 max-w-[100px]' />
            </div>
            :
            null
          }

          <div className="flex items-start 3sm:items-center flex-col 3sm:flex-row gap-6 mt-12">
            <button className='bg-[#D9D9D9] text-[#8C8C8C] px-6 py-2 rounded-[4px]'>申請を送信</button>
            <button onClick={()=> {setshowModal(true)}} className='text-[#2F54EB]'>キャンセル</button>
          </div>


      </div>
      </div>
      </>
        }


  <div onClick={()=> {setshowModal(false)}} className={`fixed top-0 left-0 w-full min-h-screen max-h-screen overflow-y-auto flex items-center justify-center p-3 bg-black bg-opacity-50 z-50 transition ${showModal === true ? "visible opacity-100" : "invisible opacity-0"}`}></div>
          <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 max-w-[400px] w-[calc(100%-40px)] rounded-[4px] z-[100] transition ${showModal === true ? "visible opacity-100" : "invisible opacity-0"}`}>
            <div><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_170_12581)"><path d="M11 0C4.92545 0 0 4.92545 0 11C0 17.0746 4.92545 22 11 22C17.0746 22 22 17.0746 22 11C22 4.92545 17.0746 0 11 0ZM11 20.1339C5.9567 20.1339 1.86607 16.0433 1.86607 11C1.86607 5.9567 5.9567 1.86607 11 1.86607C16.0433 1.86607 20.1339 5.9567 20.1339 11C20.1339 16.0433 16.0433 20.1339 11 20.1339Z" fill="#FAAD14"/><path d="M9.82104 15.3214C9.82104 15.634 9.94522 15.9338 10.1662 16.1548C10.3873 16.3758 10.687 16.5 10.9996 16.5C11.3122 16.5 11.612 16.3758 11.833 16.1548C12.054 15.9338 12.1782 15.634 12.1782 15.3214C12.1782 15.0089 12.054 14.7091 11.833 14.4881C11.612 14.267 11.3122 14.1429 10.9996 14.1429C10.687 14.1429 10.3873 14.267 10.1662 14.4881C9.94522 14.7091 9.82104 15.0089 9.82104 15.3214ZM10.4103 12.5714H11.5889C11.6969 12.5714 11.7853 12.483 11.7853 12.375V5.69643C11.7853 5.58839 11.6969 5.5 11.5889 5.5H10.4103C10.3023 5.5 10.2139 5.58839 10.2139 5.69643V12.375C10.2139 12.483 10.3023 12.5714 10.4103 12.5714Z" fill="#FAAD14"/></g><defs><clipPath id="clip0_170_12581"><rect width="22" height="22" fill="white"/></clipPath></defs></svg></div>
            <div className='text-[#434343] font-[500] mb-2.5 mt-4'>内容に変更があります</div>
            <div className='text-[#141414]'>契約情報を変更しましたが、申請せずに前の画面へ戻りますか？</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3 mt-6 max-w-[300px] mx-auto">
              <button onClick={()=> {setshowModal(false)}} className='text-[#2F54EB] border-2 border-[#2F54EB] px-5 py-2 rounded-[4px]'>編集を続ける</button>
              <button onClick={()=> {setshowModal(false)}} className='text-[white] bg-[#2F54EB] border-2 border-[#2F54EB] px-5 py-2 rounded-[4px]'>前へ戻る</button>
            </div>
          </div>
        
    </>
  )
}

export default AccountManagment