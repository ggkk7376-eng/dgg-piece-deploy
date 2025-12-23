import type { Block } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const richtext: Block = {
    slug: "richtext",
    labels: {
        singular: {
            en: "Rich Text",
            pl: "Tekst Formatowany",
        },
        plural: {
            en: "Rich Text",
            pl: "Teksty Formatowane",
        },
    },
    fields: [
        {
            name: "content",
            label: {
                en: "Content",
                pl: "Treść",
            },
            type: "richText",
            editor: lexicalEditor({
                features: ({ defaultFeatures }) => [...defaultFeatures],
            }),
            required: true,
        },
    ],
};
