import React from "react";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/coding2.json";

const MyAnimation = () => {
  return (
    <div className="w-full">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default MyAnimation;
