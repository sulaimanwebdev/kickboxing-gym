import {useState} from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    const [category, setcategory] = useState("dashboard");

  return (
    <>
    <div className="flex items-center justify-between gap-5 w-full bg-[#141414] px-5 h-[70px]">
      <div className="flex items-center gap-20 h-full">
        <Link to="/"><img src="/images/logo-white.svg" alt="logo" /></Link>
        {
           props.noBooking === false ?
           <div className="flex items-center gap-3 h-full">
           <Link to="/dashboard" className={`flex items-center justify-center px-5 h-full text-white ${props.type === "dashboard" ? "bg-[#434343]" : "bg-transparent"}`}>予約状況</Link>
           <Link to="/calendar" className={`flex items-center justify-center px-5 h-full text-white ${props.type === "calendar" ? "bg-[#434343]" : "bg-transparent"}`}>カレンダー予約</Link>
           <Link to="/account-managment" className={`flex items-center justify-center px-5 h-full text-white ${props.type === "account-managment" ? "bg-[#434343]" : "bg-transparent"}`}>アカウント管理</Link>
           </div>
        :
        null
        }
      </div>

      <button className="flex items-center gap-2 text-white h-full">ログアウト <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2572 11.8661H13.0215C12.9371 11.8661 12.858 11.903 12.8053 11.9681C12.6822 12.1175 12.5504 12.2616 12.4115 12.3987C11.8436 12.9673 11.1708 13.4203 10.4305 13.7329C9.66346 14.0569 8.83907 14.2231 8.00645 14.2216C7.16445 14.2216 6.34883 14.0564 5.58242 13.7329C4.84208 13.4203 4.16933 12.9673 3.60137 12.3987C3.03239 11.8321 2.5787 11.1605 2.26543 10.4212C1.94024 9.65479 1.77676 8.84092 1.77676 7.99893C1.77676 7.15694 1.94199 6.34307 2.26543 5.57666C2.57832 4.83662 3.02832 4.17041 3.60137 3.59912C4.17441 3.02783 4.84063 2.57783 5.58242 2.26494C6.34883 1.94151 7.16445 1.77627 8.00645 1.77627C8.84844 1.77627 9.66406 1.93975 10.4305 2.26494C11.1723 2.57783 11.8385 3.02783 12.4115 3.59912C12.5504 3.73799 12.6805 3.88213 12.8053 4.02979C12.858 4.09483 12.9389 4.13174 13.0215 4.13174H14.2572C14.368 4.13174 14.4365 4.00869 14.375 3.91553C13.0268 1.82022 10.6678 0.433303 7.98711 0.440334C3.77539 0.450881 0.398633 3.86983 0.440821 8.07627C0.483008 12.2159 3.85449 15.5575 8.00645 15.5575C10.6801 15.5575 13.0285 14.1724 14.375 12.0823C14.4348 11.9892 14.368 11.8661 14.2572 11.8661ZM15.8199 7.88819L13.3256 5.91944C13.2324 5.84561 13.0971 5.9124 13.0971 6.03018V7.36612H7.57754C7.5002 7.36612 7.43692 7.4294 7.43692 7.50674V8.49112C7.43692 8.56846 7.5002 8.63174 7.57754 8.63174H13.0971V9.96768C13.0971 10.0855 13.2342 10.1522 13.3256 10.0784L15.8199 8.10967C15.8367 8.09652 15.8503 8.07971 15.8597 8.06052C15.869 8.04133 15.8739 8.02027 15.8739 7.99893C15.8739 7.97758 15.869 7.95652 15.8597 7.93733C15.8503 7.91815 15.8367 7.90134 15.8199 7.88819V7.88819Z" fill="white"/></svg></button>
    </div>
    </>
  )
}

export default Header