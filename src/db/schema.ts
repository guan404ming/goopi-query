import { index, integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const merchantTable = pgTable(
  "merchant_table",
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
  merchantId: integer("merchant_id")
    .unique()
    .notNull()
    .references(() => merchantTable.id, { onUpdate: "cascade" }),
  postUrl: varchar("post_url").notNull(),
});
