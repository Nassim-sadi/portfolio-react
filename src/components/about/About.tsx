import { motion } from "motion/react";
import AboutImage from "@/assets/images/undraw_coding_joxb.svg";
import reactLogo from "@/assets/images/logos/react-svgrepo-com.svg";
import tailwindLogo from "@/assets/images/logos/tailwind-svgrepo-com.svg";
import vueLogo from "@/assets/images/logos/vue-svgrepo-com.svg";
import sqlLogo from "@/assets/images/logos/sql-database-generic-svgrepo-com.svg";
import laravelLogo from "@/assets/images/logos/laravel-1-logo-svgrepo-com.svg";
import gitLogo from "@/assets/images/logos/git-svgrepo-com.svg";
import CodingAnimation from "@/components/ui/animation";
import background from "@/assets/images/background.jpg";
const About = () => {
  const logos = [
    reactLogo,
    tailwindLogo,
    vueLogo,
    sqlLogo,
    laravelLogo,
    gitLogo,
  ];

  return (
    <div className="about relative w-screen min-h-screen" id="about">
      {/* Background Image */}
      <img
        src={background}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        alt=""
      />

      {/* Content Section */}
      <div className="content flex  flex-col md:flex-row  items-center justify-evenly md:justify-center h-full ">
        <div className="z-10 flex-1  md:flex-1/2 flex flex-col items-center justify-center">
          <h1 className="text-xl md:text-3xl font-semibold text-gray-800 max-w-lg">
            Hi, I am Nassim Sadi, a Full Stack Web Developer available for hire
          </h1>
        </div>

        <div className="z-10 flex-1  md:flex-1/2 flex flex-col items-center justify-center">
          <CodingAnimation />
        </div>
      </div>
    </div>
  );
};

export default About;
