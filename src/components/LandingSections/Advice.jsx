
import RGB from "../../assets/rgb-bg.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import TryBtn from "../UI/Buttons/TryBtn"





const Advice =() => {


    return(
        <section className="flex flex-col mt-[17rem] justify-center items-center text-center">
        

        <div className="flex flex-col gap-5 justify-center">
      
      <SubTitle title="Start saving time today!"/>
      <Paragraph title="Join an ever-growing community, and get with Afforai started free of charge!" className=""/>
      <TryBtn label="Get Started for Free"/>
      </div>
            <div className=" z-20 my-[-200px] ">
            <img src={RGB} alt="Image of our features" className="rounded-xl"/>
           </div>

          
           
           
         
    
        </section>
    )
}

export default Advice;


