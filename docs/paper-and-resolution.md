# Paper size, overlap and image resolution

[Back to the resource list](../README.md) · [Make a block poster](https://postersheet.com/)

## Paper is not the same as printable area

| Paper | Width × height, portrait | Typical use |
| --- | --- | --- |
| A4 | 210 × 297 mm | Home and office printers in many countries |
| US Letter | 215.9 × 279.4 mm (8.5 × 11 in) | Home and office printers in the US and Canada |
| A3 | 297 × 420 mm | Printers that support larger sheets |

Check your printer's supported paper sizes and non-printable margins. Do not assume borderless output. See [A4 vs Letter](https://postersheet.com/a4-vs-letter) for the size comparison.

## How the assembled dimensions are calculated

For one axis, with all values in millimeters:

```text
usable size = paper size - 2 × margin
tile advance = usable size - overlap
assembled extent = tile count × tile advance + overlap
```

Example: three A4 portrait columns, three rows, a 7 mm margin on each side and a 10 mm overlap:

```text
width  = 3 × (210 - 14 - 10) + 10 = 568 mm
height = 3 × (297 - 14 - 10) + 10 = 829 mm
```

That is a 56.8 × 82.9 cm grid made from nine sheets. The image is contained within that grid, so its printed area can be smaller when aspect ratios differ. In target-size mode, the last tiles can be partial; use the actual preview to confirm dimensions.

## Pixels, PPI and printer DPI

Image PPI is the number of source pixels per printed inch. Printer DPI describes physical dots made by the printer; these numbers are not interchangeable. GIMP's [Print Size documentation](https://docs.gimp.org/3.0/en/gimp-image-print-size.html) explains the distinction.

```text
effective PPI = image width in pixels / printed image width in inches
```

A 3,000-pixel-wide image printed 20 inches wide has 150 PPI. This calculation describes sampling density, not a guarantee of sharpness. Viewing distance, image detail, paper and the printer all matter. Print a representative tile at the final scale before committing to the whole poster.

Changing only the PPI metadata does not add pixels. Resampling can add pixels but cannot recover missing original detail. For line art and text, preserve a high-resolution source before exporting the image you feed into the poster tool.

## Margin, overlap and trim marks

- **Margin:** space reserved around the image to keep printing inside the printer's reachable area.
- **Overlap:** repeated artwork shared by adjacent pages to make alignment easier.
- **Trim marks:** guides indicating where to cut; they need enough margin to remain printable.

Before a large run, check that the selected overlap is smaller than the usable width and height. A larger overlap consumes more paper for the same finished area.
