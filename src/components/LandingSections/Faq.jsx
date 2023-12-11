import SubTitle from "../UI/Titles/SubTitle";
import Paragraph from "../UI/Titles/Paragraph";
import Accordion from "../UI/Accordion/Accordion";

const Faq = () => {
  return (
    <section className="flex flex-col lg:mt-[17rem] mt-[10rem] justify-center items-center text-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <SubTitle title="FAQs" className="text-3xl max-w-[524px] font-semibold text-[#222222] leading-10"/>
        <Paragraph
          title="For more information, check out our Help Center."
          className="font-normal tracking-[0.02rem] leading-6"
        />
        <div className="mt-8">
            <Accordion />
        </div>
      </div>
    </section>
  );
};

export default Faq;
