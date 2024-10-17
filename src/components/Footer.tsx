import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[7761px] left-[0px] w-[1440px] h-[502px] overflow-hidden text-left text-base text-black font-plus-jakarta-sans ${className}`}
    >
      <div className="absolute bottom-[0px] left-[calc(50%_-_536px)] border-gainsboro-200 border-t-[1px] border-solid box-border w-[1090px] h-[104px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_176px)] leading-[26px] capitalize font-semibold">
          Copyright 2022 Frybix inc. all rights reserved
        </div>
      </div>
      <div className="absolute top-[168px] left-[calc(50%_-_655px)] flex flex-row items-start justify-start gap-28">
        <div className="w-40 relative h-[124px]">
          <div className="absolute top-[6px] left-[calc(50%_-_73px)] w-[153px] h-[118px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_76.5px)] w-[34px] h-[34px]"
              alt=""
              src="/group.svg"
            />
            <div className="absolute top-[50px] left-[calc(50%_-_76.5px)] w-[153px] h-[26px]">
              <div className="absolute top-[0px] left-[calc(50%_-_44.5px)] leading-[26px] capitalize font-semibold">
                eo@nakhsha.in
              </div>
              <img
                className="absolute top-[1px] left-[calc(50%_-_76.5px)] w-6 h-6 overflow-hidden"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className="absolute top-[92px] left-[calc(50%_-_76.5px)] w-[140px] h-[26px]">
              <div className="absolute top-[0px] left-[calc(50%_-_38px)] leading-[26px] capitalize font-semibold">
                +9606966266
              </div>
              <img
                className="absolute top-[1px] left-[calc(50%_-_70px)] w-6 h-6 overflow-hidden"
                alt=""
                src="/frame1.svg"
              />
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[calc(50%_-_80px)] w-10 h-10 object-cover"
            alt=""
            src="/image-61@2x.png"
          />
        </div>
        <div className="w-[109px] relative h-[168px]">
          <div className="absolute top-[58px] left-[calc(50%_-_53.5px)] leading-[26px] capitalize font-semibold">
            home
          </div>
          <div className="absolute top-[100px] left-[calc(50%_-_53.5px)] leading-[26px] capitalize font-semibold">
            Our company
          </div>
          <div className="absolute top-[142px] left-[calc(50%_-_53.5px)] leading-[26px] capitalize font-semibold">
            Contact us
          </div>
          <div className="absolute top-[0px] left-[calc(50%_-_54.5px)] text-13xl leading-[42px] capitalize font-semibold text-center">
            links
          </div>
        </div>
        <div className="w-[107px] relative h-[168px]">
          <div className="absolute top-[58px] left-[calc(50%_-_53.5px)] leading-[26px] capitalize font-semibold">
            terms of use
          </div>
          <div className="absolute top-[100px] left-[calc(50%_-_53.5px)] leading-[26px] capitalize font-semibold">
            privacy policy
          </div>
          <div className="absolute top-[142px] left-[calc(50%_-_53.5px)] leading-[26px] capitalize font-semibold">
            cookie policy
          </div>
          <div className="absolute top-[0px] left-[calc(50%_-_53.5px)] text-13xl leading-[42px] capitalize font-semibold">
            legal
          </div>
        </div>
        <div className="w-[126px] relative h-[168px]">
          <div className="absolute top-[58px] left-[calc(50%_-_63px)] leading-[26px] capitalize font-semibold">
            take tour
          </div>
          <div className="absolute top-[100px] left-[calc(50%_-_63px)] leading-[26px] capitalize font-semibold">
            live chat
          </div>
          <div className="absolute top-[142px] left-[calc(50%_-_63px)] leading-[26px] capitalize font-semibold">
            reveiws
          </div>
          <div className="absolute top-[0px] left-[calc(50%_-_63px)] text-13xl leading-[42px] capitalize font-semibold">
            product
          </div>
        </div>
        <div className="w-[360px] relative h-[170px]">
          <div className="absolute top-[0px] left-[calc(50%_-_180px)] w-[360px] h-[170px]">
            <div className="absolute top-[0px] left-[calc(50%_-_175px)] text-13xl leading-[42px] capitalize font-semibold">
              Newsletter
            </div>
            <div className="absolute top-[58px] left-[calc(50%_-_175px)] leading-[26px] capitalize font-semibold">
              Stay up to date
            </div>
            <div className="absolute top-[110px] left-[calc(50%_-_180px)] w-[360px] h-[60px] text-darkgray">
              <div className="absolute top-[0px] left-[calc(50%_-_180px)] w-[360px] h-[60px]">
                <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-4xs bg-white border-gainsboro-100 border-[2px] border-solid box-border w-[360px] h-[60px]" />
                <div className="absolute top-[16.6px] left-[calc(50%_-_149.3px)] leading-[26px] font-semibold inline-block w-[83.6px] h-[26.9px]">{`Your email `}</div>
              </div>
              <div className="absolute top-[calc(50%_-_25px)] left-[calc(50%_+_23px)] shadow-[0px_10px_16px_-10px_rgba(255,_255,_255,_0.06)_inset,_0px_8px_8px_rgba(0,_31,_31,_0.06),_0px_4px_4px_rgba(0,_31,_31,_0.06),_0px_2px_2px_rgba(0,_31,_31,_0.06),_0px_0px_1px_rgba(0,_31,_31,_0.32),_0px_-2px_1px_rgba(0,_31,_31,_0.24)_inset,_0px_1px_1px_rgba(205,_250,_206,_0.08)_inset] rounded-2xs-8 [background:linear-gradient(180deg,_#ff5229,_#ff6541)] overflow-hidden flex flex-row items-center justify-center py-[15px] px-[31px] text-center text-lg text-white">
                <div className="relative leading-[18.7px] font-semibold">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
