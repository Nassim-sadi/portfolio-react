import React from "react";

type ColorVariant = "emerald" | "indigo" | "orange" | "navy";

interface LowerThirdBannerProps {
  text: string;
  subtext?: string;
  color?: ColorVariant;
}

const colors: Record<
  ColorVariant,
  {
    main: string;
    light: string;
    text: string;
    subBg: string;
  }
> = {
  emerald: {
    main: "bg-emerald-600",
    light: "bg-emerald-300",
    text: "text-emerald-700",
    subBg: "bg-emerald-600",
  },
  indigo: {
    main: "bg-indigo-600",
    light: "bg-indigo-300",
    text: "text-indigo-700",
    subBg: "bg-indigo-600",
  },
  orange: {
    main: "bg-orange-600",
    light: "bg-orange-300",
    text: "text-orange-700",
    subBg: "bg-orange-600",
  },
  navy: {
    main: "bg-blue-700",
    light: "bg-blue-300",
    text: "text-blue-700",
    subBg: "bg-blue-700",
  },
};

const LowerThirdBanner: React.FC<LowerThirdBannerProps> = ({
  text,
  subtext,
  color = "emerald",
}) => {
  const theme = colors[color];

  return (
    <div className="relative flex items-center  px-8 py-4 w-fit mb-4 ml-4">
      {/* Left angled bars */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex flex-row gap-2">
        <div className={`w-2 h-16 rotate-[25deg] ${theme.light} `}></div>
        <div className={`w-2 h-20 rotate-[25deg] ${theme.main}`}></div>
      </div>

      {/* Text content */}
      <div className="text-left">
        <h2 className="text-xl md:text-2xl font-bold !mb-2">{text}</h2>
        {subtext && (
          <div
            className={`inline-block mt-1 px-3 py-1 text-sm text-white rounded ${theme.subBg}`}
          >
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
};

export default LowerThirdBanner;
