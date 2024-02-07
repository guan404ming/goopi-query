"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { SelectBanner } from "@/lib/type";

import { AspectRatio } from "./ui/aspect-ratio";

type BannerProps = {
  bannerList: SelectBanner[];
};

export function Banner({ bannerList }: BannerProps) {
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
        {bannerList.map((_, index) => (
          <CarouselItem key={index}>
            <Card className="-mx-1">
              <AspectRatio ratio={3 / 1}>
                <Image
                  width={"1200"}
                  height={"1200"}
                  src={bannerList[index].bannerUrl}
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
