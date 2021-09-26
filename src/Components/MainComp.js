import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { AniComp } from "./AniComp";
function MainComp() {
  const [Button, setButton] = useState({ DEV: true, DESIGN: false });
  return (
    <>
      <div className="main--wrapper">
        <main>
          <div className="button--wrapper">
            <AnimateSharedLayout>
              <motion.button
                id="dev--button"
                className={Button.DEV ? "active" : "notActive"}
                onClick={() => {
                  setButton({ DEV: true, DESIGN: false });
                }}
              >
                DEV
                {Button.DEV && <AniComp />}
              </motion.button>
              <motion.button
                id="design--button"
                className={Button.DESIGN ? "active" : "notActive"}
                onClick={() => {
                  setButton({ DEV: false, DESIGN: true });
                }}
              >
                DESIGN
                {Button.DESIGN && <AniComp />}
              </motion.button>
            </AnimateSharedLayout>
          </div>
        </main>
      </div>
    </>
  );
}

export { MainComp };
