'use client'
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
  id: number,
  title: string,
  description: string,
  duration: number,
  instructor: string
  isFeatured: boolean,
}

function FeaturedCourses() {
 const Featuredcourses =  courseData.courses.filter(course => course.isFeatured)
  return (
    <div className='py-12 '>
      <div className='text-center'>
        <h2 className='text-2xl text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
        <p className='mt-4 text-base text-white max-w-md mx-auto'>Discover our wide range of courses tailored to your unique needs and goals.</p>
         </div>
         <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {Featuredcourses.map(courses =>(
              <div key={courses.id} className="flex justify-center">
              <BackgroundGradient
        className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
        >
          {/* Course Image! */}
             {/* <Image
          src={`/jordans.webp`}
          alt="jordans"
          height="300"
          width="300"
          className="object-contain"
        /> */}
       {/* Course Title! */}
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        {courses.title}
      </p>
      {/* Course Description! */}
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
       {courses.description}
        </p>
        <div>
          {/* Course Duration & Instructor! */}
          <span className="rounded-full justify justify-between pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-sm font-bold dark:bg-zinc-800">Duration: {courses.duration} <span>
          Instructor :{courses.instructor} </span></span>
      </div>
        <button className="rounded-full pl-4 pr-1 py-1 justify-between text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
         
        </button>
       <div className="mt-4">
         <Link href={`/courses/$ {course.slug}`}>
        Learn More
        
        </Link>
       </div>
        

              </BackgroundGradient>
                </div>
            ))}

          </div>
          </div>
         <div className='mt-20 text-center'>
         <Link href={'/courses'}
           className='inline-block text-white px-8 py-3 bg-teal-600 rounded-md hover:bg-teal-700'>VIEW ALL COURSES
         </Link>
         </div>
    </div>
  )
}

export default FeaturedCourses