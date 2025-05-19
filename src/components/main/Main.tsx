import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Layers, Network, Monitor } from "lucide-react";
const Main = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "I build robust full-stack applications using Laravel on the backend and React or Vue on the frontend. Clean code, scalable architecture, and responsive UI are a priority.",
      icon: <Layers className="w-6 h-6 text-primary" />,
      tools: ["PHP", "Laravel", "MySQL", "React", "Vue"],
    },
    {
      title: "RESTful API Development",
      description:
        "I design and implement secure, efficient, and well-documented RESTful APIs with Laravel, ready to integrate with web or mobile clients.",
      icon: <Network className="w-6 h-6 text-primary" />,
      tools: ["PHP", "Laravel", "MySQL"],
    },
    {
      title: "Modern Frontend UI",
      description:
        "I craft modern, accessible, and responsive interfaces using Tailwind CSS, React, or Vue, ensuring seamless user experiences across devices.",
      icon: <Monitor className="w-6 h-6 text-primary" />,
      tools: ["Tailwind CSS", "React", "Vue"],
    },
  ];

  return (
    <div className="main section content">
      <h2>What i do</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className=" border-accent">
            <CardHeader className="flex flex-row h-auto w-full gap-4 items-start">
              <div className="p-2 bg-muted rounded-md">{service.icon}</div>
              <div className="flex h-full items-center">
                <CardTitle>{service.title}</CardTitle>
              </div>
            </CardHeader>

            <CardContent className="flex-1">
              <CardDescription>{service.description}</CardDescription>
            </CardContent>

            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-muted rounded-md px-2 py-1 text-sm"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Main;
