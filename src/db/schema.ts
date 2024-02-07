import { pgTable, serial } from "drizzle-orm/pg-core";

// user related

export const merchantTable = pgTable(
  "merchant_table",
  {
    id: serial("id").primaryKey(),
  },
  // (table) => ({
  //   emailIndex: index("email_index").on(table.email),
  // }),
);
