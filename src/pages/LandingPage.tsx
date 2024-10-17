import { FunctionComponent } from "react";
import Footer from "../components/Footer";
import Section4 from "../components/Section4";
import Section3 from "../components/Section3";
import FrameComponent from "../components/FrameComponent";
import Section2 from "../components/Section2";
import Section1 from "../components/Section1";
import Section from "../components/Section";
import Header from "../components/Header";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#fbf7f2_83.53%,_#fff)] h-[8363px] overflow-hidden text-left text-xl font-inter">
      <Footer />
      <img
        className="absolute top-[7267px] left-[calc(50%_-_720px)] w-[1440px] h-[469.9px]"
        alt=""
        src="/sectionmaskgroup.svg"
      />
      <Section4 />
      <Section3 />
      <FrameComponent />
      <Section2 />
      <Section1 />
      <Section />
      <Header />
      <div className="absolute top-[1155px] left-[calc(50%_-_646px)] rounded-[52px] [background:linear-gradient(100.01deg,_#fff_50.5%,_#edfff5_68.33%,_#e9fdff_93.47%)] w-[1291px] h-[530px]">
        <div className="absolute top-[74px] left-[99px] tracking-[-0.86px] leading-[37px] text-transparent !bg-clip-text [background:linear-gradient(102.41deg,_#c25438,_#ff623c_55.61%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[601px] h-[58px]">{`We understand the specific challenges construction companies face when managing multiple projects. `}</div>
        <div className="absolute top-[162px] left-[99px] text-[41px] tracking-[-0.86px] leading-[53.8px] font-plus-jakarta-sans text-transparent !bg-clip-text [background:linear-gradient(107.07deg,_#143637_8.63%,_#399a9d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[645px] h-[310px]">
          Our lead management platform is designed with the unique needs of the
          construction industry in mind, ensuring your team can track client
          leads from inquiry to completion seamlessly.
        </div>
        <div className="absolute top-[calc(50%_-_223px)] left-[899px] w-[316.6px] flex flex-col items-center justify-start p-2.5 box-border gap-[19px]">
          <img
            className="self-stretch relative rounded-[20.2px] max-w-full overflow-hidden h-[119.2px] shrink-0 object-cover"
            alt=""
            src="/1000006924-2@2x.png"
          />
          <img
            className="w-[310px] relative rounded-[22px] h-[287.6px] object-cover"
            alt=""
            src="/1000006910-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
