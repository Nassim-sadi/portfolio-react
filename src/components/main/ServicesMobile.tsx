import ServiceCard from "@/components/main/ServiceCard";
import { Service } from "@/types/services";
const ServiceMobile = ({
  services,
  level = 0,
}: {
  services: Service[];
  level?: number;
}) => (
  <>
    {services.map((service, i) => (
      <div key={i} style={{ paddingLeft: `${level * 16}px` }} className="mb-4">
        <ServiceCard service={service} />
        {service.Children && (
          <ServiceMobile services={service.Children} level={level + 1} />
        )}
      </div>
    ))}
  </>
);

export default ServiceMobile;
