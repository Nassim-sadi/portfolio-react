import ProjectCard from "./ProjectCard";
import {
  laravelLogo,
  reactLogo,
  tailwindLogo,
  vueLogo,
  sqlLogo,
  gitLogo,
  phpLogo,
} from "@/assets/logos.ts";

import LowerThirdBanner from "@/components/banner/Banner";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Site",
      description: "Responsive portfolio with dark mode and Lottie animation.",
      images: [
        "https://picsum.photos/600",
        "https://picsum.photos/600",
        "https://picsum.photos/600",
      ],
      tools: [
        { name: "React", icon: reactLogo },
        { name: "Tailwind CSS", icon: tailwindLogo },
        { name: "Vue", icon: vueLogo },
      ],
      githubLink: "https://github.com/yourname/portfolio",
    },
    {
      title: "E-Commerce App",
      description: "Shopping app with cart, auth, and checkout flow.",
      images: [
        "https://picsum.photos/600",
        "https://picsum.photos/600",
        "https://picsum.photos/600",
      ],
      tools: [
        { name: "PHP", icon: phpLogo },
        { name: "Laravel", icon: laravelLogo },
        { name: "MySQL", icon: sqlLogo },
        { name: "Tailwind CSS", icon: tailwindLogo },
        { name: "React", icon: reactLogo },
        { name: "Git", icon: gitLogo },
        { name: "Vue", icon: vueLogo },
      ],
      githubLink: "https://github.com/yourname/ecommerce",
    },
  ];

  return (
    <div className="projects section content">
      <LowerThirdBanner
        text="What I've Built"
        subtext="Check out my projects"
        color="emerald"
      />

      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
};

export default Projects;
