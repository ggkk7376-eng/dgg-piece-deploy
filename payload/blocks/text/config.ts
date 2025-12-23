import type { Block } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const text: Block = {
  slug: "text",
  labels: {
    singular: {
      en: "Text",
      pl: "Tekst",
    },
    plural: {
      en: "Texts",
      pl: "Teksty",
    },
  },
  fields: [
    {
      type: "select",
      name: "variant",
      label: {
        en: "Variant",
        pl: "Wariant",
      },
      options: [
        {
          label: "Body 1",
          value: "p1",
        },
        {
          label: "Body 2",
          value: "p2",
        },
        {
          label: "Body 3",
          value: "p3",
        },
      ],
    },
    // {
    //   name: "richTextContent",
    //   label: {
    //     en: "Content",
    //     pl: "Treść",
    //   },
    //   type: "richText",
    // },
    {
      type: "textarea",
      name: "text",
      label: {
        en: "Legacy Text (Backup)",
        pl: "Tekst (Stary - kopia zapasowa)",
      },
      // admin: {
      //   hidden: true,
      // },
    },
  ],
};
