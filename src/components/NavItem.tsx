import React, { useEffect } from "react";
import Link from "next/link";

const letters = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";

const NavItem = ({
  id,
  label,
  href,
  target = "",
  position,
}: {
  id: string;
  label: string;
  href: string;
  target?: string;
  position: number;
}) => {
  useEffect(() => {
    const doc = document.getElementById(`nav-item-${label}`);
    let interval: string | number | NodeJS.Timeout | undefined;
    if (doc) {
      const original = doc.innerText;
      let iterations = 0;

      setTimeout(() => {
        interval = setInterval(() => {
          doc.innerText = doc.innerText
            .split("")
            .map((letter: string, index: number) => {
              if (index < iterations) {
                return original[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iterations >= original.length) clearInterval(interval);
          iterations += (1 / (position + 1)) * 2;
        }, 50);
      }, 200);
    }
    return () => clearInterval(interval);
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
