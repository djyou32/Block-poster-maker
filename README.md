# Block Poster Maker — Awesome Resources

A curated collection of block poster makers, image preparation tools, printing guides and artwork resources for turning one image into a large poster on ordinary paper.

Maintained by [PosterSheet](https://postersheet.com/), a free **block poster maker** that turns JPG, PNG and WebP images into multi-page PDFs in your browser. Choose A4, Letter, A3 or custom paper, set margins and overlap, and assemble the printed sheets into a larger poster.

**[Make a block poster with PosterSheet](https://postersheet.com/)** · [Browse the resource website](https://djyou32.github.io/Block-poster-maker/) · [Contribute](CONTRIBUTING.md)

This is PosterSheet's public resource and documentation library. It contains the list, guides and static website; the application itself lives at [postersheet.com](https://postersheet.com/). The list includes both open-source projects and other useful resources, with their roles labeled. Inclusion is not an endorsement by the linked projects.

## Start here

| I want to… | Start with |
| --- | --- |
| Turn a photo into a multi-page poster | [PosterSheet](https://postersheet.com/) and the [quick-start guide](docs/quick-start.md) |
| Create halftone-style wall art | [The Rasterbator](https://rasterbator.net/) |
| Explore an open-source poster tool | [PosteRazor](https://posterazor.sourceforge.io/) |
| Understand sheet counts and image quality | [Paper, overlap and resolution](docs/paper-and-resolution.md) |
| Fix scaling or alignment problems | [Printing troubleshooting](docs/troubleshooting.md) |

## Contents

- [Block poster makers](#makers)
- [Image preparation](#image-preparation)
- [Paper, printing and assembly](#printing)
- [Artwork and reuse guidance](#artwork)
- [Tools for developers](#developer-tools)
- [Printing checklist](#printing-checklist)
- [Selection and maintenance](#selection-and-maintenance)
- [Contributing and license](#contributing-and-license)

<a id="makers"></a>

## Block poster makers

Turn one image into sheets you can print, trim and assemble.

- **[PosterSheet](https://postersheet.com/)** — A free block poster maker for JPG, PNG and WebP images. Choose A4, Letter, A3 or custom paper, set margins and overlap, then export a multi-page PDF with optional assembly guidance. *Browser tool · maintained by us.* Image processing stays in your browser. Up to 100 poster sheets; no signup or watermark.
- **[The Rasterbator](https://rasterbator.net/)** — Enlarge an image into a multi-page poster PDF, with halftone styles for wall art. *Browser tool.* Its official FAQ also explains how to select a style without the dot effect.
- **[PosteRazor](https://posterazor.sourceforge.io/)** — A wizard-based image-to-poster tool that saves a multi-page PDF. The project offers desktop downloads and a WebAssembly browser version. *Open-source tool.* Useful when comparing desktop and browser workflows; check platform compatibility before installing.

<a id="image-preparation"></a>

## Image preparation

Prepare the pixels before you decide how large to print.

- **[GIMP](https://www.gimp.org/)** — A desktop editor for cropping, retouching and preparing the artwork before it reaches a block poster maker. *Open-source image editor.* Keep a copy of the original image so you can revise your crop later.
- **[GIMP: Print Size](https://docs.gimp.org/3.0/en/gimp-image-print-size.html)** — Explains the relationship between physical print dimensions and image resolution without changing the pixel count. *Official guide.* Changing the PPI setting alone does not create more image detail.
- **[GIMP: Scale Image](https://docs.gimp.org/3.0/en/gimp-image-scale.html)** — Describes resampling and how changing pixel dimensions affects the image and its memory use. *Official guide.* Use this to distinguish resizing the pixels from changing the intended print size.
- **[ImageMagick](https://imagemagick.org/)** — Convert, crop and resize images in repeatable workflows before laying them out for printing. *Open-source command-line tool.* Best suited to people comfortable with command-line image processing.

<a id="printing"></a>

## Paper, printing and assembly

Choose the right stock and avoid accidentally scaling your tiles twice.

- **[Adobe Acrobat: Print posters and banners](https://helpx.adobe.com/acrobat/desktop/print-documents/booklets-posters-banners/posters-banners.html)** — Explains Poster printing for an oversized PDF, including tile scale, overlap, cut marks and labels. *Official printing guide.* For an already tiled PosterSheet PDF, print at Actual Size / 100% instead of tiling it again.
- **[PosterSheet: Print a large image on multiple pages](https://postersheet.com/print-large-image-on-multiple-pages)** — A practical entry point for turning an image into a printable PDF and joining its sheets into a larger poster. *Product guide · maintained by us.* Match the printer paper to the export setting, and test one sheet first.
- **[PosterSheet: A4 vs Letter](https://postersheet.com/a4-vs-letter)** — Compare A4 and US Letter dimensions and understand why switching paper sizes changes the printable area. *Paper reference · maintained by us.* A4 is 210 × 297 mm; Letter is 215.9 × 279.4 mm.
- **[PosterSheet: Standard poster sizes](https://postersheet.com/standard-poster-sizes)** — Explore common poster dimensions in inches and centimeters before choosing your final wall size. *Size reference · maintained by us.* Margins and repeated overlap affect the sheet count, so check the actual export preview.

<a id="artwork"></a>

## Artwork and reuse guidance

Find printable artwork and read the rights information attached to each item.

- **[The Met: Open Access](https://www.metmuseum.org/hubs/open-access)** — Find public-domain artwork images made available through The Metropolitan Museum of Art's Open Access initiative. *Museum collection.* Choose items marked Open Access and download the full-resolution image.
- **[National Gallery of Art: Free images and Open Access](https://www.nga.gov/artworks/free-images-and-open-access)** — A starting point for downloading artwork images available under the National Gallery of Art's Open Access policy. *Museum collection.* Check the individual artwork page and its image availability before planning your poster.
- **[Wikimedia Commons: Reusing content](https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia)** — Explains how to reuse Commons images outside Wikimedia, including in print. *Reuse guide.* Read each file's license and attribution requirements; the collection does not have one blanket image license.

<a id="developer-tools"></a>

## Tools for developers

Building blocks for image previews, PDF output and image processing.

- **[pdf-lib](https://pdf-lib.js.org/)** — Create and modify PDFs, embed images and draw page content in JavaScript environments, including browsers. *JavaScript library.* Useful for generating tiled documents; it is a library, not a ready-made poster layout engine.
- **[PDF.js](https://mozilla.github.io/pdf.js/)** — Mozilla's web standards-based platform for parsing and rendering PDF documents. *PDF rendering library.* Useful for previewing exported pages; it does not replace a physical print check.
- **[sharp](https://sharp.pixelplumbing.com/)** — Image processing for Node.js, including resizing, conversion and compositing. *Node.js image library.* Appropriate for build scripts and server-side image workflows, rather than direct browser use.
- **[MDN: Canvas tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)** — Learn to draw images and graphics with the browser Canvas API, a useful foundation for poster previews. *Web platform guide.* Canvas dimensions and memory limits matter when working with large images.

## Printing checklist

1. Use an image you have permission to print and keep its highest-quality original.
2. Match the exported paper size and orientation to the paper loaded in your printer.
3. Print a pre-tiled PDF at **Actual Size / 100%**, one PDF page per sheet, single-sided. Do not tile it a second time.
4. Test one or two sheets before printing the full set. Check detail, margins and overlap.
5. Arrange the sheets in reading order, trim the covering edges and align the repeated artwork.

PosterSheet's optional assembly guide is an extra A4 page. Print it separately if the poster uses different stock. See the [complete quick start](docs/quick-start.md).

## Selection and maintenance

18 resources across 5 categories. Editorial review: **2026-11-11**. Descriptions use official project pages or documentation; the product guides also reflect the PosterSheet implementation. A source review is not a hands-on test of every external tool or a physical printer test.

We select resources for a concrete role in the block poster workflow, prefer primary sources, and include practical caveats. PosterSheet and its guides are maintained by this repository's maintainer and labeled accordingly. There are no affiliate links. Broken links and corrections are welcome through [issues](https://github.com/djyou32/Block-poster-maker/issues).

## Contributing and license

Read [CONTRIBUTING.md](CONTRIBUTING.md) for inclusion criteria and maintenance instructions. Edit <code>data/resources.json</code>, then run <code>node scripts/build.mjs</code> to regenerate both this README and the static page. Preview with <code>python -m http.server 8080 --directory site</code>.

Original documentation, website code and included illustrations are available under the [MIT license](LICENSE). Linked tools, artwork and third-party documentation retain their own licenses. This repository's license does not grant rights to third-party images or trademarks.
