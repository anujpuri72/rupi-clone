import React, { useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { RxCross2 } from "react-icons/rx";
import { PiListFill } from "react-icons/pi";

import { useWindowSize } from "../../../hooks/useWindowSize";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const [width] = useWindowSize();

  return (
    <header className={styles.navbar}>
      <div
        style={{
          display: "flex",
          padding: " 0 45px",
          justifyContent: "space-between",
        }}>
        <div href="/" style={{ width: "85px", cursor: "pointer" }}>
          <svg
            viewBox="0 0 85 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z"
              fill="black"></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z"
              fill="black"></path>
          </svg>
        </div>
        {width > 700 ? (
          <a
            href="https://paychek.uni.club/"
            className={clsx(
              "no-underline visited:text-white text-white font-medium hover:text-[#7DEDDD] bg-black bg-opacity-60 hover:bg-black rounded-xl py-[11px] px-[30px]",
              styles.applyButton
            )}>
            Uni Paychek
          </a>
        ) : (
          <button onClick={() => setVisible((prev) => !prev)}>
            {visible ? (
              <RxCross2 size={48} color="white" />
            ) : (
              <PiListFill size={48} color="white" />
            )}
          </button>
        )}
      </div>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.3 },
              y: 0,
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}>
            <div class="md:hidden">
              <div
                className="text-white shadow-lg bg-[#00000099]"
                style={{ opacity: 1 }}>
                <div className="p-4 px-5 text-sm font-medium leading-7 border-t-[1px] border-t-[#ffffff66]">
                  <a
                    href="https://paychek.uni.club/"
                    className="flex justify-between">
                    <span>Uni Paychek</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
