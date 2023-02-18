import {useState} from 'react'
import {Link} from 'react-router-dom'
import Login from '../components/Login';
import RegisterComp from '../components/Register';

const Register = () => {

    const [login, setlogin] = useState(true);
    const [userRegister, setuserRegister] = useState(false);

  return (
    <>
      <div className="relative min-h-screen p-5">
      
        <div className='max-w-[300px] mx-auto mt-10 mb-24'>
        {
          userRegister === false ?
          <div>
        <div className='mx-auto w-full flex items-center justify-center'><img src="/images/logo.svg" alt="logo" /></div>

<div className="flex gap-5 mt-10">
   <button onClick={()=> {setlogin(true)}} className={`pb-2 ${login === true ? "text-[#2F54EB] border-b-2 border-[#2F54EB]" : "text-[#141414]"}`}>ログイン</button>
   <button onClick={()=> {setlogin(false)}} className={`pb-2 ${login === false ? "text-[#2F54EB] border-b-2 border-[#2F54EB]" : "text-[#141414]"}`}>会員登録</button>
</div>
        </div>
        :
        <div className="mt-5 flex-col mx-auto">
 
        </div>
        }
        {
            login === true ?
            <Login/>
            :
            <RegisterComp userRegister={userRegister} setuserRegister={setuserRegister}/>
        }



        </div>


        
      <div className="absolute bottom-3 left-0 w-full flex items-center justify-center flex-col gap-2 px-5">
        <div className="flex gap-6">
            <Link to="/" className='text-[#2F54EB]'>ホームページ</Link>
            <Link to="/" className='text-[#2F54EB]'>お問い合せ</Link>
        </div>

        <div className='text-[#434343]'>Copyright (C) DTS KICKBOXING GYM 2022 All Rights Reserved</div>
      </div>


      </div>

      
    </>
  )
}

export default Register