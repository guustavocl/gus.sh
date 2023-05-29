import React from "react";
import Card from "../Card";

import {
  SiAmazonaws,
  SiAndroidstudio,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGit,
  SiJava,
  SiJavascript,
  SiJenkins,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiVite,
} from "react-icons/si";
import Icon from "./Icon";

const Technologies = () => {
  return (
    <Card className="h-48 select-none sm:h-full">
      <>
        <div className="m-6 mb-12 grid w-full grid-cols-7 flex-wrap justify-center gap-4 self-center sm:m-4 sm:mb-10 sm:grid-cols-7 sm:gap-2 md:grid-cols-10">
          <Icon Component={SiVite} tooltip="Vite" />
          <Icon Component={SiReact} tooltip="React.js" />
          <Icon Component={SiNextdotjs} tooltip="Next.js" />
          <Icon Component={SiTailwindcss} tooltip="TailwindCSS" />
          <Icon Component={SiVisualstudiocode} tooltip="VSCode" />
          <Icon Component={SiNodedotjs} tooltip="Node.js" />
          <Icon Component={SiExpress} tooltip="Express.js" />
          <Icon Component={SiJavascript} tooltip="Javascript" />
          <Icon Component={SiTypescript} tooltip="Typescript" />
          <Icon Component={SiExpo} tooltip="Expo" />
          <Icon Component={SiJest} tooltip="Jest" />
          <Icon Component={SiJava} tooltip="Java" />
          <Icon Component={SiSpring} tooltip="Spring" />
          <Icon Component={SiMongodb} tooltip="MongoDB" />
          <Icon Component={SiPostgresql} tooltip="PostgreSQL" />
          <Icon Component={SiGit} tooltip="Git" />
          <Icon Component={SiDocker} tooltip="Docker" />
          <Icon Component={SiAmazonaws} tooltip="AWS" />
          <Icon Component={SiNginx} tooltip="NGINX" />
          <Icon Component={SiJenkins} tooltip="Jenkins" />
          <Icon Component={SiAndroidstudio} tooltip="Android Studio" className="display md:hidden" />
        </div>

        <span className="absolute bottom-2 right-4 w-full -space-y-1 text-right">
          <span className="block font-mono text-2xl font-bold text-pink-200 text-glow-violet-500 sm:text-xl">
            MY STACK
          </span>
        </span>
      </>
    </Card>
  );
};

export default React.memo(Technologies);
