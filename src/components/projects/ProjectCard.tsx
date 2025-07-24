import ProjectCarousel from "@/components/projects/Carousel";
import { Project, Tool, Action } from "@/types/projects";
type ProjectCardProps = Project;

const ProjectCard = ({
  title,
  description,
  images,
  actions,
  tools,
}: ProjectCardProps) => {
  return (
    <section
      className="flex flex-col 
      items-start gap-6 mb-8 bg-white p-4 rounded-md border border-gray-200"
    >
      <div className="w-full">
        <ProjectCarousel images={images} />
      </div>

      <div className="w-full text-center md:text-left space-y-4">
        <h3>{title}</h3>
        <div className="text-gray-600">{description}</div>
        {/* tools */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {tools?.map((tool: Tool, i: number) => (
            <div key={i} className="flex flex-row gap-2 items-center">
              <img src={tool.icon} className="w-6 h-6" alt={tool.name} />
              <span className="bg-muted rounded-md px-2 py-1 text-xs font-medium">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {actions && (
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {actions?.map((action: Action, i: number) => (
              <a
                key={i}
                href={action.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded"
              >
                {action.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectCard;
