#!/usr/bin/env node
/**
 * Prepends sidebar_position frontmatter to topic .md files.
 * Reads the step order from each section's README.md table.
 * Skips files that already have frontmatter.
 * Skips README.md files (they are category index pages).
 *
 * Usage: node scripts/add-frontmatter.js
 */

const fs = require('fs');
const path = require('path');

const topicsDir = path.join(__dirname, '..', 'topics');

const sections = fs
  .readdirSync(topicsDir)
  .filter(d => fs.statSync(path.join(topicsDir, d)).isDirectory())
  .sort();

let added = 0;
let skipped = 0;

for (const section of sections) {
  const sectionDir = path.join(topicsDir, section);
  const readmePath = path.join(sectionDir, 'README.md');

  if (!fs.existsSync(readmePath)) {
    console.log(`WARN: No README.md in ${section}`);
    continue;
  }

  const readme = fs.readFileSync(readmePath, 'utf8');

  // Match table rows: | N | [Topic name](filename.md) | ... |
  const tableRowRegex = /\|\s*(\d+)\s*\|\s*\[([^\]]+)\]\(([^)]+\.md)\)/g;
  const positionMap = {};
  let match;

  while ((match = tableRowRegex.exec(readme)) !== null) {
    const [, step, , filename] = match;
    // Only map local filenames (no path separators = no cross-section links)
    if (!filename.includes('/') && !filename.includes('\\')) {
      positionMap[filename] = parseInt(step, 10);
    }
  }

  if (Object.keys(positionMap).length === 0) {
    console.log(`WARN: No table rows parsed in ${section}/README.md`);
    continue;
  }

  for (const [filename, position] of Object.entries(positionMap)) {
    const filePath = path.join(sectionDir, filename);

    if (!fs.existsSync(filePath)) {
      console.log(`WARN: File not found — ${path.relative(process.cwd(), filePath)}`);
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    if (content.startsWith('---')) {
      console.log(`SKIP (frontmatter exists): ${path.relative(process.cwd(), filePath)}`);
      skipped++;
      continue;
    }

    const newContent = `---\nsidebar_position: ${position}\n---\n${content}`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`ADD [${position}] ${path.relative(process.cwd(), filePath)}`);
    added++;
  }
}

console.log(`\nDone. Added: ${added}  Skipped: ${skipped}`);
