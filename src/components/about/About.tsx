import { motion } from "motion/react";
import AboutImage from "@/assets/images/undraw_coding_joxb.svg";
import reactLogo from "@/assets/images/logos/react-svgrepo-com.svg";
import tailwindLogo from "@/assets/images/logos/tailwind-svgrepo-com.svg";
import vueLogo from "@/assets/images/logos/vue-svgrepo-com.svg";
import sqlLogo from "@/assets/images/logos/sql-database-generic-svgrepo-com.svg";
import laravelLogo from "@/assets/images/logos/laravel-1-logo-svgrepo-com.svg";
import gitLogo from "@/assets/images/logos/git-svgrepo-com.svg";

const About = () => {
  const logos = [
    reactLogo,
    tailwindLogo,
    vueLogo,
    sqlLogo,
    laravelLogo,
    gitLogo,
  ];
  const radius = 120;

  return (
    <div
      className="about section flex flex-col items-center gap-8 py-12"
      id="about"
    >
      <div>
        <h1 className="text-3xl font-bold text-center">
          Hello, I am Nassim Sadi, Full Stack Web Developer
        </h1>
      </div>

      <div className="about-image relative perspective-[1000px]">
        <motion.div
          className="absolute inset-0 bottom-46"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(90deg)", // Orbit tilt
          }}
          animate={{ rotateY: [360, 0] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {logos.map((logo, index) => {
            const angle = (360 / logos.length) * index;
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const z = radius * Math.sin(rad); // Z instead of Y for 3D rotation
            return (
              <motion.div
                key={index}
                className="absolute w-12 h-12"
                style={{
                  transform: `translate3d(${x}px, 0px, ${z}px)rotateY(${-angle}deg)`,
                }}
              >
                <div className="logo-container">
                  <img src={logo} alt={`logo-${index}`} className="logo" />
                  <img src={logo} alt={`logo-${index}`} className="logo-bg" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Center image */}
        <img src={AboutImage} alt="about image" className="about-background" />
      </div>
    </div>
  );
};

export default About;
