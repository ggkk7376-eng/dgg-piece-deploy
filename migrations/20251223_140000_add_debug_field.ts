import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
    await payload.db.drizzle.execute(sql`
   ALTER TABLE "pages_blocks_richtext" ADD COLUMN "debug_html" varchar;
  `)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
    await payload.db.drizzle.execute(sql`
   ALTER TABLE "pages_blocks_richtext" DROP COLUMN IF EXISTS "debug_html";
  `)
}
