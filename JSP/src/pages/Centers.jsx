import React from 'react'

const centers = () => {
  return (
    <div className='gap-4 flex flex-col sm:flex-row md:flex-row p-4'>
      <div className='bg-gradient-to-tr from-yellow-200 to bg-red-400 rounded-3xl p-4'>
          <h2 className='text-2xl  font-extrabold text-red-900'>Head Office</h2>
        <div><span>Jambavan Software Systems Pvt Ltd </span></div>
       <div> <span></span></div>
      
       <div> <span> Hebbal</span></div>
       <div><span></span></div>
       <div><span>Karnataka</span></div>

        </div>
      <div className='bg-gradient-to-tr from-pink-300 to bg-purple-400 rounded-3xl p-4'>
        <h2  className='text-2xl font-extrabold text-red-900 text'>Branch</h2>
        <div><span>Jambavan Software Systems Pvt Ltd </span></div>
       <div> <span>No-592-D</span></div>
        <div><span>Gandhi Road(Roundana)</span></div>
       <div> <span>UCO Bank Upstairs</span></div>
       <div> <span>Krishnagiri </span></div>
        <div><span>Pincode : 635001</span></div>
        <div><span>TamilNadu</span></div>

      </div>
    </div>
  )
}

export default centers