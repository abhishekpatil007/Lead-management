import { FunctionComponent } from "react";

export type Section3Type = {
  className?: string;
};

const Section3: FunctionComponent<Section3Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[5829px] left-[calc(50%_-_646px)] w-[1291px] h-[694.9px] text-center text-26xl-1 text-gray-400 font-plus-jakarta-sans ${className}`}
    >
      <div className="absolute w-[calc(100%_-_86px)] top-[0px] right-[43px] left-[43px] rounded-38xl-4 bg-white h-[694.9px]">
        <div className="absolute top-[65px] left-[calc(50%_-_325.5px)] tracking-[-0.47px] leading-[46.6px] capitalize font-semibold whitespace-pre-wrap">
          {" "}
          It's a game-changer for our team!
        </div>
        <div className="absolute top-[154.2px] left-[calc(50%_-_538px)] w-[1075.9px] h-[497.7px] text-left text-xl-2 text-gray-300">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[161.4px]">
            <div className="absolute h-[81.05%] w-[349.94%] top-[0%] right-[-249.94%] bottom-[18.95%] left-[0%] overflow-hidden" />
            <img
              className="absolute top-[0px] left-[0px] w-[161.4px] h-[403.4px] overflow-hidden object-cover"
              alt=""
              src="/image@2x.png"
            />
            <div className="absolute top-[414.2px] left-[10.8px] tracking-[-0.22px] leading-[23.7px] font-medium flex items-center w-[102.8px] h-[23px]">
              Executives
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[170.3px] w-[564.9px] text-2xl-5 text-lightgoldenrodyellow">
            <div className="absolute h-[81.05%] w-[99.98%] top-[0%] right-[0.02%] bottom-[18.95%] left-[0%] rounded-2xl-5 [background:radial-gradient(50%_50%_at_50%_50%,_#008c63,_#00664e_30%,_#003d3d_70%)]" />
            <div className="absolute h-[81.05%] w-[99.98%] top-[0%] right-[0.02%] bottom-[18.95%] left-[0%] overflow-hidden">
              <div className="absolute h-full w-[calc(100%_-_161.4px)] top-[0px] right-[0px] bottom-[0px] left-[161.4px] [filter:blur(0px)]">
                <div className="absolute top-[77.8px] left-[318.7px] leading-[28px] font-inter text-white flex items-center w-[10.9px] h-[21px] opacity-[0.32]">{` `}</div>
                <div className="absolute top-[21.8px] left-[23.7px] text-xl-3 leading-[35px] font-medium flex items-center w-[335px] h-[211px] text-cadetblue">
                  <span className="w-full">
                    <span>“</span>
                    <span className="text-white">{` Our team saw a significant improvement in project efficiency after using the pipeline organization tools. It transformed how we manage leads, making the process smooth and intuitive. `}</span>
                    <span>”</span>
                  </span>
                </div>
                <div className="absolute top-[352.5px] left-[21.5px] text-sm-5 leading-[14.3px] font-semibold">
                  Samantha B
                </div>
                <div className="absolute top-[369.5px] left-[21.5px] text-xs-8 leading-[15.1px] flex items-center w-[251.6px] opacity-[0.8]">
                  Project Manager
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[161.4px] h-[403.4px] overflow-hidden">
              <img
                className="absolute top-[calc(50%_-_194.5px)] left-[calc(50%_-_73.5px)] rounded-mini-3 w-[147px] h-[389.1px] overflow-hidden object-cover"
                alt=""
                src="/6658b1518c169bbf2122f69e-testimonialshvetamalhanwebp@2x.png"
              />
            </div>
            <div className="absolute top-[414.2px] left-[10.8px] text-xl-3 tracking-[-0.22px] leading-[23.7px] font-medium text-gray-400 flex items-center w-[110.6px] h-[23px]">
              HR Leaders
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[744.2px] w-[161.4px] text-xl-3">
            <div className="absolute h-[81.05%] w-[349.94%] top-[0%] right-[-249.94%] bottom-[18.95%] left-[0%] overflow-hidden" />
            <img
              className="absolute top-[0px] left-[0px] w-[161.4px] h-[403.4px] overflow-hidden object-cover"
              alt=""
              src="/image1@2x.png"
            />
            <div className="absolute top-[414.2px] left-[10.8px] tracking-[-0.22px] leading-[23.7px] font-medium flex items-center w-[95.6px] h-[23px]">
              Managers
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[914.5px] w-[161.4px] text-xl-5">
            <div className="absolute h-[81.05%] w-[349.94%] top-[0%] right-[-249.94%] bottom-[18.95%] left-[0%] overflow-hidden" />
            <img
              className="absolute top-[0px] left-[0px] w-[161.4px] h-[403.4px] overflow-hidden object-cover"
              alt=""
              src="/image2@2x.png"
            />
            <div className="absolute top-[413.2px] left-[10.8px] tracking-[-0.22px] leading-[23.7px] font-medium">
              Employees
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
