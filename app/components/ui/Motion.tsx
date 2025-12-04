import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

type MotionProps = {
  children: ReactNode;
  locationKey: string;
  className?: string;
};

export function Motion({ children, locationKey, className }: MotionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={locationKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
