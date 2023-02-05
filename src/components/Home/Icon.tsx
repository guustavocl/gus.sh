import React from "react";
import clsx from "clsx";
import Tippy from "@tippyjs/react";
import { IconType } from "react-icons";

const Icon = ({ tooltip, className = "", Component }: { tooltip: string; className?: string; Component: IconType }) => {
  return (
    <Tippy content={tooltip} theme="translucent">
      <span className="lights h-full">
        <Component
          className={clsx(
            className,
            "h-7 text-4xl text-pink-100/90 opacity-60 glow-violet-500 hover:opacity-90 sm:h-8 sm:text-5xl md:text-3xl"
          )}
        />
      </span>
    </Tippy>
  );
};

export default React.memo(Icon);
