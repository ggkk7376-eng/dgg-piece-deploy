import type { Block } from "payload";

import { button } from "../button/config";
import { carousel } from "../carousel/config";
import { contactForm } from "../contact-form/config";
import { headline } from "../headline/config";
import { statusAlert } from "../status-alert/config";
import { text } from "../text/config";
import { offer } from "../offer/config";
import { gallery } from "../gallery/config";
import { download } from "../download/config";


export const section: Block = {
  slug: "section",
  // ...
  fields: [
    {
      name: "slug",
      type: "text",
      label: "ID (kotwica - np. contact)",
      admin: {
        placeholder: "np. contact (bez #)",
      },
    },
    {
      type: "blocks",
      name: "children",
      // ...
      blocks: [
        button,
        carousel,
        headline,
        statusAlert,
        text,
        contactForm,
        offer,
        gallery,
        download,
      ],
    },
  ],
};
