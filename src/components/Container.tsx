import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ContainerType = {
  className?: string;
  realTimeProjectInsights?: string;
  stayAheadOfTheGameWithPhase?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propHeight?: CSSProperties["height"];
  propTop1?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propTop2?: CSSProperties["top"];
  propLeft1?: CSSProperties["left"];
};

const Container: FunctionComponent<ContainerType> = ({
  className = "",
  propTop,
  propHeight,
  realTimeProjectInsights,
  propTop1,
  propLeft,
  propTop2,
  propLeft1,
  stayAheadOfTheGameWithPhase,
}) => {
  const heading2Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  const realTimeProjectInsightsStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop1,
      left: propLeft,
    };
  }, [propTop1, propLeft]);

  const containerStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop2,
      left: propLeft1,
    };
  }, [propTop2, propLeft1]);

  return (
    <div
      className={`absolute top-[0px] left-[calc(50%_-_376.6px)] w-[753.1px] h-[211.7px] text-center text-xs-8 text-gray-400 font-plus-jakarta-sans ${className}`}
    >
      <div className="absolute top-[calc(50%_-_105.85px)] left-[calc(50%_-_137.65px)] shadow-[0px_0px_0px_1px_#51e0cd_inset] [backdrop-filter:blur(10px)] rounded-3xs bg-gray-500 w-[275.3px] h-[33.9px] overflow-hidden">
        <div className="absolute top-[9.8px] left-[calc(50%_-_122.55px)] tracking-[1.25px] leading-[16.3px] uppercase font-semibold text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#00807c,_#4fd37f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center w-[245.4px] h-[13px]">
          improve your PRODUCTIVITY
        </div>
        <img
          className="absolute h-full w-full top-[0px] right-[0%] bottom-[0px] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/mask-group3.svg"
        />
      </div>
      <div
        className="absolute top-[calc(50%_-_57.95px)] left-[calc(50%_-_376.55px)] w-[753px] h-[69px] text-25xl-8"
        style={heading2Style}
      >
        <div
          className="absolute top-[22px] left-[calc(50%_-_289.5px)] tracking-[-0.47px] leading-[46.6px] capitalize font-semibold flex items-center justify-center w-[578.4px]"
          style={realTimeProjectInsightsStyle}
        >
          {realTimeProjectInsights}
        </div>
      </div>
      <div
        className="absolute top-[calc(50%_+_25.05px)] left-[calc(50%_-_317.55px)] w-[636.7px] h-[55.9px] text-xl-5"
        style={containerStyle}
      >
        <div className="absolute top-[2px] left-[calc(50%_-_303.85px)] leading-[28px] capitalize flex items-center justify-center w-[608px] h-[51px]">
          {stayAheadOfTheGameWithPhase}
        </div>
      </div>
    </div>
  );
};

export default Container;
