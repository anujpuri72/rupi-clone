import React from "react";

const TrustCard = () => {
  return (
    <div className="relative w-full bg-[#222222]">
      <div className="flex items-center justify-center p-4 text-[#958D8D]">
        <p>Uni maintains the highest level of security standards</p>
        <img
          src={"https://www.uni.cards/images/pcidss_cert.svg"}
          className="w-20 ml-3"
          width="80px"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
};

export default TrustCard;
