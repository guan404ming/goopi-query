"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import type { SelectMerchandise } from "@/lib/type";

import { AspectRatio } from "./ui/aspect-ratio";

type MerchandiseProps = {
  merchandise: SelectMerchandise;
};

export function Merchandise({ merchandise }: MerchandiseProps) {
  const router = useRouter();
  return (
    <Card
      className="cursor-pointer"
      onClick={() => router.push(`merchandise/${merchandise.id}`)}
    >
      <AspectRatio ratio={1 / 1}>
        <Image
          width={"1200"}
          height={"1200"}
          src={merchandise.picUrl}
          alt={merchandise.name}
          className="w-full rounded-md object-cover"
        />
      </AspectRatio>
    </Card>
  );
}
