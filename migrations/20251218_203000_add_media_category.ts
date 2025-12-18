
import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
    await payload.db.drizzle.execute(sql`
   CREATE TYPE "public"."enum_media_category" AS ENUM('products', 'projects', 'documents', 'general');
   ALTER TABLE "media" ADD COLUMN "category" "public"."enum_media_category";
  `)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
    await payload.db.drizzle.execute(sql`
   ALTER TABLE "media" DROP COLUMN IF EXISTS "category";
   DROP TYPE IF EXISTS "public"."enum_media_category";
  `)
}
