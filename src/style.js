const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-primary xs:leading-[76.8px] leading-[66.8px] w-full",
    heading3: "font-poppins font-semibold xs:text-[20px] text-[28px] text-primary xs:leading-[30px] leading-[50px] w-full",
    paragraph: "font-poppins font-normal  text-[18px] leading-[30.8px] xs:text-[25px] xs:leading-[30px]",
  
    flexCenter: "flex justify-center items-center",
    
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    section2: `flex lg:flex-row flex-col-reverse ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,

    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionNonImg: `flex-1 flex ${styles.flexStart} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  //  sectionInfo1: ` flex flex-1 ${styles.flexStart} flex-col min-w-[550px]`,
    sectionInfo1: `flex flex-1 xs:flex-col
    xs:${styles.flexCenter} m-5 p-[20px] border-[1px] border-solid border-[#ccc] rounded-[5px] shadow-custom lg:ml-5 mb-5 `,

    sectionInfo2: `flex flex-col flex-1 m-5 p-[20px] border-[1px] border-solid border-[#ccc] rounded-[5px] shadow-custom lg:ml-5 mb-5  `,
    sectionInfo3: `flex flex-1 smv:flex-col
    xs:${styles.flexCenter} m-5 p-[20px] border-[1px] border-solid border-[#ccc] rounded-[5px] shadow-custom lg:ml-5 mb-5 `,

    button:`bg-[#333] text-white px-10 py-2 ml-auto`,

    fromLeft: `relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[5px] after:bg-[#c95bf5] after:w-full after:scale-x-0 after:-bottom-1 after:rounded-full
     after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`,

     homeAboutSocialLinks: `justify-center pt-[15px] relative `,

     homeSocialIcons: `relative w-[40px] h-[40px] text-center font-[1.2rem] bg-[rgba(255, 255, 255, 0.972)] rounded-full transition  `
    
  };
  
  export default styles;