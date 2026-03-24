# Feedback section — proposal

Document for review before implementation.

## Goal

- New **Feedback** section on the landing page: screenshot-style feedback from learners.
- **Masonry-style grid** showing a **fixed number** of thumbnails (not every file at once).
- Clear **indicator** that **more images exist**; users open a **detail (lightbox) view** to see **all** images with **next / previous**.
- **Responsive** across breakpoints.
- **Dynamic file list**: any image added under `src/assets/feedback/` is included automatically (no manual list to maintain).

---

## Placement

- Add **`FeedbackSection`** on `Index` (e.g. after **Success stories** or **Testimonials** — final order TBD).
- Section **`id="feedback"`** for anchors / future nav links.

---

## Data: auto-include images

- Use Vite **`import.meta.glob`** on `src/assets/feedback/*` with allowed extensions (e.g. `png`, `jpg`, `jpeg`, `webp`, and uppercase variants if needed).
- Sort paths **lexicographically** for stable order when files are added or renamed.
- Result: one array of resolved URLs; **count grows automatically** when new files are added.

---

## Masonry grid (visible thumbnails)

- **Layout**: CSS **multi-column** (`columns-1` → `sm:columns-2` → `lg:columns-3`), items with **`break-inside: avoid`** so images are not split across columns.
- **Fixed visible count**: constant **`GRID_VISIBLE_COUNT`** (e.g. **6** or **8** — to confirm during implementation).
- Render **`images.slice(0, GRID_VISIBLE_COUNT)`** only in the grid.
- **Thumbnails**: `width: 100%`, `height: auto`, **`rounded-xl`** (or `rounded-2xl`), subtle border / hover ring aligned with existing sections.

---

## “There’s more” indicator

Requirement: user understands **not everything** is shown in the masonry, but **everything** is available in detail view.

**Recommended pattern (single primary affordance)**

- Use the **last visible cell** as a **“+N more”** tile:
  - **N = totalImages − GRID_VISIBLE_COUNT** (if N > 0).
  - Visual: next image (or first hidden image) **under a dark scrim** with centered text, e.g. **“+12 ảnh”** or **“Xem thêm”**.
  - **Click** opens the lightbox at index **`GRID_VISIBLE_COUNT - 1`** or **`GRID_VISIBLE_COUNT`** (product choice: open on first “hidden” image vs. last visible — should be consistent and documented in UI copy).

**Optional secondary hint**

- Short line under the grid: *“Chạm ảnh hoặc +N để xem toàn bộ trong chế độ xem chi tiết.”* (copy can be adjusted.)

If **N === 0** (fewer images than the cap), **no** “+N” tile; show only real thumbnails.

---

## Detail view (lightbox)

- **Radix Dialog** (already in the project), full-viewport overlay, dark scrim.
- **Single large image**: `max-h-[90vh]`, `object-contain`, horizontal padding on small screens.
- **Previous / next**: chevron controls; **keyboard** ← / →; **Escape** closes.
- **Index state**: `currentIndex` over the **full** `images` array (all files from glob).
- **Opening**:
  - From a normal thumbnail: `currentIndex = that index`.
  - From “+N” tile: `currentIndex` as agreed above.
- Optional: **counter** `currentIndex + 1 / total`.

---

## Accessibility

- Thumbnails and “+N” tile: **`button`** or **`<a role="button">`** with **`aria-label`** describing action and position (e.g. “Mở ảnh 3 trong 20”).
- Dialog: focus trap (Radix default); label for the dialog if required by audit.

---

## Responsive notes

- Column count and gaps follow Tailwind breakpoints (same spirit as other sections).
- Lightbox controls: adequate **touch target** size on mobile; consider placing controls so they don’t cover the image (e.g. below image on narrow screens).

---

## Files to add / change (when implementing)

| Item | Action |
|------|--------|
| `src/components/FeedbackSection.tsx` | New: grid, indicator tile, lightbox state |
| `src/pages/Index.tsx` | Import and render section |
| `src/assets/feedback/*` | Source images (already in use) |
| Navbar / footer | Optional: link to `#feedback` |

---

## Open decisions (for you to confirm)

1. **`GRID_VISIBLE_COUNT`**: preferred number (e.g. 6 vs 8).
2. **“+N” tile click**: open lightbox on **first hidden** image vs **last visible** image.
3. **Section order** on the page relative to Success stories / Testimonials.
4. **Title / subtitle copy** (Vietnamese) for the section header.

---

## Summary

| Topic | Approach |
|-------|----------|
| Dynamic images | `import.meta.glob` + sorted list |
| Masonry | CSS columns, responsive column count |
| Fixed grid | Show first N only; “+N” on last cell when needed |
| Full gallery | Lightbox over **entire** list with next/prev |
| Responsive | Breakpoint-based columns + contained lightbox image |

After you confirm the open decisions above, implementation can follow this spec.
