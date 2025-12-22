import type { Block } from "payload";

import { button } from "../button/config";
import { carousel } from "../carousel/config";
import { contactForm } from "../contact-form/config";
import { headline } from "../headline/config";
import { statusAlert } from "../status-alert/config";
import { text } from "../text/config";


export const section: Block = {
  slug: "section",
  // ...
  fields: [
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
      ],
    },
  ],
};
