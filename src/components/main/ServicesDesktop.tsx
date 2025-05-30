import { Service } from "@/types/services";
import { Tree, TreeNode } from "react-organizational-chart";

import ServiceCard from "@/components/main/ServiceCard";

const ServiceNode = ({ service }: { service: Service }) => {
  return (
    <TreeNode label={<ServiceCard service={service} />}>
      {service.Children?.map((child: Service, i: number) => (
        <ServiceNode key={i} service={child} />
      ))}
    </TreeNode>
  );
};

const ServicesDesktop = ({ services }: { services: Service[] }) => {
  return (
    <div className="flex flex-col">
      <Tree
        label={
          <div className="text-primary font-semibold text-xl">Services</div>
        }
        lineWidth={"2px"}
        lineColor={"#4B5563"}
        lineBorderRadius={"12px"}
        lineHeight="3rem"
      >
        {services.map((service, i) => (
          <ServiceNode key={i} service={service} />
        ))}
      </Tree>
    </div>
  );
};

export default ServicesDesktop;
