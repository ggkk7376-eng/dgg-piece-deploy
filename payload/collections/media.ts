import type { CollectionConfig } from "payload";

import { unrestricted } from "@/payload/access/unrestricted";

export const media: CollectionConfig = {
  slug: "media",
  access: {
    read: unrestricted,
  },
  upload: {
    staticDir: "media",
    imageSizes: [
      {
        name: "carouselImage",
        height: 35,
      },
    ],
  },
  fields: [
    {
      type: "text",
      name: "alt",
      label: {
        en: "Alt text",
        pl: "Tekst alternatywny",
      },
    },
    {
      name: "category",
      type: "select",
      label: {
        en: "Category",
        pl: "Kategoria",
      },
      options: [
        { label: "Produkty (Oferta)", value: "products" },
        { label: "Realizacje", value: "projects" },
        { label: "Dokumenty", value: "documents" },
        { label: "Ogólne", value: "general" },
      ],
      admin: {
        position: "sidebar",
      },
    },
  ],
};
