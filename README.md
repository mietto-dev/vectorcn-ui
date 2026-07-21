# shadcn/ui monorepo template

This is a Next.js monorepo template with shadcn/ui.

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```

## TODO

PAGES

- Sidebar menu should include Docs and Blocks sections
- Sidebar should have an opening trigger button

COMPONENTS

- Avatar: square and lame
- Badge: correct border and font and color variants
- Breadcrumbs: correct font and color
- Button: include variants, attention to icon button
- Calendar: background color and overall border, selected day thick border, fonts, etc
- Card: default padding, internal layout spacing
- Carousel: icon buttons, test content transition
- Chart: data colors, BG pattern colors, overall color variants
- Checkbox: fix thick border, internal bg, check mark color could be better, spacing between text
- ComboBox: background, fonts, selected and/or highlighted items styling (border, colors, etc)
- Command: same as ComboBox
- Dialog: fix thick border, fix close button with a proper icon button, internal layout (space between title and body, same as card)
- Dropdown Menu: fix error (Base UI: MenuGroupContext is missing)
- Hover Card: fix thick border and internal layout
- Input: fix errors with autocomplete, review fonts maybe?
- Input OTP: change font to vector battle, review placeholder / empty / filled styles
- Select: fix thick border on options, maybe review fonts
- Sheet: fix thick border Y, review BG and close button, same as Dialog
- Skeleton: complete crap, remove the thick border and the lame BG - replace it with some actual shapes
- Label: maybe another font, weight, lowercase? to signal it's a label
- Pagination: completely broken layout, review everything.
- Popover: same observations as Hover Card.
- Progress: crappy as well - remove thick border, review sizing, bg and progress fill patterns, animation, etc
- Separator: maybe use a solid, thinner line here? Another color?
- Radio Group: add the shadow glow on the round selector
- Resizable: doesn't seem to work right now
- Switch: get rid of thick borders and do a vector style redesign
- Tabs: use a squared, vector styled, old office, criminal file-like design
- Toggle: pure shit as well, remove the thick borders and inherit the button styling and color variants
- Tooltip: absolute shite - use a transparent faded bg like the inputs, fix the borders to the vector style, use the default white, glowing font
