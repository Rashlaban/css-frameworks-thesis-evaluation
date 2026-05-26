# Bootstrap Implementation Prompt

Convert the provided vanilla reference prototype into a Bootstrap 5.3 implementation for a bachelor thesis comparison of CSS frameworks.

## Goal

Reproduce the same prototype as closely as possible using Bootstrap 5.3 classes and components. Do not redesign the page.

## Preserve

- Same section order: navigation, header, summary cards, recent activity, form, footer.
- Same text content.
- Same number of cards, form fields, buttons, and links.
- Same semantic structure where possible: `nav`, `header`, `main`, `section`, `form`, `footer`.
- Same mobile menu behaviour using Bootstrap navbar behaviour where appropriate.
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

- Use Bootstrap 5.3 classes for layout, grid, spacing, typography, colours, borders, shadows, buttons, forms, and responsiveness.
- Use Bootstrap components where appropriate, especially navbar, cards, buttons, form controls, and grid.
- Use custom CSS only where necessary to match the reference prototype visually.
- Do not add external icons, images, animations, or extra libraries.
- Do not change text content.
- Do not add or remove sections.
- Keep JavaScript limited to Bootstrap behaviour or minimal menu behaviour.

## Output

Return one complete standalone HTML file.

Add this comment at the top:

```html
<!--
Implementation: Bootstrap 5.3
Reference prototype: AdminPanel X
Purpose: standardized CSS framework comparison
Custom CSS used: yes/no
JavaScript used: Bootstrap navbar/menu behaviour only
Sections preserved: navigation, header, summary-cards, activity, form, footer
-->
