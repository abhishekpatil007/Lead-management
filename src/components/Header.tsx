import { FunctionComponent } from "react";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[calc(50%_-_811px)] w-[1622px] h-[1331px] text-center text-lg text-white font-plus-jakarta-sans ${className}`}
    >    
      <div className="absolute top-[0px] left-[90px] bg-mediumturquoise w-[1440px] h-[1024px] overflow-hidden">
        <img
          className="absolute top-[278.8px] left-[104.4px] w-[1219.5px] h-[1000.7px] object-contain"
          alt=""
          src="/vector.svg"
        />
        <img
          className="absolute top-[-99px] left-[-193px] w-[1290px] h-[1452px] object-contain"
          alt=""
          src="/vector1.svg"
        />
        <img
          className="absolute top-[652.7px] left-[833px] w-[784.7px] h-[496.5px] object-contain"
          alt=""
          src="/vector2.svg"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px] object-cover mix-blend-soft-light"
          alt=""
          src="/image3@2x.png"
        />
        <div className="absolute top-[calc(50%_-_457px)] right-[160px] shadow-[0px_10px_16px_-10px_rgba(255,_255,_255,_0.06)_inset,_0px_8px_8px_rgba(0,_31,_31,_0.06),_0px_4px_4px_rgba(0,_31,_31,_0.06),_0px_2px_2px_rgba(0,_31,_31,_0.06),_0px_0px_1px_rgba(0,_31,_31,_0.32),_0px_-2px_1px_rgba(0,_31,_31,_0.24)_inset,_0px_1px_1px_rgba(205,_250,_206,_0.08)_inset] rounded-2xs-8 [background:linear-gradient(180deg,_#ff5229,_#ff6541)] overflow-hidden flex flex-row items-center justify-center py-4 px-[41px]">
          <div className="relative leading-[18.7px] font-semibold">Login</div>
        </div>
        <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_93px)] shadow-[0px_10px_16px_-10px_rgba(255,_255,_255,_0.06)_inset,_0px_8px_8px_rgba(0,_31,_31,_0.06),_0px_4px_4px_rgba(0,_31,_31,_0.06),_0px_2px_2px_rgba(0,_31,_31,_0.06),_0px_0px_1px_rgba(0,_31,_31,_0.32),_0px_-2px_1px_rgba(0,_31,_31,_0.24)_inset,_0px_1px_1px_rgba(205,_250,_206,_0.08)_inset] rounded-2xs-8 [background:linear-gradient(180deg,_#ff5229,_#ff6541)] overflow-hidden flex flex-row items-center justify-center py-4 px-[41px]">
          <div className="relative leading-[18.7px] font-semibold">
            Get Started
          </div>
        </div>
      </div>
      <div className="absolute top-[855px] left-[calc(50%_+_627px)] w-[184px] h-[101px]">
        <div className="absolute top-[0px] left-[calc(50%_-_90px)] rounded-2xl border-white border-[2.5px] border-solid box-border w-[75px] h-[27px]" />
        <div className="absolute top-[25px] left-[calc(50%_-_55px)] rounded-2xl border-white border-[2.5px] border-solid box-border w-[75px] h-[27px]" />
        <div className="absolute top-[49px] left-[calc(50%_-_92px)] rounded-2xl border-gray-100 border-[2.5px] border-solid box-border w-[75px] h-[27px]" />
        <div className="absolute top-[25px] left-[calc(50%_+_17px)] rounded-2xl border-white border-[2.5px] border-solid box-border w-[75px] h-[27px]" />
        <div className="absolute top-[49px] left-[calc(50%_-_20px)] rounded-2xl border-white border-[2.5px] border-solid box-border w-[75px] h-[27px]" />
        <div className="absolute top-[74px] left-[calc(50%_-_57px)] rounded-2xl border-gray-100 border-[2.5px] border-solid box-border w-[75px] h-[27px]" />
      </div>
      <img
        className="absolute top-[709px] left-[calc(50%_-_747.9px)] w-[119.4px] h-[132.9px] object-contain"
        alt=""
        src="/frame2@2x.png"
      />
      <img
        className="absolute top-[445px] left-[calc(50%_+_358px)] w-28 h-28 overflow-hidden"
        alt=""
        src="/frame3.svg"
      />
      <img
        className="absolute top-[191px] left-[calc(50%_-_811px)] w-[182px] h-[101px] object-contain"
        alt=""
        src="/group1@2x.png"
      />
      <img
        className="absolute top-[188px] left-[calc(50%_-_330px)] w-[34.9px] h-[37px] object-contain"
        alt=""
        src="/group2@2x.png"
      />
      <div className="absolute top-[446px] left-[calc(50%_-_297px)] text-xl leading-[30px] capitalize">
        make online payments and keep track of all your transactions.
      </div>
      <img
        className="absolute top-[377px] left-[calc(50%_-_508px)] w-[423px] h-9"
        alt=""
        src="/frame4.svg"
      />
      <div className="absolute top-[234px] left-[calc(50%_-_535px)] text-61xl tracking-[-0.02em] leading-[90px] capitalize font-extrabold inline-block w-[1067px]">
        Everything your team needs to achieve their goals.
      </div>
      <div className="absolute top-[195px] left-[calc(50%_-_147px)] w-[291px] h-[29px] text-base">
        <div className="absolute top-[0px] left-[calc(50%_-_145.5px)] rounded-64xl bg-deeppink-200 w-[291px] h-[29px] opacity-[0.24]" />
        <div className="absolute top-[4px] left-[calc(50%_-_133.5px)] leading-[20px] capitalize">
          Sales teams from good to great 👋
        </div>
      </div>
      <div className="absolute top-[66px] left-[calc(50%_-_437px)] flex flex-row items-start justify-start gap-6 text-left">
        <div className="relative leading-[28px] capitalize font-extrabold text-tomato">
          home
        </div>
        <div className="relative leading-[28px] capitalize font-semibold">
          about us
        </div>
        <div className="relative leading-[28px] capitalize font-semibold">
          pricing
        </div>
        <div className="relative leading-[28px] capitalize font-semibold">
          features
        </div>
      </div>
      <div className="absolute top-[66px] left-[calc(50%_+_322px)] w-[67px] h-7 text-left">
        <div className="absolute top-[0px] left-[calc(50%_-_33.5px)] leading-[28px] capitalize font-semibold">
          sign up
        </div>
      </div>
      <img
        className="absolute top-[619px] left-[293px] rounded-4xl w-[1034px] h-[444px] object-cover"
        alt=""
        src="/rectangle-17647@2x.png"
      />
      
     
      <div className="absolute top-[60px] left-[120px] w-[115px] h-[38px] text-left text-mid font-manrope">
        <img
          className="absolute top-[0px] left-[0px] w-[46px] h-[38px] object-cover"
          alt=""
          src="/image-611@2x.png"
        />
        <b className="absolute top-[10px] left-[46px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#007dcf_32.29%,_#082c44)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Vin Tech
        </b>
      </div>
    </div>
  );
};

export default Header;
