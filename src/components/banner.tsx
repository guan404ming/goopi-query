"use client";

import Autoplay from "embla-carousel-autoplay";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function Banner() {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="-mx-1">
              <img
                src="https://shoplineimg.com/597d718359d52417b70007f8/65ba1b1d5ef88400147abbb6/2160x.webp?source_format=jpg"
                alt="gof-p5"
              />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
