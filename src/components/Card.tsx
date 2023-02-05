import React from "react";
import clsx from "clsx";
import { useLights } from "@/hooks/useLights";

type CardProps = {
  children: JSX.Element;
  className?: string;
  onClick?: () => void;
};

const Card = ({ children, className, onClick }: CardProps) => {
  const lights = useLights();

  return (
    <>
      <div
        onClick={() => {
          if (onClick) onClick();
        }}
        className={clsx(
          className,
          lights.on ? "bg-violet-700/20" : "bg-violet-700/01",
          "flex overflow-hidden rounded-md border-violet-500 backdrop-blur"
        )}
      >
        {children}
      </div>
      {/* <div
        className={clsx(
          className,
          "lights flex overflow-hidden rounded-md border-violet-500 bg-violet-700/20 backdrop-blur"
        )}
      >
        {children}
      </div> */}
    </>
  );
};

export default React.memo(Card);
