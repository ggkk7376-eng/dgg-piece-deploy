import type { CollectionConfig } from "payload";

import { unrestricted } from "@/payload/access/unrestricted";
import { section } from "@/payload/blocks/section/config";

export const pages: CollectionConfig = {
  slug: "pages",
  access: {
    read: unrestricted,
  },
  labels: {
    singular: {
      en: "Page",
      pl: "Strona",
    },
    plural: {
      en: "Pages",
      pl: "Strony",
    },
  },
  admin: {
    useAsTitle: "title",
    livePreview: {
      url: ({ data }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
        return data.slug === "home" ? baseUrl : `${baseUrl}/${data.slug}`;
      },
    },
  },
  fields: [
    {
      type: "text",
      name: "title",
      required: true,
      label: {
        en: "Title",
        pl: "Tytuł",
      },
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "text",
      name: "slug",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "text",
      name: "keywords",
      label: {
        en: "Keywords",
        pl: "Słowa kluczowe",
      },
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "textarea",
      name: "description",
      label: {
        en: "Description",
        pl: "Opis",
      },
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "blocks",
      name: "content",
      label: {
        en: "Content",
        pl: "Treść",
      },
      blocks: [section],
    },
  ],
};
