// This is the sections that talks about how you can increase productivity with afforia
import ProductivityImage from "../../assets/ProductivityImage.png";
import ProductivityImageMobile from "../../assets/productPix.png";
import Paragraph from "../UI/Titles/Paragraph";
import HeaderCard from "../UI/Cards/HeaderCard";
import MainTitle from "../UI/Titles/MainTitle";

const Productivity = () => {
  return (
    <section className="flex flex-col mt-[10rem] lg:mt-[19rem] md:mt[15rem] md:justify-center md:items-center md:text-center gap-6 flex-wrap justify-start items-start text-start px-6">
      <div className="max-w-[556px]">
        <HeaderCard
          label="10x your productivity"
          className="inline-block max-w-[200px]"
        />
        <div className="pt-6">
          <MainTitle
            title="Save yourself from stress & streamline your workflow"
            className=""
          />
           <div className="pt-6">
          <Paragraph
            title="The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save 
            yourself 8 hours per week (plus a lot of headaches)."
            className=" font-normal"
          />
          </div>
        </div>
        <div className="mt-5 lg:mt-16 flex flex-col justify-center items-center ">
          <img
            src={ProductivityImage}
            alt="Image showing peoductivity in afforia"
            className="hidden md:block max-w-[900px]"
            loading="lazy"
          />
          <img
            src={ProductivityImageMobile}
            alt="Image showing peoductivity in afforia"
            className="md:hidden max-w-[500px] block"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Productivity;
