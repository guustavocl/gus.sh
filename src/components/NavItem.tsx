import React, { useEffect } from "react";
import Link from "next/link";

const letters = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";

const NavItem = ({ id, label, href, target = "" }: { id: string; label: string; href: string; target?: string }) => {
  useEffect(() => {
    const doc = document.getElementById(`nav-item-${label}`);
    if (doc) {
      const original = doc.innerText;
      doc.onmouseover = event => {
        if (event.target) {
          const htmlEvent = event.target as HTMLElement;
          let iterations = 0;
          const interval = setInterval(() => {
            if (event?.target)
              htmlEvent.innerText = htmlEvent.innerText
                .split("")
                .map((letter: string, index: number) => {
                  if (index < iterations) {
                    return original[index];
                  }
                  return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iterations >= original.length) clearInterval(interval);
            iterations += 1 / 2;
          }, 50);
          return () => clearInterval(interval);
        }
      };
    }
  }, []);

  return (
    <Link
      id={`nav-item-${id}`}
      href={href}
      target={target}
      rel="noopener noreferrer"
      className="h-full select-none hover:translate-x-px hover:text-pink-100 hover:opacity-100 hover:text-glow-pink-300"
    >
      {label.toUpperCase()}
    </Link>
  );
};

export default React.memo(NavItem);
