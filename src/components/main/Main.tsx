import { Layers, Network, Monitor } from "lucide-react";
import {
  laravelLogo,
  reactLogo,
  tailwindLogo,
  vueLogo,
  sqlLogo,
  gitLogo,
  phpLogo,
} from "@/assets/logos.ts";
import ServicesDesktop from "@/components/main/ServicesDesktop";
import ServicesMobile from "@/components/main/ServicesMobile";

import useIsMobile from "@/utils/useIsMobile";
import LowerThirdBanner from "../banner/Banner";

const Main = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "I build robust full-stack applications using Laravel on the backend and React or Vue on the frontend. Clean code, scalable architecture, and responsive UI are a priority.",
      icon: <Layers className="w-6 h-6 text-primary" />,
      tools: [
        { name: "PHP", icon: phpLogo },
        { name: "Laravel", icon: laravelLogo },
        { name: "MySQL", icon: sqlLogo },
        { name: "Tailwind CSS", icon: tailwindLogo },
        { name: "React", icon: reactLogo },
        { name: "Git", icon: gitLogo },
        { name: "Vue", icon: vueLogo },
      ],
      Children: [
        {
          title: "RESTful API Development",
          description:
            "I design and implement secure, efficient, and well-documented RESTful APIs with Laravel, ready to integrate with web or mobile clients.",
          icon: <Network className="w-6 h-6 text-primary" />,
          tools: [
            { name: "PHP", icon: phpLogo },
            { name: "Laravel", icon: laravelLogo },
            { name: "MySQL", icon: sqlLogo },
          ],
        },
        {
          title: "Modern Frontend UI",
          description:
            "I craft modern, accessible, and responsive interfaces using Tailwind CSS, React, or Vue, ensuring seamless user experiences across devices.",
          icon: <Monitor className="w-6 h-6 text-primary" />,
          tools: [
            { name: "Tailwind CSS", icon: tailwindLogo },
            { name: "React", icon: reactLogo },
            { name: "Vue", icon: vueLogo },
          ],
        },
      ],
    },
  ];

  return (
    <div className="main section content">
      <LowerThirdBanner text="What I Do" subtext="My Services" color="indigo" />
      {useIsMobile() ? (
        <ServicesMobile services={services} />
      ) : (
        <ServicesDesktop services={services} />
      )}
    </div>
  );
};

export default Main;
