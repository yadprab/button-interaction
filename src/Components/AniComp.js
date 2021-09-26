import { motion } from "framer-motion";
import React from "react";

function AniComp() {
  return (
    <>
      <motion.span
        className="button--bg"
        layoutId="button"
        aria-hidden="true"
      ></motion.span>
    </>
  );
}

export { AniComp };
