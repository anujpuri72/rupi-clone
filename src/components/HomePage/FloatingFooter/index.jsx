import React, { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./styles.module.css";

const FloatingFooter = () => {
  const [inputProps, setInputProps] = useState({ checked: true, number: "" });
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="fixed bottom-0 z-40 w-full py-8 md:hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 110%)",
      }}>
      <div className="w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium">
        <div className="flex flex-col transition-all ease-in">
          <AnimatePresence>
            {visible && (
              <motion.div
                initial={{ opacity: 0, y: 56 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.3 },
                  y: 0,
                }}
                exit={{ opacity: 0, y: 56, transition: { duration: 0.3 } }}>
                <div
                  className={styles.phoneInputContainer}
                  // style="opacity: 1; transform: none;"
                >
                  <div className="flex items-center">
                    <input
                      id="phone"
                      className={clsx(
                        "w-full py-3 text-lg border-0 outline-none rounded-tr-xl rounded-tl-xl",
                        styles.phoneInput
                      )}
                      placeholder="Enter your phone number"
                      autocomplete="off"
                      value={inputProps.number}
                      type="number"
                      onChange={(e) =>
                        setInputProps((inputProps) => ({
                          checked: true,
                          number: e.target.value,
                        }))
                      }
                    />
                    {inputProps?.number?.length && (
                      <span class="w-6">
                        <button
                          onClick={() => {
                            if (inputProps?.number?.length !== 10) {
                              setInputProps((inputProps) => ({
                                ...inputProps,
                                number: "",
                              }));
                              setVisible(false);
                            }
                          }}>
                          {inputProps?.number?.length !== 10 ? (
                            <svg
                              width="14"
                              height="15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M1.498.498.356 1.72l5.41 5.786L.41 13.233l1.17 1.25 5.355-5.728 5.41 5.786 1.142-1.22-5.41-5.787 5.492-5.873-1.17-1.25-5.491 5.873L1.498.498Z"
                                fill="#fff"></path>
                            </svg>
                          ) : (
                            <svg
                              width="20"
                              height="14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.668.332a1.132 1.132 0 0 1 0 1.6L8.504 13.098a1.887 1.887 0 0 1-2.668 0L.332 7.593a1.132 1.132 0 0 1 1.6-1.601l5.238 5.237L18.067.332a1.132 1.132 0 0 1 1.601 0Z"
                                fill="#79E691"></path>
                            </svg>
                          )}
                        </button>
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            className="p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C] h-14"
            onClick={() => setVisible((prev) => !prev)}
            disabled={
              !inputProps?.checked ||
              (inputProps?.number?.length !== 10 &&
                inputProps?.number?.length >= 1)
            }>
            <span>Apply now</span>
            <img
              src={"https://www.uni.cards/images/right_arrow.svg"}
              alt="right_arrow"
              width="21px"
              className="inline ml-3 css-0"
            />
          </button>
          {visible && (
            <div className="flex items-center max-w-xs gap-2 px-2 py-4 consent">
              <input
                type="checkbox"
                id="consent-msg"
                checked={inputProps.checked}
                onChange={(e) =>
                  setInputProps((inputProps) => ({
                    ...inputProps,
                    checked: e.target.checked,
                  }))
                }
              />
              <label
                for="consent-msg"
                className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer">
                You agree to be contacted by Uni Cards over Call, SMS, Email or
                WhatsApp to guide you through your application.
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingFooter;
