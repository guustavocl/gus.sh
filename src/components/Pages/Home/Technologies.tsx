"use client";
import React from "react";
import { Card } from "../../MainCard/Card";
import { Icon } from "./Icon";
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

export function Technologies() {
  return (
    <Card className="relative h-48 select-none sm:h-full">
      <>
        <div className="m-4 mb-20 grid w-full grid-cols-7 flex-wrap justify-center gap-2 self-center sm:m-4 sm:mb-14 sm:grid-cols-7 sm:gap-2 md:grid-cols-10 md:gap-4">
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

        <span className="lights absolute bottom-2 right-4 w-full -space-y-1 text-right opacity-80">
          <span className="block font-mono text-xl font-bold text-pink-200 md:text-glow-violet-500">MY STACK</span>
          <span className="display whitespace-nowrap text-base font-bold text-pink-200 sm:block md:text-lg">
            some of the technologies I use
          </span>
        </span>
      </>
    </Card>
  );
}
