import {useState} from 'react'
import Header from '../components/Header'

const Dashboard = () => {
   const [noBooking, setnoBooking] = useState(true);

  return (
    <>
      <Header noBooking={noBooking} type="dashboard"/>
      <div className='p-5'>
      {
        noBooking === true
        ?
        <div className='bg-white p-5'>

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