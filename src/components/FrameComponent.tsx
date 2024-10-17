import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[5268px] left-[361px] w-[753.1px] h-[627.5px] text-center text-xs-8 text-gray-400 font-plus-jakarta-sans ${className}`}
    >
      <div className="absolute top-[233.1px] left-[0px] w-[753.1px] h-[233.6px]">
        <div className="absolute top-[9.8px] left-[calc(50%_-_96.85px)] tracking-[1.25px] leading-[16.3px] uppercase font-semibold text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#c25538,_#ff5e38)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center w-[193.8px] h-[13px]">
          {" "}
          Fintech platform
        </div>
        <div className="absolute top-[calc(50%_-_68.6px)] left-[calc(50%_-_376.55px)] w-[753.1px] h-[93.3px] text-25xl-8">
          <div className="absolute top-[-3px] left-[calc(50%_-_225.35px)] tracking-[-0.47px] leading-[46.6px] font-medium flex items-center w-[450.8px] h-[97.6px]">
            <span className="w-full">
              <p className="m-0">Build an operationally</p>
              <p className="m-0">excellent company</p>
            </span>
          </div>
        </div>
        <div className="absolute top-[calc(50%_+_69.8px)] left-[calc(50%_-_95.05px)] shadow-[0px_10px_16px_-10px_rgba(255,_255,_255,_0.06)_inset,_0px_8px_8px_rgba(0,_31,_31,_0.06),_0px_4px_4px_rgba(0,_31,_31,_0.06),_0px_2px_2px_rgba(0,_31,_31,_0.06),_0px_0px_1px_rgba(0,_31,_31,_0.32),_0px_-2px_1px_rgba(0,_31,_31,_0.24)_inset,_0px_1px_1px_rgba(205,_250,_206,_0.08)_inset] rounded-2xs-8 [background:linear-gradient(180deg,_#ff5229,_#ff6541)] overflow-hidden flex flex-row items-center justify-center py-4 px-[41px] text-lg text-white">
          <div className="relative leading-[18.7px] font-semibold">
            Discover now
          </div>
        </div>
      </div>
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/mask-group.svg"
      />
      <img
        className="absolute bottom-[358.6px] left-[calc(50%_-_296.15px)] rounded-2xl-5 w-[71.7px] h-[71.7px] overflow-hidden"
        alt=""
        src="/icon.svg"
      />
      <img
        className="absolute bottom-[433.9px] left-[calc(50%_-_224.45px)] rounded-2xl-5 w-[71.7px] h-[71.7px] overflow-hidden"
        alt=""
        src="/icon1.svg"
      />
      <img
        className="absolute bottom-[484.1px] left-[calc(50%_-_137.65px)] rounded-2xl-5 w-[71.7px] h-[71.7px] overflow-hidden"
        alt=""
        src="/icon2.svg"
      />
      <img
        className="absolute bottom-[502px] left-[calc(50%_-_35.85px)] rounded-2xl-5 w-[71.7px] h-[71.7px] overflow-hidden"
        alt=""
        src="/icon3.svg"
      />
      <img
        className="absolute bottom-[484.1px] left-[calc(50%_+_65.95px)] rounded-2xl-5 w-[71.7px] h-[71.7px] overflow-hidden"
        alt=""
        src="/icon4.svg"
      />
      <img
        className="absolute bottom-[433.9px] left-[calc(50%_+_152.75px)] rounded-2xl-5 w-[71.7px] h-[71.7px] overflow-hidden"
        alt=""
        src="/icon5.svg"
      />
      <img
        className="absolute bottom-[358.6px] left-[calc(50%_+_224.45px)] rounded-2xl-5 w-[71.7px] h-[71.7px] overflow-hidden"
        alt=""
        src="/icon6.svg"
      />
    </div>
  );
};

export default FrameComponent;
