"use client";

import { InstagramEmbed } from "react-social-media-embed";

import { Badge } from "@/components/ui/badge";

export default function MerchantPage() {
  return (
    <main className="z-10 flex min-h-screen w-full flex-col items-center pt-16 overflow-x-hidden">
      <div className="flex max-md:flex-col">
        <img
          src="https://shoplineimg.com/597d718359d52417b70007f8/64fdcd97d5bb54368adaaf4f/800x.webp?source_format=jpg"
          alt="gof-p5"
        />

        <div className="space-y-2 p-6">
          <h1 className="text-xl font-semibold">
            “Gof-P5” Hyperbolic Utility Track Pants
          </h1>
          <div className="space-x-2 text-lg">
            <Badge>l-grey</Badge>
            <Badge>l-grey</Badge>
            <Badge>l-grey</Badge>
          </div>
          <p className="border-b-2 pb-4 text-lg">$3980</p>
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
