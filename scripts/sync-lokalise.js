import "dotenv/config";
import { LokaliseApi } from "@lokalise/node-api";
import fs from "fs";
import path from "path";
import AdmZip from "adm-zip";
import fetch from "node-fetch";

const api = new LokaliseApi({ apiKey: process.env.LOKALISE_TOKEN });
const projectId = process.env.LOKALISE_PROJECT;
const outputDir = path.resolve("./locales");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadTranslations() {
  try {
    const downloadResponse = await api.files().download(projectId, {
      format: "json",
      original_filenames: true,
      filter_langs: ["en", "fa", "de"],
      directory_prefix: "",
    });

    const zipUrl = downloadResponse.bundle_url;
    const res = await fetch(zipUrl);
    const buffer = await res.arrayBuffer();
    const zip = new AdmZip(Buffer.from(buffer));
    zip.extractAllTo(outputDir, true);

    console.log("Translations downloaded successfully!");
  } catch (err) {
    console.error("Error downloading translations:", err);
  }
}

downloadTranslations();
