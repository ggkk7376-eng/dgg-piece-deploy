import type { FC } from "react";

import { Button } from "@/payload/blocks/button/component";
import { Carousel } from "@/payload/blocks/carousel/component";
import { ContactForm } from "@/payload/blocks/contact-form/component";
import { Headline } from "@/payload/blocks/headline/component";
import { Section } from "@/payload/blocks/section/component";
import { StatusAlert } from "@/payload/blocks/status-alert/component";
import { Text } from "@/payload/blocks/text/component";
import { Offer } from "@/payload/blocks/offer/component";
import { Gallery } from "@/payload/blocks/gallery/component";
import { Download } from "@/payload/blocks/download/component";
import type { Config } from "@/payload-types";

type BlocksProps = Config["blocks"][keyof Config["blocks"]];

const blockComponents: Record<string, any> = {
  button: Button,
  carousel: Carousel,
  headline: Headline,
  section: Section,
  "status-alert": StatusAlert,
  text: Text,
  "contact-form": ContactForm,
  offer: Offer,
  gallery: Gallery,
  download: Download,
};

export function Block(props: BlocksProps) {
  const Comp = blockComponents[props.blockType] as FC<BlocksProps>;
  return <Comp {...props} />;
}
