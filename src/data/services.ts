import { businessServices } from "./business";
import type { Localized } from "@/i18n/config";
export type Service = { index: string; slug: string; title: Localized; description: Localized; items: Localized<string[]> };
export const services: Service[] = businessServices;
export const addOns = ["Photography", "AI Content", "Brand Websites", "Workflow Automation", "Custom Apps"];
