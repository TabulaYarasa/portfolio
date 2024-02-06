import React from 'react'
import styles from "../style";
import ProjectCard from './ProjectCard';
import { projectInfo } from './constant';


const ProjectsContainer = () => {
  return (
    <section
    id="hero"
    className={`flex sm:flex-row flex-col ${styles.paddingY} pt-[144px]  `}
  >
    <div
      className={`flex-1 ${styles.flexCenter}  flex-col xl:px-0  sm:px-[50px] px-6 pt-[80px]`}
    >
      <div className="flex flex-col justify-between items-center w-full px-[12px]">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[45px] text-white ss:leading-[50px] leading-[50px]">
       
          Bazı <span className="text-secondary">Çalışmalarım</span>
        </h1>
      </div>
      <div className="flex flex-row flex-wrap pt-[50px] justify-center msm:flex-col msm:items-center">

    {projectInfo.map((card, index) => (
      
        <ProjectCard key={index}  {...card}/>
    ))}



      </div>
   
    </div>
   
  </section>
  )
}

export default ProjectsContainer