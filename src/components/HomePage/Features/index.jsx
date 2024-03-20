import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="py-12 md:py-[150px]">
      <section>
        <div className="w-full px-6 mx-auto max-w-7xl md:px-4 undefined">
          <div className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.5 },
                y: 0,
              }}
              viewport={{ once: true }}>
              <p>
                Earn 1% assured cashback{" "}
                <span className={styles.regularText}>on your spends. Get</span>{" "}
                5X
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 1, duration: 0.5 },
                y: 0,
              }}
              viewport={{ once: true }}>
              <p>
                more value than cashback{" "}
                <span className={styles.regularText}>
                  {" "}
                  at the Uni Store. Enjoy
                </span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 2, duration: 0.5 },
                y: 0,
              }}
              viewport={{ once: true }}>
              <p>
                <span className={clsx("text-[#9EA7AE]", styles.regularText)}>
                  round the clock{" "}
                </span>
                Whatsapp support.{" "}
                <span className={clsx("text-[#9EA7AE]", styles.regularText)}>
                  And it's
                </span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 3, duration: 0.5 },
                y: 0,
              }}
              viewport={{ once: true }}>
              <p>
                lifetime free
                <span className={styles.regularText}>
                  ; no joining fee, no annual charges.
                </span>
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 4, duration: 0.5 },
              y: 0,
            }}
            viewport={{ once: true }}>
            <div className="flex py-12 md:justify-center">
              <div
                style={{
                  background:
                    "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
                }}
                className="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center ">
                <img
                  alt="down_arrow"
                  src={"https://www.uni.cards/images/down_arrow.svg"}
                  loading="lazy"
                  className="w-9 md:w-14 css-0"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="w-full px-8 mx-auto max-w-7xl md:px-4">
        <div className="flex flex-col justify-center">
          <div className="flex md:items-center flex-col-reverse md:flex-row w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8">
            <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
              <div className="w-full md:w-[300px] lg:w-[510px]">
                <div>
                  <span style={{ fontWeight: 700 }}>
                    1% assured cashback on your spends.
                  </span>
                  <span style={{ fontWeight: 400, color: "#9EA7AE" }}>
                    The more you spend, the more you earn.
                  </span>
                </div>
              </div>
              <div className="info-caption">
                <div className="leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]">
                  Not applicable on fuel purchase, rent &amp; wallet transfers,
                  ATM withdrawals &amp; international transactions.
                </div>
              </div>
            </div>
            <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
              <div className="flex justify-center overflow-hidden">
                <div className="relative w-[280px] lg:w-[448px]">
                  <img
                    src={
                      "https://www.uni.cards/images/one_percent_cashback.png"
                    }
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:items-center flex-col-reverse md:flex-row-reverse w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8">
            <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
              <div className="w-full md:w-[300px] lg:w-[510px]">
                <div>
                  <span style={{ fontWeight: 700 }}>
                    5x more value than your cashback,
                  </span>
                  <span style={{ fontWeight: 400, color: "#9EA7AE" }}>
                    {" "}
                    only at the Uni Store.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
              <div className="flex justify-center overflow-hidden">
                <div className="relative w-[280px] lg:w-[448px]">
                  <img
                    src={"https://www.uni.cards/images/five_x_rewards.png"}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex md:items-center flex-col-reverse md:flex-row 
    w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8">
            <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
              <div className="w-full md:w-[300px] lg:w-[510px]">
                <div>
                  <span style={{ fontWeight: 700 }}>Zero Forex Markup.</span>
                  <br />
                  <span style={{ fontWeight: 400, color: "#9EA7AE" }}>
                    {" "}
                    Go international, without any fees.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
              <div className="flex justify-center overflow-hidden">
                <div className="relative w-[280px] lg:w-[448px]">
                  <img
                    src={"https://www.uni.cards/images/forex_globe.png"}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center">
            <p>
              Lifetime <span className="text-[#5AD6C4]">free. </span>
              <span className="block sm:inline-block md:text-center">
                No joining fee.
              </span>
              <span className="block md:text-center"> No annual charges. </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
