import type { bannerTable, merchandiseTable } from "@/db/schema";

export type SelectMerchandise = typeof merchandiseTable.$inferSelect;

export type SelectBanner = typeof bannerTable.$inferSelect;
