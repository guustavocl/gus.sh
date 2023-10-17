"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

type MotionProps = {
  children: ReactNode;
};

export function Motion({ children }: MotionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="maindiv"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="grid w-full grid-cols-12 items-center gap-6"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
