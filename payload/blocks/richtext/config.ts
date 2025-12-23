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
        // {
        //     name: "content",
        //     label: {
        //         en: "Content",
        //         pl: "Treść (Edytor Wizualny)",
        //     },
        //     type: "richText",
        // },
        {
            name: "debugHtml",
            label: "Treść (Nieformatowana/HTML - Awaryjne)",
            type: "textarea",
            admin: {
                description: "Użyj tego pola, jeśli edytor graficzny powyżej nie działa. Możesz tu wpisać tekst lub kod HTML.",
            },
        },
    ],
};
