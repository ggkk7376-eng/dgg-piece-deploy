import {
    type MigrateUpArgs,
    type MigrateDownArgs,
    sql,
} from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_button_type" AS ENUM('dialog', 'link');
   ALTER TABLE "pages_blocks_button" ADD COLUMN "type" "public"."enum_pages_blocks_button_type" DEFAULT 'dialog';
   ALTER TABLE "pages_blocks_button" ADD COLUMN "url" varchar;
  `);
}

export async function down({
    db,
    payload,
    req,
}: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
   ALTER TABLE "pages_blocks_button" DROP COLUMN "url";
   ALTER TABLE "pages_blocks_button" DROP COLUMN "type";
   DROP TYPE "public"."enum_pages_blocks_button_type";
  `);
}
