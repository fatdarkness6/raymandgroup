import "dotenv/config";
import { LokaliseApi } from "@lokalise/node-api";
import fs from "fs";

const api = new LokaliseApi({ apiKey: process.env.LOKALISE_TOKEN });
const projectId = process.env.LOKALISE_PROJECT;

async function uploadTranslations() {
  try {
    const fileContent = fs.readFileSync("./locales/fa.json", "utf8");
    const response = await api.files().upload(projectId, {
      data: Buffer.from(fileContent).toString("base64"),
      filename: "fa.json",
      lang_iso: "fa",
      convert_placeholders: true,
      tags: ["auto-upload"],
    });

    console.log("✅ Upload successful:", response);
  } catch (err) {
    console.error("❌ Error uploading file:", err);
  }
}

uploadTranslations();
