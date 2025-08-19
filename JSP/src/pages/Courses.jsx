import React from 'react'
import { courses } from '../constants'


const Courses = () => {
  return (
   <>
   <section className='max-container'>
      <h1 className='head-text'>
        Courses{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Offered
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Our Software Development training is designed to bridge the gap between academic knowledge and industry expectations.
         Whether you're a beginner or looking to sharpen your skills, this program offers a structured pathway to become a confident developer.
      </p>

        <div className='flex flex-wrap my-20 gap-16'>
        {courses.map((course) => (
          <div className='lg:w-[400px] w-full' key={course.title}>
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


