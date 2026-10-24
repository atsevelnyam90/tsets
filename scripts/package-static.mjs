import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, renameSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "out");
const artifacts = path.join(root, ".deploy");

for (const required of ["index.html", "404.html", "_next"]) {
  if (!existsSync(path.join(output, required))) {
    throw new Error(`Missing out/${required}; run pnpm build first.`);
  }
}

mkdirSync(artifacts, { recursive: true });
const temporary = mkdtempSync(path.join(artifacts, ".package-"));
const archive = path.join(artifacts, "tsets-cpanel-static.zip");
try {
  // Build a fresh archive so removed routes cannot survive from an older ZIP.
  // Running inside out/ puts index.html directly at the archive root.
  // The server's .htaccess contains cPanel-managed directives and must survive extraction.
  execFileSync("zip", ["-q", "-r", path.join(temporary, "site.zip"), ".", "-x", ".htaccess"], {
    cwd: output,
    stdio: "inherit",
  });
  renameSync(path.join(temporary, "site.zip"), archive);
  console.log(`Static deployment archive: ${archive}`);
  console.log("The archive excludes .htaccess; preserve the server-managed copy.");
  console.log("No files have been uploaded to the hosting server.");
} finally {
  rmSync(temporary, { recursive: true, force: true });
}
