import { index, integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const merchandiseTable = pgTable(
  "merchandise_table",
  {
    id: serial("id").primaryKey(),
    color: varchar("color").notNull(),
    name: varchar("name").notNull(),
    picUrl: varchar("pic_url").notNull(),
    price: integer("price").notNull(),
  },
  (table) => ({
    nameIndex: index("name_index").on(table.name),
  }),
);

export const postTable = pgTable("post_table", {
  id: serial("id").primaryKey(),
  merchandiseId: integer("merchandise_id")
    .unique()
    .notNull()
    .references(() => merchandiseTable.id, { onUpdate: "cascade" }),
  postUrl: varchar("post_url").notNull(),
});
