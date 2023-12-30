import React from 'react'
import Project from '../components/project'

const items = [
  {
  name:"Cookerytech E-Commerce Application with Offer System",
  img:"images/cookery.jpg",
},
  {
  name:"Vantageride Car Rental Application",
  img:"images/rentacar.jpg",
},
  {
  name:"Diligent E-Library Application",
  img:"images/library.jpg",
},
  {
  name:"Course Management Project",
  img:"images/course.jpg",
},
  {
  name:"Fast Food Ordering Project",
  img:"images/fastfood.jpg",
},
  {
  name:"Hospital Management Project",
  img:"images/hospital.jpg",
},
]

type Props = {}

const ProjectsPage = (props: Props) => {
  return (
  <div className="flex justify-center items-center flex-col">
    <h2 className='text-gray-500 font-bold text-3xl bg-black inline-block rounded-full p-5 m-5'>Latest Projects</h2>
    

    <div className='flex gap-10 flex-wrap justify-center  sm:w-1/3 md:w-1/2 lg:w-1/2 xl:w-1/2  '>
      {
        items.map(item=>(
          <Project key={item.name}
          name={item.name}
          backgroundImage={item.img}
        />
        ))
      }
    </div>
  </div>
  )
}

export default ProjectsPage