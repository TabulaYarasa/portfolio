import React from "react";
import styles from "../style";

const ProjectCard = ({ title, content, img,alt }) => {
  
  return (
    <div className="project-card-view w-[30%] msm:w-[90%] px-[25px]   py-[50px] mx-5 my-[50px] msm:m-0 msm:mb-[50px] ">
      <div className="text-white flex flex-col  items-center  justify-center  ">
        <div
          className={`flex-1 ${styles.flexCenter} sm:my-0 sm:px-3 sm:pb-5 my-10 relative`}
        >
          <img src={img} alt={alt} className="w-[100%] max-h-[300px] relative z-[5]" />
        </div>
        <div className="flex flex-col">
          <div>
            <h2 className="text-center font-semibold text-[25px] py-5">
              {title}
            </h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
