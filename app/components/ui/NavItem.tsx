import { ComponentProps } from "react";
import { Link, useLocation } from "react-router";
import { cn } from "~/lib/utils";

type NavItemProps = {
  id: string;
  label: string;
  href: string;
  target?: string;
  mobile?: string;
};

export function NavItem({ id, label, href, target = "", mobile, ...props }: NavItemProps & ComponentProps<"a">) {
  const { pathname } = useLocation();
  return (
    <Link
      id={`nav-item-${id}`}
      to={href}
      target={target}
      rel="noopener noreferrer"
      className={cn(
        "nav-card -ml-[0.64rem] h-full w-full select-none whitespace-nowrap py-0.5 text-center",
        "hover:opacity-100 hover:brightness-75",
        "opacity-90 hover:bg-black/30",
        props.className,
        href === pathname ? "bg-black/50" : "",
      )}
    >
      {mobile ? (
        <>
          <span className={cn("flex w-full translate-x-1 px-2 text-primary hover:text-white md:hidden")}>{mobile}</span>
          <span
            className={cn(
              "hidden px-[0.85rem] md:flex md:px-4",
              "[text-shadow:0_0_3px_theme(colors.accent/60%),0_0_3px_theme(colors.accent/60%)]",
            )}
          >
            {label.toUpperCase()}
          </span>
        </>
      ) : (
        <span
          className={cn(
            "text-primary hover:text-white px-[0.85rem] md:px-4",
            "[text-shadow:0_0_3px_theme(colors.accent/60%),0_0_3px_theme(colors.accent/60%)]",
          )}
        >
          {label.toUpperCase()}
        </span>
      )}
    </Link>
  );
}
