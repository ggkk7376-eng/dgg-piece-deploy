import type { Block } from "payload";

export const offer: Block = {
    slug: "offer",
    labels: {
        singular: {
            en: "Offer",
            pl: "Oferta",
        },
        plural: {
            en: "Offers",
            pl: "Oferty",
        },
    },
    fields: [
        {
            name: "items",
            type: "array",
            label: {
                en: "Items",
                pl: "Elementy",
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
                {
                    name: "title",
                    type: "text",
                    label: {
                        en: "Title",
                        pl: "Tytuł",
                    },
                },
                {
                    name: "description",
                    type: "textarea",
                    label: {
                        en: "Description",
                        pl: "Opis",
                    },
                },
                {
                    name: "price",
                    type: "text",
                    label: {
                        en: "Price",
                        pl: "Cena",
                    },
                },
            ],
        },
    ],
};
