import type { Block } from "payload";

export const gallery: Block = {
    slug: "gallery",
    labels: {
        singular: {
            en: "Gallery",
            pl: "Galeria",
        },
        plural: {
            en: "Galleries",
            pl: "Galerie",
        },
    },
    fields: [
        {
            name: "items",
            type: "array",
            label: {
                en: "Images",
                pl: "Zdjęcia",
            },
            fields: [
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    label: {
                        en: "Image",
                        pl: "Zdjęcie",
                    },
                },
            ],
        },
    ],
};
