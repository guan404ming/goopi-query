"use client";

import { InstagramEmbed } from "react-social-media-embed";

type PostProps = {
  url: string;
  width: number;
};

export function Post({ url, width }: PostProps) {
  return <InstagramEmbed url={url} width={width} />;
}
