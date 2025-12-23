import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
    await payload.db.drizzle.execute(sql`
   CREATE TABLE "pages_blocks_richtext" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );

  CREATE INDEX "pages_blocks_richtext_order_idx" ON "pages_blocks_richtext" USING btree ("_order");
  CREATE INDEX "pages_blocks_richtext_parent_id_idx" ON "pages_blocks_richtext" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_richtext_path_idx" ON "pages_blocks_richtext" USING btree ("_path");
  
  ALTER TABLE "pages_blocks_richtext" ADD CONSTRAINT "pages_blocks_richtext_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  `)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
    await payload.db.drizzle.execute(sql`
   DROP TABLE IF EXISTS "pages_blocks_richtext";
  `)
}
