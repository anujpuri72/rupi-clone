import React from "react";

const Advantages = () => {
  return (
    <section className="py-12 lg:py-[100px] bg-black">
      <div className="w-full px-6 mx-auto max-w-7xl md:px-4 md:flex md:justify-between">
        <div className="flex items-center w-full my-12 false md:flex-col md:max-w-xs md:my-0">
          <div className="flex-[50%] flex-shrink-0 flex w-full">
            <div className="relative w-full h-36">
              <img
                className="absolute w-20 h-auto mx-auto -translate-x-1/2 -translate-y-1/2 md:relative md:left-auto md:-translate-x-0 left-1/2 top-1/2 md:w-28 md:mx-0"
                src={
                  "https://www.uni.cards/images/nx-wave/whatsapp_bubble.webp"
                }
                alt=""
              />
            </div>
          </div>
          <div className="flex-[50%] flex flex-col">
            <p className="font-medium text-base text-white leading-[18px] md:text-2xl">
              Help, just a WhatsApp away. Anytime, Anyday.
            </p>
            <p className="mt-2 text-sm text-[#8E8E93] md:text-lg">
              <span>
                During hectic work hours. On lazy sunday mornings. In the thick
                of night. Anytime.
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center w-full my-12 md:flex-col md:max-w-xs md:my-0">
          <div className="flex-[50%] flex-shrink-0 flex w-full">
            <div className="relative w-full h-36">
              <img
                className="absolute w-20 h-auto mx-auto -translate-x-1/2 -translate-y-1/2 md:relative md:left-auto md:-translate-x-0 left-1/2 top-1/2 md:w-28 md:mx-0"
                src={"https://www.uni.cards/images/nx-wave/rupee_bubble.webp"}
                alt=""
              />
            </div>
          </div>
          <div className="flex-[50%] flex flex-col">
            <p className="font-medium text-base text-white leading-[18px] md:text-2xl">
              {" "}
              No hidden charges, no last minute surprises.
            </p>
            <p className="mt-2 text-sm text-[#8E8E93] md:text-lg">
              <span>
                100% money back guarantee if a charge is applied without your
                knowledge.
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center w-full my-12 false md:flex-col md:max-w-xs md:my-0">
          <div className="flex-[50%] flex-shrink-0 flex w-full">
            <div className="relative w-full h-36">
              <img
                className="absolute w-20 h-auto mx-auto -translate-x-1/2 -translate-y-1/2 md:relative md:left-auto md:-translate-x-0 left-1/2 top-1/2 md:w-28 md:mx-0"
                src={
                  "https://www.uni.cards/images/nx-wave/antivirus_bubble.webp"
                }
                alt=""
              />
            </div>
          </div>
          <div className="flex-[50%] flex flex-col">
            <p className="font-medium text-base text-white leading-[18px] md:text-2xl">
              {" "}
              Super secure. Because we care about your money.
            </p>
            <p className="mt-2 text-sm text-[#8E8E93] md:text-lg">
              <span>
                <img
                  style={{ marginTop: 24 }}
                  src={"https://www.uni.cards/images/pcidss_cert.svg"}
                  alt="PCI Logo"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
