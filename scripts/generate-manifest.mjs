import { copyFile, mkdir, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = path.join(projectDir, 'data');
const publicDataDir = path.join(projectDir, 'public', 'data');
await mkdir(publicDataDir, { recursive: true });
const files = (await readdir(dataDir, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.parquet'))
  .map((entry) => entry.name).sort();
const manifest = JSON.stringify({ files }, null, 2);
await writeFile(path.join(dataDir, 'manifest.json'), manifest);
await writeFile(path.join(publicDataDir, 'manifest.json'), manifest);

const existingFiles = await readdir(publicDataDir, { withFileTypes: true });
for (const entry of existingFiles) {
  if (entry.isFile() && entry.name.toLowerCase().endsWith('.parquet') && !files.includes(entry.name)) {
    await unlink(path.join(publicDataDir, entry.name));
  }
}
await Promise.all(files.map((file) => copyFile(path.join(dataDir, file), path.join(publicDataDir, file))));

console.log(`Discovered ${files.length} parquet dataset(s)`);
