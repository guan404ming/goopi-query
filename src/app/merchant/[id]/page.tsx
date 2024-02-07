"use client";

import { InstagramEmbed } from "react-social-media-embed";

import { Badge } from "@/components/ui/badge";

export default function MerchantPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  console.log(id);

  return (
    <main className="z-10 flex min-h-screen w-full flex-col items-center overflow-x-hidden pt-16">
      <div className="flex max-md:flex-col">
        <img
          src="https://shoplineimg.com/597d718359d52417b70007f8/64fdcd97d5bb54368adaaf4f/800x.webp?source_format=jpg"
          alt="gof-p5"
        />

        <div className="space-y-2 p-6">
          <h1 className="text-xl font-semibold">
            “Gof-P5” Hyperbolic Utility Track Pants
          </h1>
          <div className="text-md flex space-x-2 border-b-2 pb-6">
            <Badge>l-grey</Badge>
            <Badge>$3980</Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <InstagramEmbed
          url="https://www.instagram.com/p/C26nSewJAsC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={330}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C26nSewJAsC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C26nSewJAsC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C26nSewJAsC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />

        <InstagramEmbed
          url="https://www.instagram.com/p/C26nSewJAsC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
      </div>
    </main>
  );
}
