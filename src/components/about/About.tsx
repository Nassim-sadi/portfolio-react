import CodingAnimation from "@/components/ui/animation";
import background from "@/assets/images/background.jpg";
const About = () => {
  return (
    <div className="about relative w-screen min-h-screen" id="about">
      <img
        src={background}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        alt=""
      />

      <div className="content flex  flex-col md:flex-row  items-center justify-evenly md:justify-center h-full ">
        <div className="z-10   md:flex-1/2 flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 max-w-lg">
            Hi, I am Nassim Sadi, a Full Stack Web Developer available for hire.
          </h1>
        </div>

        <div className="z-10 md:flex-1/2 flex flex-col items-center justify-center max-w-lg">
          <CodingAnimation />
        </div>
      </div>
    </div>
  );
};

export default About;
