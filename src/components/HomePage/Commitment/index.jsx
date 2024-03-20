import React from "react";

import styles from "./styles.module.css";

const Commitment = () => {
  return (
    <section className="py-12  bg-[#222627] lg:py-[120px]">
      <div className="w-full px-6 mx-auto text-left max-w-7xl md:px-4 md:flex md:flex-col md:text-center">
        <p className="mx-auto text-[28px] font-medium md:text-[40px] md:max-w-6xl text-white leading-[1.2]">
          <span>
            At Uni, we’re committed to{" "}
            <span className={styles.uniGradientPrimary}>
              {" "}
              delivering an unmatched credit experience{" "}
            </span>{" "}
            for millions of Indians.
          </span>
        </p>
        <p className="mt-6 max-w-[500px] mx-auto text-[#BFC9CC] text-2xl">
          On this mission, we’ve partnered with some of the best in the
          business.
        </p>
        <div className="flex flex-row flex-wrap justify-center md:mt-24">
          <div className="flex justify-center w-[100px] md:w-44 mt-10 md:mt-0 md:mx-8 mx-4">
            <img
              className="w-full h-full"
              src={"https://www.uni.cards/images/SBM.svg"}
              alt="sbm bank"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
