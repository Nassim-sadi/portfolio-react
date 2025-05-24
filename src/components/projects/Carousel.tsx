import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectCarousel = ({ images }: { images: string[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((image, i) => (
          <CarouselItem key={i}>
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* put buttons in bottom of carousel */}
      {/* Button wrapper at bottom center, inside image */}
      <div className="flex gap-4 w-full justify-center mt-2">
        <CarouselPrevious className="carousel-btn" />
        <CarouselNext className="carousel-btn" />
      </div>
    </Carousel>
  );
};

export default ProjectCarousel;
