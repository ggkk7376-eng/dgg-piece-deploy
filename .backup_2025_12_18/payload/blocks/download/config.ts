import type { Block } from "payload";

export const download: Block = {
    slug: "download",
    labels: {
        singular: {
            en: "Download",
            pl: "Pliki do pobrania",
        },
        plural: {
            en: "Downloads",
            pl: "Pliki do pobrania",
        },
    },
    fields: [
        {
            name: "files",
            type: "array",
            label: {
                en: "Files",
                pl: "Pliki",
            },
            fields: [
                {
                    name: "file",
                    type: "upload",
                    relationTo: "media",
                    label: {
                        en: "File",
                        pl: "Plik",
                    },
                    required: true,
                },
                {
                    name: "label",
                    type: "text",
                    label: {
                        en: "Label",
                        pl: "Etykieta",
                    },
                },
            ],
        },
    ],
};
