import {useState} from 'react'
import {Link} from 'react-router-dom'

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
            <div className="mt-5 mx-auto">

              <div className='mt-6'>
            <div className="flex items-center gap-3 w-full border border-[#ADC6FF] bg-white text-[#141414] rounded-[2px] px-2 ">
             <div><svg width="17" height="17" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1889 12.4937C13.8521 11.6958 13.3632 10.9711 12.7497 10.3598C12.1379 9.74679 11.4133 9.25803 10.6157 8.92053C10.6086 8.91695 10.6014 8.91517 10.5943 8.9116C11.7068 8.10803 12.43 6.7991 12.43 5.32231C12.43 2.87588 10.4479 0.893738 8.00144 0.893738C5.55501 0.893738 3.57287 2.87588 3.57287 5.32231C3.57287 6.7991 4.29608 8.10803 5.40858 8.91338C5.40144 8.91695 5.3943 8.91874 5.38715 8.92231C4.58715 9.25981 3.8693 9.74374 3.25323 10.3616C2.64021 10.9733 2.15145 11.698 1.81394 12.4955C1.48237 13.2763 1.30355 14.1135 1.28715 14.9616C1.28668 14.9807 1.29002 14.9996 1.29699 15.0174C1.30395 15.0351 1.3144 15.0513 1.32771 15.0649C1.34103 15.0786 1.35694 15.0894 1.3745 15.0968C1.39207 15.1042 1.41095 15.108 1.43001 15.108H2.50144C2.58001 15.108 2.64251 15.0455 2.6443 14.9687C2.68001 13.5902 3.23358 12.2991 4.21215 11.3205C5.22465 10.308 6.5693 9.75088 8.00144 9.75088C9.43358 9.75088 10.7782 10.308 11.7907 11.3205C12.7693 12.2991 13.3229 13.5902 13.3586 14.9687C13.3604 15.0473 13.4229 15.108 13.5014 15.108H14.5729C14.5919 15.108 14.6108 15.1042 14.6284 15.0968C14.6459 15.0894 14.6619 15.0786 14.6752 15.0649C14.6885 15.0513 14.6989 15.0351 14.7059 15.0174C14.7129 14.9996 14.7162 14.9807 14.7157 14.9616C14.6979 14.108 14.5211 13.2777 14.1889 12.4937ZM8.00144 8.39374C7.1818 8.39374 6.41037 8.0741 5.83001 7.49374C5.24965 6.91338 4.93001 6.14195 4.93001 5.32231C4.93001 4.50267 5.24965 3.73124 5.83001 3.15088C6.41037 2.57052 7.1818 2.25088 8.00144 2.25088C8.82108 2.25088 9.59251 2.57052 10.1729 3.15088C10.7532 3.73124 11.0729 4.50267 11.0729 5.32231C11.0729 6.14195 10.7532 6.91338 10.1729 7.49374C9.59251 8.0741 8.82108 8.39374 8.00144 8.39374Z" fill="#434343"/></svg></div>
             <input type="text" placeholder='メールアドレス' className='w-full h-full py-2 placeholder-[#D9D9D9] text-[#141414] outline-none' />
            </div>
            </div>


            </div>
            :

            
            <div>

{
        userRegister === true ?
        <div className="min-h-[calc(100vh-150px)] max-w-[300px] text-center flex items-center justify-center flex-col mx-auto mb-24">
          <div>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" className='mx-auto mb-5' xmlns="http://www.w3.org/2000/svg"><path d="M35 0C15.6719 0 0 15.6719 0 35C0 54.3281 15.6719 70 35 70C54.3281 70 70 54.3281 70 35C70 15.6719 54.3281 0 35 0ZM50.1172 23.5703L33.6641 46.3828C33.4341 46.7038 33.131 46.9653 32.7797 47.1457C32.4285 47.3261 32.0394 47.4203 31.6445 47.4203C31.2497 47.4203 30.8605 47.3261 30.5093 47.1457C30.1581 46.9653 29.855 46.7038 29.625 46.3828L19.8828 32.8828C19.5859 32.4688 19.8828 31.8906 20.3906 31.8906H24.0547C24.8516 31.8906 25.6094 32.2734 26.0781 32.9297L31.6406 40.6484L43.9219 23.6172C44.3906 22.9687 45.1406 22.5781 45.9453 22.5781H49.6094C50.1172 22.5781 50.4141 23.1562 50.1172 23.5703Z" fill="#52C41A"/></svg>
            <div className='text-[#141414]'>会員登録が完了いたしました</div>
          </div>

          <button className="w-full max-w-[150px] flex items-center justify-center mx-auto bg-white py-2.5 mt-16 border border-[#2F54EB] text-[#2F54EB] rounded-[2px]">マイページへ</button>

        </div>
        :

              <div className="mt-5 mx-auto">
        <div>
           <div className="">
            <div>
                <div className='text-[#434343] mb-2'>お名前（漢字）</div>
                <input type="text" placeholder='お名前' className='w-full border border-[#ADC6FF] bg-white placeholder-[#D9D9D9] text-[#141414] rounded-[2px] px-2 py-2 outline-none' />
            </div>

            <div className='mt-6'>
                <div className='text-[#434343] mb-2'>お名前（ひらがな）</div>
                <input type="text" placeholder='おなまえ' className='w-full border border-[#ADC6FF] bg-white placeholder-[#D9D9D9] text-[#141414] rounded-[2px] px-2 py-2 outline-none' />
            </div>


            <div className='mt-6'>
                <div className='text-[#434343] mb-2'>登録用のメールアドレス</div>
                <input type="text" placeholder='メールアドレス' className='w-full border border-[#ADC6FF] bg-white placeholder-[#D9D9D9] text-[#141414] rounded-[2px] px-2 py-2 outline-none' />
            </div>


            <div className='mt-6'>
            <div className='text-[#434343] mb-2'>パスワード</div>
            <div className="flex items-center gap-3 w-full border border-[#ADC6FF] bg-white text-[#141414] rounded-[2px] px-2 ">
             <input type="password" placeholder='パスワード' className='w-full h-full py-2 placeholder-[#D9D9D9] text-[#141414] outline-none' />
             <button><svg width="18" height="14" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6822 5.5404C13.9894 1.97433 11.4305 0.179688 8.0001 0.179688C4.56796 0.179688 2.01082 1.97433 0.31796 5.54219C0.250059 5.68597 0.214844 5.843 0.214844 6.00201C0.214844 6.16102 0.250059 6.31805 0.31796 6.46183C2.01082 10.0279 4.56975 11.8225 8.0001 11.8225C11.4322 11.8225 13.9894 10.0279 15.6822 6.46005C15.8197 6.17076 15.8197 5.83505 15.6822 5.5404ZM8.0001 10.5368C5.11975 10.5368 3.01082 9.07612 1.52332 6.00112C3.01082 2.92612 5.11975 1.4654 8.0001 1.4654C10.8805 1.4654 12.9894 2.92612 14.4769 6.00112C12.9912 9.07612 10.8822 10.5368 8.0001 10.5368ZM7.92867 2.85826C6.19296 2.85826 4.78582 4.2654 4.78582 6.00112C4.78582 7.73683 6.19296 9.14397 7.92867 9.14397C9.66439 9.14397 11.0715 7.73683 11.0715 6.00112C11.0715 4.2654 9.66439 2.85826 7.92867 2.85826ZM7.92867 8.00112C6.82332 8.00112 5.92867 7.10647 5.92867 6.00112C5.92867 4.89576 6.82332 4.00112 7.92867 4.00112C9.03403 4.00112 9.92868 4.89576 9.92868 6.00112C9.92868 7.10647 9.03403 8.00112 7.92867 8.00112Z" fill="#2F54EB"/></svg></button>
            </div>
            </div>


            <div className='mt-6'>
            <div className='text-[#434343] mb-2'>会員タイプ</div>
            <div className="flex items-center gap-3 w-full border border-[#ADC6FF] bg-white text-[#141414] rounded-[2px] px-2 ">
             <input type="password" placeholder='会員種類を選択してください' className='w-full h-full py-2 placeholder-[#D9D9D9] text-[#141414] outline-none' />
             <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8126 0H10.6407C10.561 0 10.486 0.0390626 10.4391 0.103125L6.00008 6.22188L1.56101 0.103125C1.51414 0.0390626 1.43914 0 1.35945 0H0.187576C0.0860133 0 0.0266383 0.115625 0.0860133 0.198438L5.59539 7.79375C5.79539 8.06875 6.20476 8.06875 6.4032 7.79375L11.9126 0.198438C11.9735 0.115625 11.9141 0 11.8126 0Z" fill="#2F54EB"/></svg></button>
            </div>
            </div>


            <button onClick={()=> {setuserRegister(true)}} className="w-full max-w-[150px] flex items-center justify-center mx-auto bg-[#D9D9D9] py-2.5 mt-7 text-[#8C8C8C] rounded-[2px]">送信</button>

           </div>
        </div>
      </div>

      }
            </div>
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