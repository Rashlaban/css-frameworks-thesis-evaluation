# Bulma Implementation Prompt

Convert the provided vanilla reference prototype into a Bulma implementation for a bachelor thesis comparison of CSS frameworks.

## Goal

Reproduce the same prototype as closely as possible using Bulma classes. Do not redesign the page.

## Preserve

- Same section order: navigation, header, summary cards, recent activity, form, footer.
- Same text content.
- Same number of cards, form fields, buttons, and links.
- Same semantic structure where possible: `nav`, `header`, `main`, `section`, `form`, `footer`.
- Same mobile menu behaviour using only minimal vanilla JavaScript.
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

- Use Bulma classes for layout, columns, spacing, typography, colours, borders, boxes, buttons, forms, and responsiveness.
- Use Bulma’s CSS-only styling approach as much as possible.
- Use custom CSS only where necessary to match the reference prototype visually.
- Do not add external icons, images, animations, or extra libraries.
- Do not change text content.
- Do not add or remove sections.
- Use only minimal vanilla JavaScript for the mobile navbar toggle if required.

## Output

Return one complete standalone HTML file.

Add this comment at the top:

```html
<!--
Implementation: Bulma
Reference prototype: AdminPanel X
Purpose: standardized CSS framework comparison
Custom CSS used: yes/no
JavaScript used: mobile menu only
Sections preserved: navigation, header, summary-cards, activity, form, footer
-->
