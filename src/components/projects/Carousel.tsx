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
              src={`${import.meta.env.BASE_URL}${image}`}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-4 w-full justify-center mt-2">
        <CarouselPrevious className="carousel-btn" />
        <CarouselNext className="carousel-btn" />
      </div>
    </Carousel>
  );
};

export default ProjectCarousel;
