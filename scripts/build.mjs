import { readFile, writeFile, mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const data = JSON.parse(await readFile(path.join(root, 'data/resources.json'), 'utf8'));
const repo = 'https://github.com/djyou32/Block-poster-maker';
const origin = 'https://djyou32.github.io/Block-poster-maker/';
const product = 'https://postersheet.com/';
const title = 'Block Poster Maker — Awesome Resources & Print Guides';
const description = 'Block poster maker resources: discover tiling tools, image editors, printable artwork and practical guides for printing large posters on A4 or Letter sheets.';
const entries = data.categories.flatMap(c => c.items);
assert.equal(new Set(entries.map(i => i.url)).size, entries.length, 'Duplicate resource URL');
assert.equal(new Set(data.categories.map(c => c.id)).size, data.categories.length, 'Duplicate category');
for (const entry of entries) {
  assert.equal(new URL(entry.url).protocol, 'https:');
  for (const key of ['name', 'description', 'note', 'kind']) assert.ok(entry[key]?.trim(), key);
}
const esc = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
const guideURL = file => `${repo}/blob/main/docs/${file}.md`;

const readme = `# Block Poster Maker — Awesome Resources

A curated collection of block poster makers, image preparation tools, printing guides and artwork resources for turning one image into a large poster on ordinary paper.

Maintained by [PosterSheet](https://postersheet.com/), a free **block poster maker** that turns JPG, PNG and WebP images into multi-page PDFs in your browser. Choose A4, Letter, A3 or custom paper, set margins and overlap, and assemble the printed sheets into a larger poster.

**[Make a block poster with PosterSheet](${product})** · [Browse the resource website](${origin}) · [Contribute](CONTRIBUTING.md)

This is PosterSheet's public resource and documentation library. It contains the list, guides and static website; the application itself lives at [postersheet.com](${product}). The list includes both open-source projects and other useful resources, with their roles labeled. Inclusion is not an endorsement by the linked projects.

## Start here

| I want to… | Start with |
| --- | --- |
| Turn a photo into a multi-page poster | [PosterSheet](${product}) and the [quick-start guide](docs/quick-start.md) |
| Create halftone-style wall art | [The Rasterbator](https://rasterbator.net/) |
| Explore an open-source poster tool | [PosteRazor](https://posterazor.sourceforge.io/) |
| Understand sheet counts and image quality | [Paper, overlap and resolution](docs/paper-and-resolution.md) |
| Fix scaling or alignment problems | [Printing troubleshooting](docs/troubleshooting.md) |

## Contents

${data.categories.map(c => `- [${c.title}](#${c.id})`).join('\n')}
- [Printing checklist](#printing-checklist)
- [Selection and maintenance](#selection-and-maintenance)
- [Contributing and license](#contributing-and-license)

${data.categories.map(c => `<a id="${c.id}"></a>\n\n## ${c.title}\n\n${c.intro}\n\n${c.items.map(i => `- **[${i.name}](${i.url})** — ${i.description} *${i.kind}.* ${i.note}`).join('\n')}`).join('\n\n')}

## Printing checklist

1. Use an image you have permission to print and keep its highest-quality original.
2. Match the exported paper size and orientation to the paper loaded in your printer.
3. Print a pre-tiled PDF at **Actual Size / 100%**, one PDF page per sheet, single-sided. Do not tile it a second time.
4. Test one or two sheets before printing the full set. Check detail, margins and overlap.
5. Arrange the sheets in reading order, trim the covering edges and align the repeated artwork.

PosterSheet's optional assembly guide is an extra A4 page. Print it separately if the poster uses different stock. See the [complete quick start](docs/quick-start.md).

## Selection and maintenance

${entries.length} resources across ${data.categories.length} categories. Editorial review: **${data.reviewed}**. Descriptions use official project pages or documentation; the product guides also reflect the PosterSheet implementation. A source review is not a hands-on test of every external tool or a physical printer test.

We select resources for a concrete role in the block poster workflow, prefer primary sources, and include practical caveats. PosterSheet and its guides are maintained by this repository's maintainer and labeled accordingly. There are no affiliate links. Broken links and corrections are welcome through [issues](${repo}/issues).

## Contributing and license

Read [CONTRIBUTING.md](CONTRIBUTING.md) for inclusion criteria and maintenance instructions. Edit <code>data/resources.json</code>, then run <code>node scripts/build.mjs</code> to regenerate both this README and the static page. Preview with <code>python -m http.server 8080 --directory site</code>.

Original documentation, website code and included illustrations are available under the [MIT license](LICENSE). Linked tools, artwork and third-party documentation retain their own licenses. This repository's license does not grant rights to third-party images or trademarks.
`;

const schema = {
  '@context':'https://schema.org', '@graph':[
    {'@type':'WebSite','@id':`${origin}#website`,name:'Block Poster Maker Resource Library',url:origin,inLanguage:'en'},
    {'@type':'CollectionPage','@id':`${origin}#page`,url:origin,name:title,description,inLanguage:'en',isPartOf:{'@id':`${origin}#website`},mainEntity:{'@id':`${origin}#resources`}},
    {'@type':'ItemList','@id':`${origin}#resources`,name:'Block poster maker resources',numberOfItems:entries.length,itemListElement:entries.map((i,n)=>({'@type':'ListItem',position:n+1,name:i.name,url:i.url}))}
  ]
};
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(description)}">
<link rel="canonical" href="${origin}"><meta name="robots" content="index,follow">
<meta name="theme-color" content="#254f3f">
<link rel="icon" href="assets/favicon.png" type="image/png" sizes="96x96">
<link rel="icon" href="assets/favicon.ico" type="image/x-icon">
<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${origin}"><meta property="og:image" content="${origin}assets/social-card.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Block poster maker: an open resource library by PosterSheet">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${origin}assets/social-card.png">
<link rel="stylesheet" href="assets/style.css"><script src="assets/filter.js" defer></script>
<script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script>
</head>
<body>
<a class="skip" href="#main">Skip to resources</a>
<header class="site-header wrap"><a class="brand" href="${product}"><img src="assets/favicon.png" width="32" height="32" alt=""><span>poster<span class="brand-light">sheet</span>.</span></a><nav aria-label="Main navigation"><a href="${repo}">View on GitHub <span aria-hidden="true">↗</span></a><a class="button small" href="${product}">Make a poster <span aria-hidden="true">↗</span></a></nav></header>
<main id="main">
<section class="hero wrap" aria-labelledby="page-title"><div class="hero-copy"><p class="eyebrow"><span aria-hidden="true">✳</span> THE OPEN RESOURCE LIBRARY</p><h1 id="page-title">Block poster maker <span class="serif-line">resources worth<br> printing.</span></h1><p class="intro">One image. A stack of ordinary sheets. A much bigger idea. Find the tools, artwork and know-how to take your poster from screen to wall.</p><div class="hero-actions"><a class="button" href="#resources">Explore the collection <span aria-hidden="true">↓</span></a><a class="text-link" href="${product}">Try PosterSheet <span aria-hidden="true">↗</span></a></div><p class="hero-meta">${entries.length} handpicked resources <span>·</span> ${data.categories.length} categories <span>·</span> Open to contributions</p></div><figure class="poster-figure"><div class="poster-board"><div class="poster-grid" role="img" aria-label="An illustrated mountain landscape divided into nine poster tiles">${Array.from({length:9},(_,n)=>`<span style="--x:${n%3*50}%;--y:${Math.floor(n/3)*50}%"></span>`).join('')}</div><span class="annotation top">ONE IMAGE, MANY POSSIBILITIES</span><span class="annotation bottom">print. trim. piece it together.</span></div><figcaption>A little paper goes a long way. <span>Illustrative 3 × 3 layout</span></figcaption></figure></section>
<div class="intro-strip"><div class="wrap"><p>Made for home printers.<br><strong>And the people with big ideas.</strong></p><p>A focused collection maintained by <a href="${product}">PosterSheet</a>, the free browser-based block poster maker. Start with a tool, then get the details right.</p></div></div>
<section class="collection wrap" id="resources" aria-labelledby="collection-heading"><aside class="sidebar"><p class="eyebrow">THE COLLECTION</p><h2 id="collection-heading">From pixels<br> to paper.</h2><nav aria-label="Resource categories"><a href="#resources">All resources <span>${entries.length}</span></a>${data.categories.map(c=>`<a href="#${c.id}">${esc(c.title)} <span>${c.items.length}</span></a>`).join('')}</nav><a class="guide-link" href="${guideURL('quick-start')}"><span aria-hidden="true">↗</span> Your first block poster<small>A practical getting-started guide</small></a></aside>
<div class="resource-content"><div class="search-area" hidden><label for="resource-search">Find a resource</label><input id="resource-search" type="search" placeholder="Try PDF, A4, artwork or image editor…"><div class="filters" role="group" aria-label="Filter by category"><button type="button" data-filter="all" aria-pressed="true">All</button>${data.categories.map(c=>`<button type="button" data-filter="${c.id}" aria-pressed="false">${esc(c.title)}</button>`).join('')}</div><p id="result-count" class="result-count" aria-live="polite">${entries.length} resources</p></div>
${data.categories.map((c,n)=>`<section class="resource-section" id="${c.id}" data-category="${c.id}" aria-labelledby="heading-${c.id}"><header class="category-heading"><span class="number">0${n+1}</span><div><h3 id="heading-${c.id}">${esc(c.title)}</h3><p>${esc(c.intro)}</p></div></header><ul class="resource-list">${c.items.map(i=>`<li class="resource"><div class="resource-top"><h4><a href="${esc(i.url)}">${esc(i.name)} <span aria-hidden="true">↗</span></a></h4><span class="kind">${esc(i.kind)}</span></div><p>${esc(i.description)}</p><p class="resource-note">${esc(i.note)}</p></li>`).join('')}</ul></section>`).join('')}
<p class="empty" hidden>No resources match your search. Try another term or choose All.</p></div></section>
<section class="print-guide" id="print-guide" aria-labelledby="print-guide-heading"><div class="wrap"><div><p class="eyebrow">BEFORE YOU PRESS PRINT</p><h2 id="print-guide-heading">A few small checks.<br>A better big picture.</h2><a href="${guideURL('quick-start')}" class="text-link">Read the complete print guide ↗</a></div><ol><li><strong>Match your paper.</strong><p>Use the same size and orientation in the export and your printer settings.</p></li><li><strong>Keep it at 100%.</strong><p>Print an already tiled PDF at Actual Size, one page per sheet. Skip the extra tiling.</p></li><li><strong>Test a sheet. Then assemble.</strong><p>Check detail and overlap before the full run. Trim the covering edges and align the repeated artwork.</p></li></ol></div></section>
<section class="guides wrap" aria-label="More printing documentation"><a href="${guideURL('paper-and-resolution')}"><span class="eyebrow">UNDERSTAND THE NUMBERS</span><h2>Paper & resolution <span aria-hidden="true">↗</span></h2><p>Margins, overlap, sheet counts and what PPI actually tells you.</p></a><a href="${guideURL('troubleshooting')}"><span class="eyebrow">WHEN THE PRINT ISN’T RIGHT</span><h2>Fix the common issues <span aria-hidden="true">↗</span></h2><p>Scaling, white space, clipped edges and sheets that will not align.</p></a></section>
<section class="contribute wrap"><div><p class="eyebrow">A COLLECTION THAT CAN GROW</p><h2>Know a useful resource?</h2><p>Suggest an official link, explain where it fits and share one practical tip.</p></div><a class="button" href="${repo}/blob/main/CONTRIBUTING.md">Contribute on GitHub <span aria-hidden="true">↗</span></a></section>
</main><footer class="wrap footer"><div><a class="brand" href="${product}">postersheet.</a><p>An open resource library for block poster makers.<br>Original content and website code: <a href="${repo}/blob/main/LICENSE">MIT license</a>.</p></div><div><p>Editorial review: <time datetime="${data.reviewed}">${data.reviewed}</time></p><p>PosterSheet entries are maintained by us. No affiliate links.<br>Linked projects and artwork retain their own licenses.</p><a href="${repo}/issues">Report a broken link</a></div></footer>
</body></html>
`;
await mkdir(path.join(root,'site'),{recursive:true});
await writeFile(path.join(root,'README.md'),readme);
await writeFile(path.join(root,'site/index.html'),html);
await writeFile(path.join(root,'site/sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}</loc><priority>1.0</priority></url></urlset>\n`);
await writeFile(path.join(root,'site/robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${origin}sitemap.xml\n`);
await writeFile(path.join(root,'site/.nojekyll'),'');
console.log(`Built README and static page: ${entries.length} resources, ${data.categories.length} categories.`);
