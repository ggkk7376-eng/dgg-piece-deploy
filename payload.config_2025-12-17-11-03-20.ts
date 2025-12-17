import { postgresAdapter } from "@payloadcms/db-postgres";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { en } from "@payloadcms/translations/languages/en";
import { pl } from "@payloadcms/translations/languages/pl";
import { buildConfig } from "payload";
import sharp from "sharp";

import { env } from "./lib/env";
import { button } from "./payload/blocks/button/config";
import { carousel } from "./payload/blocks/carousel/config";
import { contactForm } from "./payload/blocks/contact-form/config";
import { headline } from "./payload/blocks/headline/config";
import { section } from "./payload/blocks/section/config";
import { statusAlert } from "./payload/blocks/status-alert/config";
import { text } from "./payload/blocks/text/config";
import { dialogs } from "./payload/collections/dialogs";
import { media } from "./payload/collections/media";
import { pages } from "./payload/collections/pages";
import { users } from "./payload/collections/users";
import { settings } from "./payload/globals/settings";

const config = buildConfig({
  sharp,
  editor: lexicalEditor(),
  admin: {
    user: users.slug,
  },
  globals: [settings],
  collections: [pages, media, users, dialogs],
  blocks: [button, carousel, contactForm, headline, statusAlert, text, section],
  secret: env.PAYLOAD_SECRET,
  db: postgresAdapter({
    migrationDir: "./migrations",
    push: true,
    pool: {
      connectionString: env.DATABASE_URL,
    },
  }),
  i18n: {
    fallbackLanguage: "pl",
    supportedLanguages: {
      en,
      pl,
    },
  },
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(env.VERCEL_READ_WRITE_TOKEN),
      collections: {
        media: true,
      },
      token: env.VERCEL_READ_WRITE_TOKEN,
    }),
  ],
});

export default config;
