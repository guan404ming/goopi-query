import type { merchantTable } from "@/db/schema";

export type SelectMerchant = typeof merchantTable.$inferSelect;
