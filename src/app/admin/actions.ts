"use server";

import { revalidatePath } from "next/cache";
import { adminDb } from "@/lib/pulse-server";

const text = (fd: FormData, key: string) => String(fd.get(key) ?? "").trim();

export async function createCompany(fd: FormData) {
  const name = text(fd, "name");
  if (!name) return;
  const db = adminDb();
  const { data, error } = await db.from("ct_companies").insert({ name }).select("id").single();
  if (error) throw error;
  await insertTeams(data.id, text(fd, "teams"));
  revalidatePath("/admin");
}

export async function addTeams(fd: FormData) {
  await insertTeams(text(fd, "company_id"), text(fd, "teams"));
  revalidatePath("/admin");
}

async function insertTeams(companyId: string, raw: string) {
  const names = [...new Set(raw.split(/[\n,;]/).map((s) => s.trim()).filter(Boolean))];
  if (!companyId || !names.length) return;
  const { error } = await adminDb()
    .from("ct_teams")
    .upsert(names.map((name) => ({ company_id: companyId, name })), { onConflict: "company_id,name", ignoreDuplicates: true });
  if (error) throw error;
}

export async function createOccasion(fd: FormData) {
  const company_id = text(fd, "company_id");
  if (!company_id) return;
  const row: Record<string, string> = { company_id };
  const date = text(fd, "date");
  const label = text(fd, "label");
  if (date) row.occasion_date = date;
  if (label) row.label = label;
  const { error } = await adminDb().from("ct_occasions").insert(row);
  if (error) throw error;
  revalidatePath("/admin");
}

export async function setOccasionActive(fd: FormData) {
  const { error } = await adminDb()
    .from("ct_occasions")
    .update({ active: text(fd, "active") === "true" })
    .eq("id", text(fd, "id"));
  if (error) throw error;
  revalidatePath("/admin");
}
