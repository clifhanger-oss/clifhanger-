# Product Catalog Audit — 2026-07-08

Scope: all 98 products (95 Edelrid/Red Chili from the DWB 2026 dealer catalogs + 3 TENDON
from mytendon.com). Method: script-driven checks only — no hand-verified claims.
Scripts live in the extraction pipeline; results in `catalog-review.xlsx`.

## Checks run
1. **Integrity** — required fields, garbage characters, HTML residue, truncation,
   duplicate codes, image files exist and are real images.
2. **Provenance (page level)** — every description sentence, feature, and spec value
   must appear in the raw captured source text (PDF page text / fetched HTML).
3. **Provenance (segment level)** — the description must appear in *this product's own
   segment* of the page (between its article code and the next product's code), which
   catches data borrowed from a neighbouring product on shared pages.
4. **Visual image audit** — labeled contact sheets of all 98 product photos reviewed
   against product names.

## Final result
- **Descriptions: 329/329 sentences traceable. Features: 363/363. Specs: 780/781.**
- The one remaining spec flag is `72198 Chalk Bag Ambassador II — Material`: the PDF
  itself contains the typo "Polaymide"; the site uses the corrected "Polyamide". Kept.

## Defects found and FIXED during the audit
| Code | Problem | Fix |
|---|---|---|
| 8271 → **88271 Axiom** | Client list dropped a digit; "8271" matched a Kiwi carabiner page and shipped Kiwi's data | Product replaced with the real 88271 Axiom (p136 of Sport catalog), data re-extracted from its own segment |
| 71762 Bud | Categorized as Chalk Bag; it is a belay/abseil device (EN 15151-2). Photo showed the Nano Jul (shared page) | Category → Belay Devices; correct figure-8 photo re-extracted |
| 71879 Hudson Hammer | Photo showed a hand ascender (shared page) | Correct hammer photo |
| 84037 Cupid Swivel Mini | Photo showed neighbouring product | Correct swivel photo |
| 88253 Hand Cruiser Left | Photo showed neighbouring product | Correct left-hand ascender photo |
| 72177 Boulder Bag Herkules | Photo showed Sit Start III case | Correct bucket-bag photo |
| 73470 Rope Tooth | Photo showed Liquid Chalk tube | Correct knife photo |
| 72025 Rescue Canyoning Knife | Photo showed Liquid Chalk tube | Correct knife photo |
| 85404 Pike Rescue Double | Photo duplicated 85403 single | Correct double-sheave photo |
| 73731 Antitwist + 8 small accessories | Largest-image heuristic grabbed neighbours on shared pages | Re-extracted by proximity to the article code |
| 73840 Ohmega | One sentence was auto-completed past a page break ("…falls into the device.") | Description truncated to the last fully captured sentence |
| 73763 / 73764 RFID | "RFID: Yes" spec row was inferred (not printed in the spec table) | Moved to attributes (RFID is in the product name/description) |

## Known characteristics (NOT defects)
- Six accessories (Screwlinks, Pure sixpacks, Rope Tooth, Hudson Hammer, Kiwi Captive)
  have one-line descriptions — that is their complete copy in the catalog.
- Accessory photos are natively small in the catalog (~235×288) — sharp at card size.
- 85214 Kiwi Captive genuinely has no printed spec table.

## Round 2 (client feedback: miscategorized products, repeated images)
**Both confirmed and fixed.**

*Images* — 22 groups of products shared the same photo (e.g. Flux/Neelix/Spoc all showed
one pulley). Cause: products sharing a catalog page got the page's "best" image. Fix:
1:1 image↔code assignment per page (each photo goes to the article number printed next
to it; no photo reused within a page). 97 images re-extracted. Remaining shared photo:
Screwlink 8mm/10mm — the catalog genuinely prints one photo for both. Verified by
labeled contact-sheet review of all 98.

*Categories* — the original categories came from the client's pasted list; the audit
re-derived them from the catalogs' own section headers (e.g. "HARDWARE | PULLEYS") on
the overview pages. 20 products moved, including:
- Ultralight Junior III → **Helmets** (was Carabiners!), Joker III/Junior → **Harnesses**
- Cable Kit VI → **Via Ferrata**, X-Tube → **Slings & Webbing**, Sit Start III → **Crash Pads**
- Pure/Jim sixpack sets, Antitwist, Screwlinks → **Carabiners & Quickdraws** (were Chalk)
- Warp → **Pulleys**; Hand/Foot Cruiser → new **Rope Clamps & Ascenders**
- Mini Rig / Master Rig II → **Hardware Accessories** (rigging plates)
- Voltage III → **Performance** (the catalog lists it there, not High-End)

Site now has 17 categories mirroring the catalogs' structure.

## Open items for the client
- 4 products named without article codes (see sheet 2 of catalog-review.xlsx):
  Chalk Loose III, Chalk Balls II, Kids Shield II, Ultralight III.
- Hi-res imagery: request Edelrid's dealer media pack (catalog photos are print-res crops).
