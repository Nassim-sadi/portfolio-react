import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

import { Service, Tool } from "@/types/services";
const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Card className="border-accent w-full max-w-md text-left text-sm mx-auto  mb-4">
      <CardHeader className="flex flex-row gap-4 items-center">
        <div className="p-2 bg-muted rounded-md">{service.icon}</div>
        <CardTitle className="text-base">{service.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription>{service.description}</CardDescription>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2">
        {service.tools?.map((tool: Tool, i: number) => (
          <div key={i} className="flex flex-row gap-2 items-center">
            <img src={tool.icon} className="w-6 h-6" alt={tool.name} />
            <span className="bg-muted rounded-md px-2 py-1 text-xs font-medium">
              {tool.name}
            </span>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
