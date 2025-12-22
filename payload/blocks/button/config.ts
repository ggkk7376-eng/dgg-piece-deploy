import type { Block } from "payload";

export const button: Block = {
  slug: "button",
  labels: {
    singular: {
      en: "Button",
      pl: "Przycisk",
    },
    plural: {
      en: "Buttons",
      pl: "Przyciski",
    },
  },
  fields: [
    {
      type: "text",
      name: "label",
      label: {
        en: "Label",
        pl: "Etykieta",
      },
      required: true,
    },
    {
      type: "select",
      name: "type",
      label: "Typ",
      defaultValue: "dialog",
      options: [
        {
          label: "Dialog",
          value: "dialog",
        },
        {
          label: "Link",
          value: "link",
        },
      ],
    },
    {
      type: "relationship",
      name: "dialog",
      label: {
        en: "Dialog",
        pl: "Dialog",
      },
      relationTo: "dialogs",
      hasMany: false,
      admin: {
        condition: (_, siblingData) => siblingData?.type === "dialog",
        description: {
          en: "If set, pressing the button will open the selected dialog.",
          pl: "Jeśli ustawione, kliknięcie przycisku otworzy wybrany dialog.",
        },
      },
    },
    {
      type: "text",
      name: "url",
      label: "URL",
      admin: {
        condition: (_, siblingData) => siblingData?.type === "link",
        description: "np. #contact lub https://google.com",
      },
    },
  ],
};
