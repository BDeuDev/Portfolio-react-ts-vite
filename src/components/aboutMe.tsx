
const born =  new Date(2004, 1, 20);
const current = new Date();
const differenceInMilliseconds = current.getTime() - born.getTime();

const age = Math.floor((differenceInMilliseconds / (1000 * 60 * 60 * 24))/365.5)


function AboutMe() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-28 font-nunito bg-white bg-opacity-95 w-9/12 h-2/3 shadow-xl rounded-xl cursor-pointer">
        <h1 className="text-4xl mb-8 mt-2 font-bold text-white bg-principal bg-opacity-90 p-4 rounded-xl cursor-pointer hover:shadow-black hover:underline ">Sobre mi</h1>
        <div className="font-nunito mb-14 font-semibold text-xl ">
          
          <p className="mb-5 mr-10 ml-10"><i className="font-bold text-2xl font-nunito">I</i> am Bernabé Deusich, a passionate Fullstack developer with a notable focus on backend web development. At {age} years old, I have built a strong foundation of technical skills and possess an innate dedication to efficiently solving problems.</p>
          <p className="mb-5 mr-10 ml-10">I am further enhancing my knowledge through formal education and primarily self-directed learning. This has allowed me to acquire analytical and detail-oriented skills, crucial for developing robust and scalable solutions.</p>
          <p className="mb-5 mr-10 ml-10">I stand out for my ability to tackle challenges, always seeking solutions that combine efficiency and effectiveness. Additionally, I possess strong oral and collaborative skills that support my ability to communicate ideas effectively and collaborate within team settings. </p>     
          <p className="mb-5 mr-10 ml-10">I am excited about the opportunity to contribute my skills and commitment to challenging projects. I would love to discuss how my experience and vision can contribute to the success of your team. </p>
          
        
          
        </div>
       
      </div>
    </>
  )
}
export default AboutMe