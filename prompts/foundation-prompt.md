# Foundation Implementation Prompt

Convert the provided vanilla reference prototype into a Foundation for Sites 6 implementation for a bachelor thesis comparison of CSS frameworks.

## Goal

Reproduce the same prototype as closely as possible using Foundation for Sites 6 classes and layout patterns. Do not redesign the page.

## Preserve

- Same section order: navigation, header, summary cards, recent activity, form, footer.
- Same text content.
- Same number of cards, form fields, buttons, and links.
- Same semantic structure where possible: `nav`, `header`, `main`, `section`, `form`, `footer`.
- Same mobile menu behaviour using Foundation responsive menu/top-bar behaviour where appropriate.
- Same responsive goals:
  - mobile: stacked layout;
  - tablet: two-column card layout where appropriate;
  - desktop: four-column card layout.

## Measurement Hooks

Add the following attributes to the relevant sections:

- `data-section="navigation"`
- `data-section="header"`
- `data-section="summary-cards"`
- `data-section="activity"`
- `data-section="form"`
- `data-section="footer"`

## Constraints

- Use Foundation for Sites 6 classes for layout, XY Grid, spacing, typography, buttons, forms, callouts/cards, and responsiveness.
- Use Foundation components where appropriate, especially top-bar, responsive menu, grid, forms, buttons, and callouts.
- Use custom CSS only where necessary to match the reference prototype visually.
- Do not add external icons, images, animations, or extra libraries.
- Do not change text content.
- Do not add or remove sections.
- Keep JavaScript limited to required Foundation behaviour or minimal menu behaviour.

## Output

Return one complete standalone HTML file.

Add this comment at the top:

```html
<!--
Implementation: Foundation for Sites 6
Reference prototype: AdminPanel X
Purpose: standardized CSS framework comparison
Custom CSS used: yes/no
JavaScript used: Foundation menu/top-bar behaviour only
Sections preserved: navigation, header, summary-cards, activity, form, footer
-->
