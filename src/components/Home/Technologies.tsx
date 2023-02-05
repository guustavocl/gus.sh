import React from "react";
import Card from "../Card";

import {
  SiAmazonaws,
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
    <Card className="h-full select-none">
      <>
        <div className="m-4 mb-12 grid w-full grid-cols-10 flex-wrap justify-center gap-2 self-center md:mb-10">
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
        </div>

        <span className="lights absolute bottom-2 right-4 w-full -space-y-1 text-right">
          <span className="block font-mono text-xl font-bold text-pink-200 text-glow-violet-500">TECHNOLOGIES</span>
        </span>
      </>
    </Card>
  );
};

export default React.memo(Technologies);
