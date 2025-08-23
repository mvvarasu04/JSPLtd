import React from 'react'
import { courses } from '../constants'


const Courses = () => {
  return (
   <>
   <section className='max-container'>
      <div className="bg-gradient-to-br from-[#3f87a6] to-[#ebf8e1] text-white py-12 text-center shadow-lg">
  <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
      Courses{" "}
      <span className="text-[#3f87a6] drop-shadow font-semibold">
        Offered
      </span>
    </h1>
    <p className="mt-4 text-lg italic text-white">
      Our Software Development training is designed to bridge the gap between academic knowledge and industry expectations.
      Whether you're a beginner or looking to sharpen your skills, this program offers a structured pathway to become a confident developer.
    </p>
  </div>
</div>


        <div className='flex flex-wrap my-20 gap-16'>
        {courses.map((course) => (
          <div className='lg:w-[400px] w-full transform transition-transform duration-[300ms] hover:rotate-[8deg] shadow-lg rounded-xl p-6 bg-white' key={course.title}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${course.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={course.icon}
                  alt='threads'
                  className='object-contain flex justify-center '
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {course.title}
              </h4>
              <p className='mt-2 text-slate-500'>{course.points}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                
                
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      </section>
   </>
  )
}

export default Courses


