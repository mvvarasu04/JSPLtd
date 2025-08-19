import React from 'react'

const contact = () => {
  return (
    <>
    <div>
        <h2 className='text-3xl font-bold text-blue-700'>Contact us</h2>
        <p>
          If you have any questions or need further information about our courses, 
          
        </p>
        <div>
          please feel free to reach out to us.
         </div>
        <div>
           <div className='bg-gradient-to-tl from-blue-300 to-purple-300 p-4 rounded-lg shadow-md mt-4 w-130 md:w-150 sm:w-auto '>
          <form action="#">
            <h2>Fill out the form to contact from our Team!</h2>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required className='border p-2 rounded flex' />
            </div>
            <div>
              <label htmlFor='phone'>Phone </label>
              <input type="tel" id="phone" name="phone" required className='border p-2 rounded flex' />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type="email" id="email" name="email" required className='border p-2 rounded flex ' />
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea id="message" name="message" required className='border p-2 rounded flex ' rows="4"></textarea> 
            </div>
            <button type="submit" className='bg-blue-500 text-white p-2 rounded mt-2'>Submit</button>
          </form>

         </div>
        </div>
    </div>
    </>
  )
}

export default contact