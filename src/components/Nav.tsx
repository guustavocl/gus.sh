import React from "react";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <div className="flex select-none flex-row flex-wrap justify-center gap-1.5 text-center font-mono text-sm text-pink-200 text-glow-violet-500/70 md:justify-start md:text-left md:text-base">
      <NavItem id="home" href="/" label="home" />
      <span className="select-none self-center text-sm">/</span>
      <NavItem id="projects" href="/projects" label="projects" />
      <span className="select-none self-center text-sm">/</span>
      <NavItem id="contact" href="/contact" label="contact" />
      <span className="select-none self-center text-sm">/</span>
      <NavItem id="instagram" href="https://instagram.com/guszoz" target="_blank" label="instagram" />
      <span className="select-none self-center text-sm">/</span>
      <NavItem id="twitter" href="https://twitter.com/guustavocl" target="_blank" label="twitter" />
    </div>
  );
};

export default React.memo(Nav);
