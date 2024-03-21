import React from "react";

import { usePageContext } from "../../../Screens/HomePage/context";

const DesktopFloatingFooter = () => {
  const { inputProps, setInputProps, heroVisible } = usePageContext();

  return (
    <div style={{ opacity: heroVisible ? 0 : 1 }}>
      <section className="fixed bottom-0 hidden w-screen py-5 z-100 sm:block bg-[#f5f5f5]">
        <div className="flex justify-between w-full px-12 mx-auto max-w-7xl">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <form>
                <div className="flex justify-between p-1 pl-2 bg-black rounded-xl">
                  <div className="flex items-center">
                    <input
                      className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                      placeholder="Enter Phone Number"
                      value={inputProps.number}
                      type="number"
                      onChange={(e) =>
                        setInputProps((inputProps) => ({
                          ...inputProps,
                          number: e.target.value,
                        }))
                      }
                    />

                    {inputProps?.number?.length && (
                      <span className="flex items-center justify-end w-6 h-full">
                        <button
                          onClick={() => {
                            if (inputProps?.number?.length !== 10) {
                              setInputProps((inputProps) => ({
                                ...inputProps,
                                number: "",
                              }));
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
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.668.332a1.132 1.132 0 0 1 0 1.6L8.504 13.098a1.887 1.887 0 0 1-2.668 0L.332 7.593a1.132 1.132 0 0 1 1.6-1.601l5.238 5.237L18.067.332a1.132 1.132 0 0 1 1.601 0Z"
                                fill="#79E691"></path>
                            </svg>
                          )}
                        </button>
                      </span>
                    )}

                    <span></span>
                  </div>
                  <button
                    type="submit"
                    disabled={
                      !inputProps?.checked || inputProps?.number?.length != 10
                    }
                    className="z-10 justify-between px-4 py-2 pt-2 ml-2 text-sm leading-7 text-center bg-[#FDEF78] rounded-xl disabled:opacity-80 disabled:cursor-not-allowed">
                    <span>Apply Now</span>
                  </button>
                </div>
              </form>
              <div className="flex items-center max-w-xs gap-2 px-2 py-4">
                <input type="checkbox" id="consent-msg" />
                <label
                  htmlFor="consent-msg"
                  className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer">
                  You agree to be contacted by Uni Cards over Call, SMS, Email
                  or WhatsApp to guide you through your application.
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesktopFloatingFooter;
