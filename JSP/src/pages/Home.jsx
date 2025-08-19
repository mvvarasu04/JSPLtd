import React from 'react'
import home1 from '../assets/images/home1.jpg'

const home = () => {
  return (
  
    <>
  
    <div className='bg-gradient-to-r from-purple-500 to-blue-300 text-red-900 '>
      <div className='text-xl font-bold mb-4 text-center animate-pulse  '>Jambavan Software Solutions Pvt Ltd</div>
    </div>
    <div className='flex flex-col md:flex-row items-start gap-4'> 
    <div className=' flex flex-col gap-4 md:w-1/2 w-full'>
     <div className='text-2xl font-extrabold text-cyan-700 text-center mt-4 '>
        <p>LARGEST SOFTWARE </p>
        <div>
          TRAINING AND PLACEMENT CENTER
        </div>
      </div>
      <div>
      <p> The premier software training institution, dedicated to bridging the gap between
         industry demands and academic curricula. With centers, 
        JSP provides a platform for young minds to cultivate successful careers.
        Our mission is to empower students with the skills and knowledge needed to excel in the software industry.
        JSP offers a comprehensive range of courses, from foundational programming to advanced software engineering practices.
        Our expert instructors, industry partnerships, and hands-on training ensure that students are well-prepared for the challenges of the tech world.
        Join us at JSP and embark on a journey towards a successful career in software development and technology.
        </p>
        </div>
        <div >
       <p>
        JSP is committed to providing a transformative learning experience that equips students with the skills and confidence to thrive in the software industry.
        Our state-of-the-art facilities, personalized mentorship, and a vibrant community of learners create an environment where innovation and creativity flourish.
        Whether you're a beginner or looking to enhance your skills, JSP is your gateway to a successful career in software development.
        Join us today and take the first step towards a brighter future in technology.  
        </p>
        </div>
        <div>
          <p>
          At JSP, we believe in the power of education to transform lives and shape the future of technology.
          Our commitment to excellence, innovation, and student success drives us to continuously evolve our programs and offerings.
          We invite you to explore our courses, engage with our community, and discover the endless possibilities that await you in the world of software development.
          Together, let's build a brighter future through education and technology.
          
          </p>
        </div>
      </div>
        
      <div className='md:w-1/2 w-full'>
        <img src={home1} alt="Homeimage" className='w-full h-auto object-cover'/>
      

    
      
       </div>
    </div>


    
      
  </>
    
  
  )
}

export default home