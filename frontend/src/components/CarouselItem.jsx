/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";

export default function CarouselItem({ imgSrc, title, description }) {
  return (
    <div className="relative h-full w-full">
      <img
        src={imgSrc}
        alt="carousel_1"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
}
