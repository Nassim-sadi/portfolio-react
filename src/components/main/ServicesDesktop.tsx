import { Service, Tool } from "@/types/services";
import { Tree, TreeNode } from "react-organizational-chart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
const ServiceNode = ({ service }: { service: Service }) => {
  return (
    <TreeNode
      label={
        <Card className="border-accent w-[300px] text-left text-sm mx-auto">
          <CardHeader className="flex flex-row gap-4 items-start">
            <div className="p-2 bg-muted rounded-md">{service.icon}</div>
            <div>
              <CardTitle className="text-base">{service.title}</CardTitle>
            </div>
          </CardHeader>

          <CardContent>
            <CardDescription>{service.description}</CardDescription>
          </CardContent>

          <CardFooter className="flex flex-wrap gap-2">
            {service.tools?.map((tool: Tool, i: number) => (
              <div key={i} className="flex flex-row gap-2">
                <img src={tool.icon} className="w-6 h-6" alt="" />
                <span className="bg-muted rounded-md px-2 py-1 text-xs font-medium">
                  {tool.name}
                </span>
              </div>
            ))}
          </CardFooter>
        </Card>
      }
    >
      {service.Children?.map((child: Service, i: number) => (
        <ServiceNode key={i} service={child} />
      ))}
    </TreeNode>
  );
};

const ServicesDesktop = ({ services }: { services: Service[] }) => {
  return (
    <div className="flex flex-col gap-8">
      <Tree
        label={
          <div className="text-primary font-semibold text-lg">Services</div>
        }
        lineWidth={"2px"}
        lineColor={"#4B5563"}
        lineBorderRadius={"12px"}
      >
        {services.map((service, i) => (
          <ServiceNode key={i} service={service} />
        ))}
      </Tree>
    </div>
  );
};

export default ServicesDesktop;
