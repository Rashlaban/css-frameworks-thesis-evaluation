# Tailwind CSS Implementation Prompt

Convert the provided vanilla reference prototype into a Tailwind CSS implementation for a bachelor thesis comparison of CSS frameworks.

## Goal

Reproduce the same prototype as closely as possible using Tailwind CSS utility classes. Do not redesign the page.

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

- Use Tailwind CSS classes for layout, spacing, typography, colours, borders, shadows, buttons, forms, and responsiveness.
- Avoid custom CSS unless absolutely necessary.
- Do not add external icons, images, animations, or extra libraries.
- Do not change text content.
- Do not add or remove sections.
- Use only minimal JavaScript for the mobile menu.

## Output

Return one complete standalone HTML file.

Add this comment at the top:

```html
<!--
Implementation: Tailwind CSS
Reference prototype: AdminPanel X
Purpose: standardized CSS framework comparison
Custom CSS used: yes/no
JavaScript used: mobile menu only
Sections preserved: navigation, header, summary-cards, activity, form, footer
-->
