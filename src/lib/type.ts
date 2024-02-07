import type { merchandiseTable } from "@/db/schema";

export type SelectMerchandise = typeof merchandiseTable.$inferSelect;
