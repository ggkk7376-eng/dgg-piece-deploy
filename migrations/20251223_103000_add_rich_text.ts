import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
    await payload.db.drizzle.execute(sql`
   ALTER TABLE "pages_blocks_text" ADD COLUMN "rich_text_content" jsonb;
  `)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
    await payload.db.drizzle.execute(sql`
   ALTER TABLE "pages_blocks_text" DROP COLUMN IF EXISTS "rich_text_content";
  `)
}
