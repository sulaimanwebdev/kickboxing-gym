import {useState} from 'react'
import Header from '../user-components/Header'

const AccountManagment = () => {
     const [tab, settab] = useState(1)
  return (
    <>
      <Header type="account-managment"/>
        <div className='bg-white p-5 pb-0'>
         <div className='text-[30px] font-bold'>アカウント管理</div>
         <div className="flex gap-5 mt-6">
            <button className={`${tab === 1 ? "text-[#2F54EB] border-b-2 border-[#2F54EB] pb-2" : "text-[#434343]"}`}>ご契約内容</button>
         </div>
      </div>
    </>
  )
}

export default AccountManagment