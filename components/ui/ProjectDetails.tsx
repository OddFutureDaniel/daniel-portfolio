import { GridContainer } from "./GridContainer";
import { Carousel } from "./Carousel";
import { useIsMobile } from "./useIsMobile";
import { PROJECTS } from "@/components/ui/projects";

export function ProjectDetails({ projectId }: { projectId: number }) {
  const isMobile = useIsMobile();
  const project = PROJECTS[projectId];

  if (!project) return null;

  return (
    <GridContainer className="!mt-8">
      <div className="col-span-12">
        <Carousel
          items={project.carousel.items}
          frameHeight={project.carousel.frameHeight}
          mobileFrameHeight={project.carousel.mobileFrameHeight}
          isMobile={isMobile}
        />
      </div>

      <div className="col-span-5 mid:col-span-8 mobile:col-span-10 !mb-8 !mx-4">
        <p>{project.description}</p>
        {isMobile ? <p className="mt-4">Technology: {project.tech}</p> : null}
      </div>
    </GridContainer>
  );
}