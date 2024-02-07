"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import type { SelectMerchant } from "@/lib/type";

import { AspectRatio } from "./ui/aspect-ratio";

type MerchantProps = {
  merchant: SelectMerchant;
};

export function Merchant({ merchant }: MerchantProps) {
  const router = useRouter();
  return (
    <Card
      className="cursor-pointer"
      onClick={() => router.push(`merchant/${merchant.id}`)}
    >
      <AspectRatio ratio={1 / 1}>
        <Image
          width={"100"}
          height={"100"}
          src={merchant.picUrl}
          alt="Image"
          className="w-full rounded-md object-cover"
        />
      </AspectRatio>
    </Card>
  );
}
