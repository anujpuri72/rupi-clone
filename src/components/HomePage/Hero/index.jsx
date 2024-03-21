import React from "react";
import { useRef, useEffect } from "react";

import styles from "./styles.module.css";

import { usePageContext } from "../../../Screens/HomePage/context";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { inputProps, setInputProps, setHeroVisible } = usePageContext();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    setHeroVisible(inView);
  }, [inView]);

  return (
    <div ref={ref}>
      <div className="relative h-[100vh] w-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row-reverse mx-auto max-w-[1280px] w-full justify-center z-1 bg-transparent">
          <img
            src={"https://www.uni.cards/images/nx-wave/nx_wave_hero.png"}
            alt="card_asset"
            className="h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6"
          />
          <div className="z-10 flex flex-col self-end w-full px-6 mt-7 md:mt-0 md:my-auto md:self-center">
            <h1 className="font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6 ">
              <span>
                <strong>NX Wave.</strong> The next-gen credit card for those who
                love rewards.
              </span>
            </h1>
            <div className="mt-4 md:mt-0">
              <p className="text-sm font-medium md:text-base md:mb-9">
                1% Cashback
                <svg
                  className="mx-[8px] mb-[2px] inline leading-5"
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                    fill="#000"
                    style={{ mixBlendMode: "darken" }}></path>
                </svg>
                5x Rewards
                <svg
                  className="mx-[8px] mb-[2px] inline leading-5"
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                    fill="#000"
                    style={{ mixBlendMode: "darken" }}></path>
                </svg>
                Zero Forex Markup
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex justify-between items-center max-w-[94vw]">
                <div className="flex flex-col">
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
                          !inputProps?.checked ||
                          inputProps?.number?.length != 10
                        }
                        className="z-10 justify-between px-4 py-2 pt-2 ml-2 text-sm leading-7 text-center bg-[#FDEF78] rounded-xl disabled:opacity-80 disabled:cursor-not-allowed">
                        <span>Apply Now</span>
                      </button>
                    </div>
                  </form>
                  <div className="flex items-center max-w-xs gap-1 px-2 py-4 consent">
                    <input
                      type="checkbox"
                      style={{ color: "#1A202C", backgroundColor: "white" }}
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
                      htmlFor="consent-msg"
                      className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer">
                      You agree to be contacted by Uni Cards over Call, SMS,
                      Email or WhatsApp to guide you through your application.
                    </label>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col justify-start hidden max-w-xs">
                <div className="w-full max-w-[300px]">
                  <a
                    href="https://uni-growth.onelink.me/v6cm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]">
                    <div className="flex items-center justify-center w-full">
                      <span>Download</span>
                    </div>
                  </a>
                </div>
                <div className="my-2">
                  <p className="text-white md:text-black text-[10px] leading-3">
                    Thank you for your interest in the Uni Card.
                    <br /> Download the Uni Cards app now and get your Uni Card
                    in minutes.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <video autoPlay={true} muted loop className={styles.video} playsInline>
          <source src="/assets/videos/nxt_wave_bg.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
