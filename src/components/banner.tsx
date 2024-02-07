"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { AspectRatio } from "./ui/aspect-ratio";

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
              <AspectRatio ratio={3 / 1}>
                <Image
                  width={"1200"}
                  height={"1200"}
                  src={
                    "https://shoplineimg.com/597d718359d52417b70007f8/65ba1b1d5ef88400147abbb6/1296x.webp?source_format=jpg"
                  }
                  alt="banner"
                  className="w-full rounded-md object-cover"
                />
              </AspectRatio>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
