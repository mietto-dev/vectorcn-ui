# vectorcn/ui — Design System Architecture

## 1. Atmosphere & Identity

**Ancient vector display / CRT terminal** — the visual language is rooted in early vector graphics terminals (Tektronix, DEC GT40) and arcade cabinet aesthetics. Every component should feel like it belongs on a phosphor display from the late 1970s.

**Core principles:**
- **Square geometry** — 0px border-radius everywhere. No rounded corners. No circles. Only rectangles and squares.
- **Neon glow** — Text and active elements emit a phosphor glow via `text-shadow` and `box-shadow`. Gold/amber for primary, cyan for accent.
- **Uppercase tracking** — All labels, headings, and control text are uppercase with generous letter-spacing.
- **Framed panels** — Every container is enclosed in a dashed or solid border frame. The CRT bezel pattern (thick top/bottom borders + thin left/right overlay) is the signature visual motif.
- **Dot-matrix texture** — A subtle radial-gradient dot pattern (`.bg` / `.dot-matrix`) provides the CRT scan-line / phosphor grain texture on backgrounds.
- **Dashed borders** — Separators, hover states, and container rails use dashed borders (CSS `border-style: dashed`).

## 2. Color

### Palette

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--background` | `oklch(1 0 0)` | `oklch(0.141 0.005 285.823)` | Page background |
| `--foreground` | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)` | Body text |
| `--primary` | `oklch(0.795 0.184 86.047)` | `oklch(0.795 0.184 86.047)` | Gold/amber — interactive elements, focus ring |
| `--primary-foreground` | `oklch(0.421 0.095 57.708)` | `oklch(0.421 0.095 57.708)` | Text on primary |
| `--accent-foreground` | `oklch(0.77 0.14 235.16)` | `oklch(0.77 0.14 235.16)` | Cyan — secondary emphasis, links |
| `--accent-foreground-glow` | `oklch(78.746% 0.10956 232.259)` | `oklch(78.746% 0.10956 232.259)` | Cyan glow variant |
| `--destructive` | `oklch(0.54 0.21 24.17)` | `oklch(0.54 0.21 24.17)` | Red — destructive actions |
| `--success` | `oklch(0.85 0.25 146.94)` | `oklch(0.85 0.25 146.94)` | Green — success indicators |
| `--border` | `oklch(0.92 0.004 286.32)` | `oklch(1 0 0 / 10%)` | Borders |
| `--input` | `oklch(0.92 0.004 286.32)` | `oklch(1 0 0 / 15%)` | Input borders |
| `--ring` | `oklch(0.795 0.184 86.047)` | `oklch(0.795 0.184 86.047)` | Focus ring — gold |
| `--radius` | `0rem` | `0rem` | No rounding anywhere |

### Text glow tokens (via `@theme inline`)
- `--text-shadow-md`: `0 0 8px`
- `--text-shadow-lg`: `0px 1px 15px var(--text-shadow-color, #0000001a)`
- `--text-shadow-xl`: multi-layer glow for emphasis

## 3. Typography

### Font inventory

| CSS Class / Variable | Font Name | Source | Usage |
|---|---|---|---|
| `vectorBattle.className` | Vectorb | Local font `Vectorb.ttf` | Headings, display text |
| `hershey.className` | AVHersheySimplex | Local font (Light/Medium/Heavy weights) | Body text, paragraphs |
| `hersheyDuplex.className` | AVHersheyDuplex | Local font `AVHersheyDuplexLight.otf` | Jumbo / hero text |
| `pressStart.className` | Press Start 2P | Google Fonts | Retro control labels, small UI text |
| `simplex.className` | Simplex | Local font `Simplex.ttf` | Calendar, data-dense displays |

### Typographic rules
- All headings: `vectorBattle`, uppercase, generous tracking
- Body: `hershey` (Simplex weight), sentence-case preferred
- Labels and control text: uppercase, `pressStart` or tracking `0.05em`
- Calendar: `simplex` for day/month rendering
- CRT glow on headings via `text-shadow-lg` / `text-shadow-xl`

## 4. Spacing & Layout

- **Base unit**: 4px (Tailwind `gap-*` / `p-*` / `m-*` scale)
- **Container max-width**: 1400px
- **Grid**: CSS Grid preferred; 12-column implicit via Tailwind `grid-cols-*`
- **Framed containers**: 2px solid border (primary gold or border color), with `p-4` inner padding
- **CRT bezel pattern**: Outer `border-y-4` or `border-y-6` thick rail + inner overlay with `border-x-4` thin rail
- **Separator**: Dashed border (`border-dashed`) rather than solid

## 5. Components

Each vector wrapper component lives at `components/ui/vector/<name>.tsx` and wraps a Base UI-backed shadcn base component from `packages/ui/src/components/<name>.tsx`.

| Vector Component | Base Component | Key CRT Modifications |
|---|---|---|
| `Button` | `button` | Success-green outline default, gold primary, retro font variant, glow on hover, translate on active |
| `Input` | `input` | CRT bezel frame, retro font variant, focus glow |
| `InputOTP` | `input-otp` | CRT bezel frame, retro slots |
| `Label` | `label` | Uppercase tracking, retro font variant |
| `Badge` | `badge` | Decorative border sidecaps, retro font |
| `Card` | `card` | Outer frame border, retro font default |
| `Separator` | `separator` | Dashed border style |
| `Skeleton` | `skeleton` | Pixel-block animation, retro variant |
| `Toggle` | `toggle` | Rectangular, `data-[state=on]` gold fill |
| `Avatar` | `avatar` | Square shape, retro fallback font |
| `Textarea` | `textarea` | CRT bezel frame (like Input) |
| `Checkbox` | `checkbox` | Square indicator, gold fill on check |
| `Switch` | `switch` | Rectangular track, square thumb |
| `RadioGroup` | `radio-group` | Square indicators, gold fill |
| `Select` | `select` | Bezel trigger, framed content, dashed item hover |
| `Tabs` | `tabs` | Framed tab rail, gold active fill |
| `Command` | `command` | Hardware-panel frame, CRT search icon, dialog mode |
| `Collapsible` | `collapsible` | Frame borders, chevron rotation |
| `Breadcrumb` | `breadcrumb` | CRT arrow separator, retro font |
| `Combobox` | `command` + `popover` | Command-based, framed popover |
| `Dialog` | `dialog` | Semi-transparent overlay, 4px border content frame, CRT X close |
| `AlertDialog` | `alert-dialog` | Same pattern with confirm/cancel |
| `DropdownMenu` | `dropdown-menu` | Dashed item hover, CRT separators, retro shortcuts |
| `HoverCard` | `hover-card` | 4px border content frame |
| `Popover` | `popover` | 4px border content, trigger passthrough |
| `Sheet` | `sheet` | Slide panel with bezel, CRT close |
| `Tooltip` | `tooltip` | 4px border, decorative side caps, retro font, variants |
| `Resizable` | `resizable` | CRT grip indicator |
| `Calendar` | `calendar` (react-day-picker) | Card frame, dot-matrix background, pixel chevron SVG, simplex font |
| `Carousel` | `carousel` (embla) | Prev/next with CRT button style, square dot indicators |
| `Pagination` | `pagination` | Square page buttons, gold active |
| `Progress` | `progress` | Block-segment fill, indicator value |
| `Table` | `table` | Dashed row separators, framed container, retro headers |
| `Chart` | `chart` (recharts) | Dot-matrix background, CRT-styled tooltip/legend |

## 6. Motion & Interaction

- **Transitions**: `transition-all duration-150` for hover, `duration-200` for active
- **Hover effects**: Primary glow amplification (`text-shadow` or `box-shadow`), border color shift towards primary
- **Active effects**: Slight translateY (1-2px) or scale(0.98) for press feedback
- **Focus**: Gold ring via `ring-primary` / `--ring`, consistent across all interactive elements
- **Reduced motion**: Respect `prefers-reduced-motion` — disable glow animations and translate effects
- **GPU compositing**: Only `transform` and `opacity` for animations where possible (GPU-friendly)

## 7. Depth & Surface

- **No shadows for surface separation** — Use borders (solid or dashed) to separate surfaces, not box-shadows
- **Text glow for emphasis** — `text-shadow` with primary/gold or accent/cyan as the glow color
- **Elevation via border weight** — Higher emphasis = thicker border (2px default, 4px for high emphasis)
- **Dot-matrix texture for backgrounds** — The `.bg` utility applies `radial-gradient` with `background-size: 5px 5px` for phosphor grain
- **Overlays**: Semi-transparent dark backdrop (`bg-black/50` or similar)
